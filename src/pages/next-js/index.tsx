import Link from "next/link";
import { Note } from "../../components";

const NextJs = () => {
  return (
    <main className="main-section">
      <div className="table-content-wrapper">
        <h1 className="css-1uk1gs8">What is Next.js</h1>

        <p>
          Next.js is a complete full-stack framework for modern apps that was
          created by the brilliant team at{" "}
          <a href="https://vercel.com">Vercel</a>. React is used as the view
          library of choice. So if you know React, then Next.js will be very
          familiar. When building an app from scratch with React, you have so
          many decisions to make and so many choices. Next.js has well thought
          out conventions baked in that make these decisions for you. So in that
          way, it&apos;s very opinionated. It&apos;s the conventions that are
          the secret sauce, though. These opinions come from years of experience
          building production-ready React apps.{" "}
        </p>

        <Note>
          Most of the things which Next Js could do can be done with React JS.
          But Next JS makes it easier to do those things. Don&apos;t reinvent
          the wheel. 😜
        </Note>
        <p>Here are some of the highlights that you get for free:</p>

        <ul className="task-list">
          <li className="task-list-item">
            <p className=" color-dark-green bold">Dev build system</p>
            <p>
              In the development stage, Next.js optimizes for the developer and
              their experience building the application. It comes with features
              that aim to improve the Developer Experience such the{" "}
              <em>TypeScript </em>
              and <em>ESLint integration</em>, <em>Fast Refresh</em>, and more.
            </p>
          </li>
          <li className="task-list-item ">
            <p className="color-dark-green bold"> Production build system</p>
            <p>
              In the production stage, Next.js optimizes for the end-users, and
              their experience using the application. It aims to transform the
              code to make it performant and accessible.
            </p>
            <p>
              This is made possible because Next.js has a{" "}
              <Link
                href="https://nextjs.org/docs/advanced-features/compiler"
                className="bold "
              >
                compiler
              </Link>{" "}
              written in Rust, a low-level programming language, and SWC, a
              platform that can be used for compilation, minification, bundling,
              and more.
            </p>
          </li>
          <li className="color-dark-green">
            <p className="task-list-item color-dark-green bold">Prerendering</p>
            <ul className="task-list">
              <li className="task-list-item color-green">
                SSR (Server Side Rendering)
              </li>
              <li className="task-list-item color-green">Build time</li>
              <li className="task-list-item color-green">Static</li>
            </ul>
          </li>
          <li className="task-list-item">
            <p className=" color-dark-green bold">Routing</p>
            <p>
              Next.js has a built-in router that allows you to create dynamic
              routes. This is a great feature that allows you to create dynamic
              pages that are rendered on the server. The routing system matches
              the file system, so you can create a file in the pages directory
              and it will automatically be a route.
            </p>
          </li>
          <li className="task-list-item ">
            <p className="color-dark-green bold">API routes</p>
            <p>
              Next.js has a built-in API route system that allows you to create
              API endpoints that are serverless functions.
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default NextJs;
