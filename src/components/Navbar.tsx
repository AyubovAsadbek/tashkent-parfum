import Link from "next/link";
import LanguageSwitcher from "./Language-switcher";
import { useTranslations } from "next-intl";

import logo from "../../public/images/svg/logo.svg";
import Image from "next/image";
import Button from "./base/Button";
import FormInput from "./Form/FormInput";

const Navbar = () => {
  // Language Switcher
  const t = useTranslations();

  return (
    <header>
      <div className="bg-greyPrimar">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="tel:+998951455566"
              className="group text-greySecondary  text-xs flex items-center gap-2 hover:cursor-pointer hover:text-redPrimary"
            >
              <i className="icon-phone transition duration-300 text-[#CDCDD0] group-hover:text-redPrimary inline-block text-[16px]"></i>
              <span className="transition duration-300">
                +998 (71) 200 70 07
              </span>
            </Link>
            <Link
              target="_blank"
              href="https://yandex.uz/maps/-/CDsDEB~M"
              className="group text-greySecondary  text-xs flex items-center gap-1 hover:cursor-pointer hover:text-redPrimary"
            >
              <svg
                className="stroke-[#CDCDD0] transition duration-300 group-hover:stroke-redPrimary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7998 8.79999L17.5588 9.05297C18.3508 9.31698 18.7468 9.44898 18.9733 9.76325C19.1998 10.0775 19.1998 10.4949 19.1998 11.3298V15.8632C19.1998 16.8959 19.1998 17.4123 18.928 17.744C18.8357 17.8566 18.7237 17.9515 18.5974 18.0241C18.2255 18.2376 17.7162 18.1527 16.6975 17.9829C15.6924 17.8154 15.1898 17.7317 14.6917 17.7733C14.5169 17.788 14.3432 17.8141 14.1718 17.8515C13.6835 17.9582 13.2237 18.188 12.3043 18.6477C11.1045 19.2476 10.5046 19.5476 9.86607 19.64C9.67374 19.6679 9.47964 19.6817 9.28531 19.6813C8.64009 19.6801 8.00929 19.4698 6.74771 19.0493L6.44086 18.947C5.64884 18.683 5.25282 18.551 5.02631 18.2367C4.7998 17.9225 4.7998 17.505 4.7998 16.6702V12.7264C4.7998 11.3993 4.7998 10.7357 5.19054 10.3788C5.25891 10.3164 5.33428 10.2621 5.41514 10.217C5.87726 9.95914 6.50676 10.169 7.76577 10.5886"
                  strokeWidth="1.5"
                />
                <path
                  d="M7.2002 8.56024C7.2002 6.04169 9.34923 4 12.0002 4C14.6512 4 16.8002 6.04169 16.8002 8.56024C16.8002 11.0591 15.2682 13.975 12.878 15.0177C12.3207 15.2608 11.6796 15.2608 11.1224 15.0177C8.73219 13.975 7.2002 11.0591 7.2002 8.56024Z"
                  strokeWidth="1.5"
                />
                <ellipse
                  cx="11.9999"
                  cy="8.80001"
                  rx="1.6"
                  ry="1.6"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="transition duration-300">{t("location")}</span>
            </Link>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="flex gap-4">
              <Link
                target="_blank"
                className="group relative"
                href="https://www.instagram.com/toshkent_parfum_/"
              >
                <i className="icon-Facebook text-xl text-[#9E9EA5] hover:text-redPrimary transition duration-200"></i>
                <div className="absolute bg-[#5E5F5F] text-white top-11 transition duration-300 left-1/2 -translate-x-1/2 px-2 py-1 text-sm rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1/2 ">
                  facebook
                </div>
              </Link>
              <Link
                target="_blank"
                className="group relative"
                href="https://www.instagram.com/toshkent_parfum_/"
              >
                <i className="icon-Instagram text-xl text-[#9E9EA5] hover:text-redPrimary transition duration-200"></i>
                <div className="absolute bg-[#5E5F5F] text-white top-11 transition duration-300 left-1/2 -translate-x-1/2 px-2 py-1 text-sm rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1/2 ">
                  instagram
                </div>
              </Link>
              <Link
                target="_blank"
                className="group relative"
                href="https://t.me/toshkent_parfume"
              >
                <i className="icon-telegram text-xl text-[#9E9EA5] hover:text-redPrimary transition duration-200"></i>
                <div className="absolute bg-[#5E5F5F] text-white top-11 transition duration-300 left-1/2 -translate-x-1/2 px-2 py-1 text-sm rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1/2 ">
                  telegram
                </div>
              </Link>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className="bg-white py-4 border-b border-[#F2F3F5]">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="mr-6">
            <Image src={logo} alt="Logo Image" />
          </Link>
          <Button
            text={t("catalog")}
            variant="dark"
            iconLeft={true}
            icon="icon-Hamburger-Menu text-2xl"
          />
          <form className="max-w-[530px] w-full group mr-2">
            <FormInput
              id="search"
              // onChange={() => {}}
              type="text"
              placeholder={t("search")}
              before="icon-search"
              // value=""
              parentClass="h-11 border border-transparent ml-2 items-center bg-[#F2F3F5] rounded-lg w-full group-focus-within:border-black"
              inputClass="h-full w-full outline-none bg-transparent "
            />
          </form>
          <div className="ml-3 flex gap-5">
            <Link
              href={"/"}
              className="flex items-center flex-col capitalize text-greySecondary transition duration-200 hover:text-redPrimary"
            >
              <i className="icon-Box text-[28px]"></i>
              <span className="text-xs">{t("myOrders")}</span>
            </Link>
            <Link
              href={"/"}
              className="flex items-center flex-col capitalize text-greySecondary transition duration-200 hover:text-redPrimary"
            >
              <i className="icon-Cart text-[28px]"></i>
              <span className="text-xs">{t("cart")}</span>
            </Link>
            <Link
              href={"/"}
              className="flex items-center flex-col capitalize text-greySecondary transition duration-200 hover:text-redPrimary"
            >
              <i className="icon-Heart text-[28px]"></i>
              <span className="text-xs">{t("saved")}</span>
            </Link>
          </div>
          <Button
            text={t("login")}
            iconLeft={true}
            icon="icon-Login text-2xl"
            variant="primary"
            customClass="ml-8"
          />
        </div>
      </div>
      <div className="bg-white py-4">
        <div className="container flex items-center justify-between">
          <Link
            href="/"
            className="text-[#383838] text-[14px] font-semibold border-r-2 pr-4"
          >
            <span className="font-semibold">Топ 10 товаров</span>
          </Link>
          <Link
            href="/"
            className="text-[#383838] text-[14px] font-semibold border-r-2 pr-4"
          >
            Скидки
          </Link>
          <Link
            href="/"
            className="text-[#383838] text-[14px] font-semibold border-r-2 pr-4"
          >
            Товары для лица
          </Link>
          <Link
            href="/"
            className="text-[#383838] text-[14px] font-semibold border-r-2 pr-4"
          >
            Ванные бомбочки
          </Link>
          <Link
            href="/"
            className="text-[#383838] text-[14px] font-semibold border-r-2 pr-4"
          >
            Продукты макияжа
          </Link>
          <Link
            href="/"
            className="text-[#383838] text-[14px] font-semibold border-r-2 pr-4"
          >
            Краски для волос
          </Link>
          <Link
            href="/"
            className="text-[#383838] text-[14px] font-semibold border-r-2 pr-4"
          >
            Мужские продукты
          </Link>
          <Link href="/" className="text-[#383838] font-semibold">
            Товары для ванны и уборной
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
