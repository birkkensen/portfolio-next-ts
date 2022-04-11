import Nav from "./Nav";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout: React.FC<ReactNode> = ({ children }): JSX.Element => {
  return (
    <>
      <div className="mx-5 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl md:mx-auto md:px-4">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
