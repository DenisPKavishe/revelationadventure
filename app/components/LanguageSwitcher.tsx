"use client";

import "next-google-translate-widget/styles";
import GoogleTranslate from "next-google-translate-widget";

// Define the ten languages you need, and provide custom labels and flag codes
const MY_LANGUAGES = [
  { label: "English", value: "en", flag: "us" }, // Usually keep the original language as a return option
  { label: "Español", value: "es", flag: "es" },
  { label: "Français", value: "fr", flag: "fr" },
  { label: "中文", value: "zh-CN", flag: "cn" },
  { label: "Русский", value: "ru", flag: "ru" },
  { label: "Deutsch", value: "de", flag: "de" },
  { label: "العربية", value: "ar", flag: "sa" },
  { label: "日本語", value: "ja", flag: "jp" },
  { label: "Italiano", value: "it", flag: "it" },
  { label: "Português", value: "pt", flag: "pt" },
  { label: "Nederlands", value: "nl", flag: "nl" },
];

export default function LanguageSwitcher() {
  return (
    <GoogleTranslate
      pageLanguage="en"
      languages={MY_LANGUAGES}
      menuAlign="right"
      className="my-translate"
    />
  );
}