import Image from "next/image";
import { ContactBtn, ResumeBtn } from "../components/Buttons";
const Intro: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="flex flex-wrap justify-between">
        <div className="md:w-1/2 w-full">
          <Title />
          <Description />
          <div className="my-5 flex items-center">
            <ContactBtn />
            <ResumeBtn />
          </div>
        </div>
        <IntroImage />
      </section>
    </>
  );
};

const Title: React.FC = (): JSX.Element => {
  return (
    <h2 className="font-bold text-5xl text-charcoal mb-6">
      Hello, I&apos;m <br />
      Birk Kensén
    </h2>
  );
};

const Description: React.FC = (): JSX.Element => {
  return (
    <p className=" text-gray-600">
      I&apos;m currently studying the Frontend Developer program at Hyper Island in Stockholm. Now,
      I&apos;m looking for an internship, starting in September this year. So far I&apos;ve done
      everything from creating a simple web page in just HTML / CSS, to making web applications
      using React (like this website). I&apos;ve also worked a lot with different APIs, Node.js and
      Phaser. I&apos;m looking forward to learning and contributing a lot more during an internship.
      <br />
      <br />I don&apos;t know what my career goal is. All I know is that I&apos;m 100% sure it has
      to do with some sort of programming. Right now I&apos;m still exploring all the possibilities
      code has to offer, all the different ways I can express my creativity with it. Don&apos;t
      hesitate to contact me if you have any questions. :)
    </p>
  );
};

const IntroImage: React.FC = (): JSX.Element => {
  return (
    <div className="w-full sm:w-1/2 md:w-96">
      <Image
        className="rounded-2xl md:w-96"
        src="/images/me/meOnABike.jpeg"
        alt="Me on my bike:)"
        width="100%"
        height="150%"
        layout="responsive"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default Intro;
