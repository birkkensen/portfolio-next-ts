import Image from "next/image";

import blurData from "../../public/blurDataUrl.json";
import { AspectRatio } from "./ui/aspect-ratio";

function Intro() {
  return (
    <section className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/2">
        <h2 className="mb-6 text-5xl font-bold text-charcoal">
          Hello, I&apos;m <br />
          Birk Kensén
        </h2>

        <div className="flex flex-col gap-4">
          <p className=" text-gray-600">
            I am soon graduating from Hyper Island. I am currently finishing up
            my internship at G-Loot, where I have been working as a frontend
            developer. Throughout my time at G-Loot, I have gained a strong
            understanding of technologies such as React and TypeScript. I have
            also had the opportunity to lead the frontend team of interns,
            giving me valuable experience in team management and leadership. I
            am now actively seeking a full-time position as a frontend
            developer, where I can continue to grow and develop my skills in
            this field and pursue my love for coding.
          </p>
          <p className=" text-gray-600">
            Don&apos;t hesitate to contact me if you wish to know more about me.
          </p>
        </div>
        <div className="my-5 flex items-center">
          <a
            className="rounded-lg bg-charcoal px-5 py-3 font-bold text-white opacity-100 transition-all duration-300 ease-in-out hover:rounded-3xl hover:opacity-90"
            href="mailto:birk.kensen@hyperisland.se"
          >
            Contact
          </a>
          <a
            className="group ml-4 flex h-10 w-40 flex-col items-center justify-center transition-all duration-300 ease-in-out"
            href="/resume/Resume-min.pdf"
            download
          >
            <span className="font-bold text-charcoal">Download CV</span>
            <span className="mt-2 h-0.5 w-11/12 bg-charcoal transition-all duration-300 ease-in-out group-hover:w-0" />
          </a>
        </div>
      </div>
      <div className="w-full animate-blob overflow-hidden sm:w-1/2 md:w-96">
        <AspectRatio ratio={9 / 13}>
          <Image
            blurDataURL={`data:image/jpeg;base64,${blurData.base64}`}
            sizes="(max-width: 768px) 100vw, 768px"
            src="/images/me/meOnABike.webp"
            className="object-cover"
            alt="Me on my bike:)"
            placeholder="blur"
            priority={true}
            fill
          />
        </AspectRatio>
      </div>
    </section>
  );
}

export default Intro;
