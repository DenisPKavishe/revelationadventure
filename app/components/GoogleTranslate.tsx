"use client";

import { useEffect, useState } from "react";

// Define custom types for the Google Translate element to avoid 'any'
interface TranslateElementOptions {
  pageLanguage: string;
  includedLanguages?: string;
  layout?: any;
  autoDisplay?: boolean;
}

interface GoogleTranslateElement {
  new (options: TranslateElementOptions, elementId: string): void;
  InlineLayout: {
    SIMPLE: any;
    HORIZONTAL: any;
    VERTICAL: any;
  };
}

export default function GoogleTranslate() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // If the script is already loaded, don't load it again
    if (document.getElementById("google-translate-script")) {
      setLoaded(true);
      return;
    }

    // Function to initialize the widget
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,zh-CN,ru,de,ar,ja,it,pt,nl", // English, Spanish, French, Chinese, Russian, German, Arabic, Japanese, Italian, Portuguese, Dutch
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Add the script
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById("google-translate-script");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      // Safely delete the global initialization function
      delete (window as any).googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[40px]">
      {/* This is where Google injects the language dropdown */}
      <div id="google_translate_element" className="custom-google-translate"></div>
    </div>
  );
}