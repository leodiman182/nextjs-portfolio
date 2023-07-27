import { usePathname, useRouter } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <h2
      onClick={() => router.push("/")}
      className="logo-title text-white text-[35px] md:text-[50px] font1 mb-[5px] md:mb-[30px] hover:cursor-pointer duration-150 font-neon"
    >
      &nbsp;
      <span
        className={
          pathname === "/"
            ? "text-primary-light font-700 group-hover:cursor-pointer duration-150 ease-in-out neon"
            : "text-slate-900 font-700 group-hover:cursor-pointer duration-150 ease-in-out"
        }
      >
        &#x0007B;{" "}
      </span>
      dev
      <span
        className={
          pathname === "/"
            ? "text-primary-light group-hover:cursor-pointer duration-150 ease-in-out neon"
            : "text-my-pink-500 group-hover:cursor-pointer duration-150 ease-in-out"
        }
      >
        .
      </span>
      leo
      <span
        className={
          pathname === "/"
            ? "text-primary-light font-700 group-hover:cursor-pointer duration-150 ease-in-out neon"
            : "text-slate-900 font-700 group-hover:cursor-pointer duration-150 ease-in-out"
        }
      >
        {" "}
        &#x0007D;
      </span>
    </h2>
  );
};

export default Logo;
