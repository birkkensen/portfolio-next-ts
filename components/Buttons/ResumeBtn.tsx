const ResumeBtn: React.FC = (): JSX.Element => {
  return (
    <a
      className="flex flex-col items-center justify-center w-40 h-10 ml-4 group transition-all duration-300 ease-in-out"
      href="/resume/CV.Birk.pdf"
      download
    >
      <div className="text-charcoal font-bold">Download CV</div>
      <div className="mt-2 w-11/12 h-[2px] rounded bg-charcoal transition-all duration-300 ease-in-out group-hover:w-0"></div>
    </a>
  );
};

export default ResumeBtn;
