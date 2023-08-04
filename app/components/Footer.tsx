export function Footer() {
  return (
    <footer className="m-5 flex h-36 items-center justify-end">
      <a
        className="font-bold text-charcoal underline opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-90"
        href="https://github.com/birkkensen"
        rel="noreferrer"
        target="_blank"
      >
        Github
      </a>
      <a
        className="pl-5 font-bold text-charcoal underline opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-90"
        href="https://www.linkedin.com/in/birkkensen/"
        rel="noreferrer"
        target="_blank"
      >
        LinkedIn
      </a>
    </footer>
  );
}
