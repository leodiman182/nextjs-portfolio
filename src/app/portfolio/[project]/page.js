import CustomButtom from "@/components/CustomButton";
import { AiOutlineCaretLeft } from "react-icons/ai";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import { Stack } from "@mui/material";

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center justify-center xl:w-[1000px] w-full">
      <div className="flex flex-row items-center justify-center w-full mt-[25px] mb-[50px]">
        <button
          onClick={() =>
            setSelectedProject({
              name: "",
              description: "",
              imageGallery: [""],
              link: "",
              stacks: [""],
              github: "",
            })
          }
        >
          <AiOutlineCaretLeft className="text-my-pink-300 text-[30px] md:text-[50px] hover:scale-125 duration-150" />
        </button>
        <h3 className="font1 text-my-pink-300 text-[20px] md:text-[28px] uppercase">
          {selectedProject.name}
        </h3>
      </div>

      {selectedProject.github !== "" && (
        <a href={selectedProject.github} target="_blank" rel="noreferrer">
          <CustomButtom startIcon={<GitHubIcon />} variant="contained">
            Confira o repositório
          </CustomButtom>
        </a>
      )}

      <div className={`w-full h-[500px] flex overflow-x-scroll hideSB`}>
        {selectedProject.imageGallery.map((image, index) => (
          <div
            key={index}
            className="min-w-[800px] max-h-[500px] ml-[2rem] flex flex-col items-center justify-center"
          >
            <Image
              className="w-[800px] object-cover"
              src={image}
              alt={selectedProject.name}
            />
          </div>
        ))}
      </div>
      <p className="font1 text-white text-[18px] md:text-[20px] text-center my-[50px]">
        {selectedProject.description}
      </p>
      <div className="w-full flex flex-col items-center justify-center">
        <h4 className="uppercase font1 md:text-[20px] text-my-pink-300 mt-[20px]">
          Stacks utilizadas
        </h4>
        <Stack className="py-[20px]" direction="row" spacing={4}>
          {stackList
            .filter((el) => selectedProject.stacks.includes(el.name))
            .map((stack, index) => (
              <a
                key={index}
                className="mx-[4px] md:mx-0"
                href={stack.href}
                target="_blank"
                rel="noreferrer"
              >
                {stack.icon}
              </a>
            ))}
        </Stack>
      </div>
      {selectedProject.link !== "" ? (
        <a
          target="_blank"
          className="font1 uppercase text-my-pink-300 text-[18px] mt-[50px] mb-[50px] hover:text-black hover:bg-my-pink-100 duration-150"
          href={selectedProject.link}
          rel="noreferrer"
        >
          Visite o site no ar!
        </a>
      ) : (
        <></>
      )}
    </div>
  );
}
