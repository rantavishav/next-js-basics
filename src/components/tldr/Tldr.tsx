import { ReactNode } from "react";

interface ITldr {
  children: ReactNode;
}

const Tldr = ({ children }: ITldr) => {
  return (
    <blockquote className="border-blue">
      <div>
        📏&nbsp;&nbsp;<strong>Tldr: </strong>
        <p>{children}</p>
      </div>
    </blockquote>
  );
};

export default Tldr;
