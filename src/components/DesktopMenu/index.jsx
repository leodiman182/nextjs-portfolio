"use client";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../Logo";

const DesktopMenu = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="hidden md:flex flex-row items-center justify-between px-[80px] py-[50px] max-w-[1024px] mx-auto">
      <button
        data-testid="desktop-portfolio-button"
        onClick={() => router.push("/portfolio")}
        className="relative group hover:cursor-pointer font1"
      >
        <span
          className={
            pathname === "/portfolio"
              ? "bg-primary-main py-[4px] font-medium text-black opacity-90 group-hover:opacity-100 duration-150 uppercase"
              : "text-white opacity-80 group-hover:opacity-100 duration-150 uppercase"
          }
        >
          portfolio
        </span>
        <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-primary-main group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
      </button>
      <button
        data-testid="desktop-resume-button"
        onClick={() => router.push("/resume")}
        className="relative group hover:cursor-pointer font1"
      >
        <span
          className={
            pathname === "/resume"
              ? "bg-primary-main py-[4px] font-medium text-black opacity-90 group-hover:opacity-100 duration-150 uppercase"
              : "text-white opacity-80 group-hover:opacity-100 duration-150 uppercase"
          }
        >
          currículo
        </span>
        <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-primary-main group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
      </button>
      <Logo />
      <button
        data-testid="desktop-about-button"
        onClick={() => router.push("/about-me")}
        className="relative group hover:cursor-pointer font1"
      >
        <span
          className={
            pathname === "/about-me"
              ? "bg-primary-main py-[4px] font-medium text-black opacity-90 group-hover:opacity-100 duration-150 uppercase"
              : "text-white opacity-80 group-hover:opacity-100 duration-150 uppercase"
          }
        >
          sobre mim
        </span>
        <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-primary-main group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
      </button>
      <button
        data-testid="desktop-contact-button"
        onClick={() => router.push("/contact")}
        className="relative group hover:cursor-pointer font1"
      >
        <span
          className={
            pathname === "/contact"
              ? "bg-primary-main py-[4px] font-medium text-black opacity-90 group-hover:opacity-100 duration-150 uppercase"
              : "text-white opacity-80 group-hover:opacity-100 duration-150 uppercase"
          }
        >
          contato
        </span>
        <span className="absolute -bottom-[1px] right-0 w-0 h-[1.5px] bg-primary-main group-hover:w-full group-hover:transition-all rounded-full ease-in-out"></span>
      </button>
    </section>
  );
};

export default DesktopMenu;
