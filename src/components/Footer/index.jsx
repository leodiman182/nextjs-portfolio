"use client";
import "@/app/globals.css";
import FooterLinks from "../FooterLinks";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      data-testid="footer-element"
      className="w-full max-w-[1024px] mx-auto px-[80px]"
    >
      <article className={pathname === "/contact" ? "flex flex-col-reverse md:flex-row w-full items-center justify-center md:pt-[35px] pb-[25px] xl:pl-0" : "flex flex-col-reverse md:flex-row w-full items-center justify-between md:pt-[35px] pb-[25px] xl:pl-0"}>
        <div className="font1 uppercase font-bold text-primary-main mt-[30px] md:mt-0">
          © {year} Leonardo Diman
        </div>
        {pathname !== "/contact" && <FooterLinks />}
      </article>
    </footer>
  );
};

export default Footer;
