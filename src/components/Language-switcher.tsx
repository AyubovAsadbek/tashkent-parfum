"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const activeLanguage = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`);
  };

  return (
    <label className="group">
      <select
        defaultValue={activeLanguage}
        onChange={onSelectChange}
        className="bg-transparent  select  select-xs   outline-none transition duration-200 group-hover:text-redPrimary"
      >
        <option value="uz" className="group-hover:text-black group">
          O&apos;zbekcha
        </option>
        <option value="la" className="group-hover:text-black group">
          Ўзбекча
        </option>
        <option value="ru" className="group-hover:text-black group">
          Русский
        </option>
      </select>
    </label>
  );
}
