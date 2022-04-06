import Nav from "./Nav";
import { ReactNode } from "react";

const Layout: React.FC<ReactNode> = ({ children }): JSX.Element => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Nav />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
