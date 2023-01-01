import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Reminder } from "../../../components";
import { REACT_FLOW } from "../../../images";

const ReactCodeExecution = () => {
  return (
    <>
      <main className="main-section">
        <div className="table-content-wrapper">
          <h1>How React works</h1>
          <p>
            React is a JavaScript library for building user interfaces. It is
            maintained by Facebook and a community of individual developers and
            companies. React can be used as a base in the development of single
            page or mobile applications. However,{" "}
            <strong className="color-green">
              React is only concerned with rendering data to the DOM,
            </strong>{" "}
            and so creating React applications usually requires the use of
            additional libraries for state management and routing. Redux and
            React Router are respective examples of such libraries.
          </p>

          <p>
            <strong>But how exactly React render the HTML</strong>:
          </p>

          <ul className="task-list">
            <li className="task-list-item">
              We create a React application which consist of muliple components
              and a root component which is the entry point of react
              application.
            </li>
            <li className="task-list-item">
              Then we create a build for our React application which consist of
              JavaScript Chunk and CSS Chunk with other files(index.html,
              assests, etc).
            </li>

            <li className="task-list-item">
              This build is then deployed to the server.
            </li>
            <li className="task-list-item">
              Every time a user visits the website, the browser will make a
              request to the server and the server will send the index.html file
              to the browser.
            </li>
            <li className="task-list-item">
              The browser will then parse the index.html file and will find the
              script tag which will have the JavaScript chunk. Initally it only
              contains the root component which has nothing insdide it to
              render.
            </li>
            <li className="task-list-item">
              The browser will then execute the JavaScript chunk and will render
              the root component.
            </li>
            <li className="task-list-item">
              The root component will then render the child components and html
              element was create by Javascript chunk.
            </li>
          </ul>

          <Reminder>
            This whole process of creating actual HTML happens at the browser
            (Client-side rendering)
          </Reminder>
        </div>
        <Image src={REACT_FLOW} alt="React Flow" width={1000} height={1000} />
      </main>
    </>
  );
};

export default ReactCodeExecution;
