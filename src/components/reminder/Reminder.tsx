import { ReactNode } from "react";

interface IReminder {
  children: ReactNode;
}

const Reminder = ({ children }: IReminder) => {
  return (
    <blockquote>
      <div>
        🧠 &nbsp;&nbsp;<strong>Reminder: </strong>
        <p>{children}</p>
      </div>
    </blockquote>
  );
};

export default Reminder;
