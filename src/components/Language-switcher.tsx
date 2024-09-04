"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const activeLanguage = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    // Construct the new URL, preserving the rest of the path.
    const newUrl = `${nextLocale}/${window.location.pathname
      .split("/")
      .slice(2)
      .join("/")}`;
    router.replace(newUrl);
  };

  return (
    <label className="group">
      <select
        value={activeLanguage}
        onChange={onSelectChange}
        className="bg-transparent select select-xs outline-none transition duration-200 group-hover:text-redPrimary"
      >
        <option value="uz" className="group-hover:text-black">
          O&apos;zbekcha
        </option>
        <option value="la" className="group-hover:text-black">
          Ўзбекча
        </option>
        <option value="ru" className="group-hover:text-black">
          Русский
        </option>
      </select>
    </label>
  );
}
