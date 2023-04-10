import React from "react";

// framer motion
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/images/about.png"
        className="md:mb-0 mt-64 md:mt-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] mb-10"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam tenetur
          architecto quod ipsa error officia natus laborum fuga adipisci impedit
          ex itaque consectetur ab dolore nemo eum nobis, iure reiciendis
          repudiandae, dolor ipsam assumenda vero beatae? Blanditiis natus
          reiciendis, illo, sunt commodi perspiciatis voluptatem corporis nobis
          totam deleniti dolores aspernatur rerum magnam exercitationem sequi
          fugiat a maxime libero deserunt est, harum nihil? Harum nisi eos
          voluptas doloribus nemo aliquam incidunt cupiditate. Ex quisquam
          inventore maxime tempora accusantium sed repudiandae, ab in. Molestiae
          eaque ducimus ullam qui sit nesciunt quas iusto asperiores! Dolorum
          exercitationem corrupti modi obcaecati, porro sequi iure molestias
          quam in placeat tenetur quisquam cupiditate earum?
        </p>
      </div>
    </div>
  );
}
