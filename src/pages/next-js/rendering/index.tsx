import React from "react";
import { Tldr } from "../../../components";

const NextCodeExecution = () => {
  return (
    <main className="main-section">
      <div className="table-content-wrapper">
        <h1 className="css-1uk1gs8">What is Rendering?</h1>
        There is an unavoidable unit of work to convert the code you write in
        React into the HTML representation of your UI. This process is called
        <em className="color-dark-green"> rendering</em>. Rendering can take
        place on the server or on the client. It can happen either ahead of time
        at<em className="color-green"> build time</em>, or on{" "}
        <em className="color-green">every request</em> at runtime or on{" "}
        <em className="color-green">client side</em> when requests fullfill.
        <Tldr>
          Rendering is the process of converting the code you write in React
          into the HTML representation of your UI.
        </Tldr>
        <p>With Next.js, three types of rendering methods are available:</p>
        <ul className="task-list">
          <li className="task-list-item color-dark-green bold">
            Client-Side Rendering
          </li>
          <li className="task-list-item color-dark-green bold">
            Static Site Generation
          </li>
          <li className="task-list-item color-dark-green bold">
            Server-Side Rendering
          </li>
        </ul>
      </div>
    </main>
  );
};

export default NextCodeExecution;
