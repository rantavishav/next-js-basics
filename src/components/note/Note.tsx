import { ReactNode } from "react";

interface INote {
  children: ReactNode;
}

const Note = ({ children }: INote) => {
  return (
    <blockquote className="border-yellow">
      <div>
        📒 &nbsp;&nbsp;<strong>Note: </strong>
        <p>{children}</p>
      </div>
    </blockquote>
  );
};

export default Note;
