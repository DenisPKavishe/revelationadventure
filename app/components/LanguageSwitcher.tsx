"use client";

import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 1. Define the global init function
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,zh-CN,ru,de,ar,ja,it,pt,nl",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // 2. Load the script if it doesn't exist
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onload = () => setLoaded(true);
      document.body.appendChild(script);
    } else {
      setLoaded(true);
    }

    // 3. Cleanup
    return () => {
      const scriptToRemove = document.getElementById("google-translate-script");
      if (scriptToRemove) scriptToRemove.remove();
      delete (window as any).googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[40px]">
      {/* The div where Google injects the dropdown. We add the custom class here. */}
      <div id="google_translate_element" className="custom-google-translate"></div>
    </div>
  );
}