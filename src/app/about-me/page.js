"use client";
import profilePic from "@/assets/pictures/PERFIL1X1BRANCO.jpg";
import { galleryImages } from "@/assets/pictures/album/exports";
import CustomButtom from "@/components/CustomButton";
import Image from "next/image";

export default function AboutMePage() {
  return (
    <section data-testid="about-section" className="pb-[50px] md:pb-0">
      <h2 className="font2 text-primary-main text-[26px] md:text-[34px] py-[40px] font-bold text-center md:px-[150px]">
        Buscando a presença, comunicação e arte nas coisas mais simples da vida
      </h2>
      <article className="flex flex-col justify-center md:grid md:grid-cols-2 md:mb-[40px]">
        <aside className="mb-[28px] md:mb-0 md:col-span-1">
          <Image
            className="visible p-[8px] bg-secondary-dark hover:bg-secondary-main w-[250px] rounded-full mx-auto duration-150 md:mt-[40px] avatar-float"
            src={profilePic}
            alt="Profile pic Leonardo"
          />
        </aside>
        <aside className="md:col-span-1 md:pr-[75px] px-[20px] md:px-0">
          <h4 className="font1 text-tertiary-main text-[20px] text-justify md:text-left uppercase mb-[20px] md:mb-[10px] font-medium">
            Muito prazer! Eu sou o Léo :)
          </h4>
          <p className="font1 text-white text-[18px] font-normal">
            Atualmente, atuo como desenvolvedor fullstack e descobri o prazer
            por aprender através do desenvolvimento. Aprecio cada pequena
            solução encontrada no dia a dia. Em grande escala, sonho contribuir
            com projetos que impactem positivamente a vida de muitas pessoas e
            me tornar referência em alguma tecnologia.
            <br />
            <br />
            Fora do trabalho, amo música (já fiz mais de 200 shows e lancei
            álbuns nas plataformas digitais), sou gamer (coleciono videogames e
            passo horas jogando, se puder) e fui co-host de um podcast
            descontraído (com a marca de 50 episódios no ar) chamado{" "}
            <a
              className="text-primary-main md:text-white hover:text-tertiary-main duration-150 font-bold"
              target="_blank"
              href="https://www.youtube.com/@ProsaInterior"
              rel="noreferrer"
            >
              Prosa Interior
            </a>
            <br />
            <br />
            Amo viajar e conhecer pessoas de diferentes lugares, idiomas e
            culturas. Também amo estar em contato com a natureza, acampando ou
            explorando.
          </p>
        </aside>
      </article>
      <div className="w-full mx-auto flex flex-col items-center my-[50px]">
        <CustomButtom onClick={() => setPage("contact")}>
          Fale comigo
        </CustomButtom>
      </div>
      <aside>
        <h3 className="font2 text-primary-main text-[26px] md:text-[34px] py-[40px] md:py-[20px] font-bold text-center md:px-[150px]">
          Um pouco mais de mim
        </h3>
        <div className="grid md:grid-cols-2 w-full xl:w-[1000px] gap-[30px] px-[30px]">
          {galleryImages.map((img, index) => (
            <div key={index} className="col-span-1 relative w-full h-[300px]">
              <div className="w-full h-full bg-primary-main opacity-0 hover:opacity-90 absolute flex flex-col justify-center items-center duration-150 px-[30px] text-center">
                <h3 className="font2 text-white font-bold text-[28px] hover:cursor-default">
                  {img.alt}
                </h3>
              </div>
              <Image
                className={`w-full h-full object-cover ${img.className}`}
                src={img.src}
                alt={img.src}
              />
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
