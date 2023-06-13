
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
          I&apos;m a frontend engineer based in Stockholm, Sweden, currently working as a frontend developer at Pigello. I hold a YH degree from Hyper Island&apos;s frontend developer program, where I gained a solid understanding of web technologies like HTML, CSS, JavaScript, and responsive design principles.
          </p>
          <p className="text-gray-600">With a focus on user-centered design and UX/UI
            principles, I strive to create intuitive and accessible interfaces.
            I pay close attention to detail and value clean, modular code,
            aiming to deliver pixel-perfect designs that seamlessly merge
            aesthetics with functionality. Continuously learning and staying
            updated with industry trends, I&apos;m eager to collaborate with talented
            individuals and further enhance my frontend development skills.
          </p>
          <p className="text-gray-600">
          Outside of work, I enjoy 3D printing, running, road biking, and cooking (especially the asian cuisine)
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
            href="/resume/cv_compressed.pdf"
            download
          >
            <span className="font-bold text-charcoal">Download CV</span>
            <span className="mt-2 h-0.5 w-11/12 bg-charcoal transition-all duration-300 ease-in-out group-hover:w-0" />
          </a>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-96">
        <AspectRatio className="animate-blob overflow-hidden" ratio={9 / 16}>
          <picture className="object-cover">
            <source srcSet="/images/me/meOnABike.webp" type="image/webp" />
            <Image
              blurDataURL={`data:image/jpeg;base64,${blurData.base64}`}
              sizes="(max-width: 768px) 100vw, 768px"
              src="/images/me/meOnABike.jpeg"
              className="object-cover"
              alt="Me on my bike:)"
              placeholder="blur"
              priority={true}
              fill
            />
          </picture>
        </AspectRatio>
      </div>
    </section>
  );
}

export default Intro;
