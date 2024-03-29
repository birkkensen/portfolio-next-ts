import { ImLinkedin, ImGithub } from "react-icons/im";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="mb-16 mt-8 flex items-center justify-between">
      <Link className="text-4xl font-bold text-charcoal" href="/">
        birk
      </Link>
      <ul className="flex text-3xl text-charcoal opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-90">
        <li>
          <a
            aria-label="Link to Birk Kensén's GitHub profile"
            href="https://github.com/birkkensen"
            rel="noreferrer"
            target="_blank"
          >
            <ImGithub />
          </a>
        </li>
        <li className="ml-4">
          <a
            aria-label="Link to Birk Kensén's LinkedIn profile"
            href="https://www.linkedin.com/in/birkkensen/"
            rel="noreferrer"
            target="_blank"
          >
            <ImLinkedin />
          </a>
        </li>
      </ul>
    </nav>
  );
}
