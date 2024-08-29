import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <div className="container">
      <h1>{t("title")}</h1>
    </div>
  );
}
