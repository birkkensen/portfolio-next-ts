const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className=" h-36 flex justify-end items-center m-5">
      <a
        className="text-charcoal underline font-bold opacity-100 hover:opacity-90 transition-opacity duration-300 ease-in-out"
        href="https://github.com/birkkensen"
        rel="noreferrer"
        target="_blank"
      >
        Github
      </a>
      <a
        className="pl-5 text-charcoal underline font-bold opacity-100 hover:opacity-90 transition-opacity duration-300 ease-in-out"
        href="https://www.linkedin.com/in/birkkensen/"
        rel="noreferrer"
        target="_blank"
      >
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;
