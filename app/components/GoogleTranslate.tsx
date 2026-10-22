'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages?: string;
              layout?: number;
              autoDisplay?: boolean;
            },
            elementId: string
          ): void;
          InlineLayout: {
            SIMPLE: number;
            HORIZONTAL: number;
            VERTICAL: number;
          };
        };
      };
    };
  }
}

const GoogleTranslate = () => {
  useEffect(() => {
    // Prevent multiple initializations
    if (document.getElementById('google-translate-script')) {
      return;
    }

    // Define the init function BEFORE loading the script
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        console.error('Google Translate failed to load.');
        return;
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'es,fr,zh-CN,ru,de,ar,ja,it,pt,nl',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Load the script
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = () => {
      console.error('Failed to load Google Translate script.');
    };

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      // Remove init callback to avoid memory leaks
      delete window.googleTranslateElementInit;

      // Optional: Remove the script (only if you want to fully reset)
      // const existingScript = document.getElementById('google-translate-script');
      // if (existingScript) existingScript.remove();
    };
  }, []);

  return <div id="google_translate_element" className="google-translate-container" />;
};

export default GoogleTranslate;