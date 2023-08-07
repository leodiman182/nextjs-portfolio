"use client";
import projectsGallery from "@/utils/projectsGallery";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <section data-testid="portfolio-section" className="pb-[100px]">
      <h2 className="font2 text-primary-main text-[26px] md:text-[34px] font-bold text-center md:px-[150px] pt-[40px] pb-[25px] md:py-0">
        Criando, experimentando e resolvendo
      </h2>
      <h2 className="font1 text-white md:text-[18px] text-center md:px-[150px] -pt-[20px]">
        Conheça alguns dos projetos que atuei como desenvolvedor
      </h2>
      <div className="pt-[50px] grid md:grid-cols-2 w-full xl:w-[1000px] gap-y-[100px] md:gap-y-[75px] gap-x-[40px]">
        {projectsGallery.map((project, index) => (
          <div
            key={index}
            className="col-span-1 relative w-full h-[200px] md:h-[275px]"
          >
            <h3 className="font1 text-secondary-main text-[20px] uppercase pb-[10px]">
              {project.name}
            </h3>
            <div
              onClick={() =>
                setSelectedProject({
                  name: project.name,
                  description: project.description,
                  imageGallery: project.imageGallery,
                  link: project.link,
                  stacks: project.stacks,
                  github: project.github,
                })
              }
              className={`w-full h-full opacity-0 hover:opacity-90 absolute flex flex-col justify-center items-center duration-150 px-[30px] text-center bg-primary-main hover:cursor-pointer`}
            >
              <h3 className="font2 text-white font-bold text-[28px] hover:cursor-pointer">
                Saiba mais sobre {project.alt}
              </h3>
            </div>
            <Image
              className="w-full h-full object-cover object-top"
              src={project.imageGallery[0]}
              alt={project.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
