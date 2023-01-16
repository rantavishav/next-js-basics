import Image from "next/image";
import React from "react";

import { Note } from "../../../components";
import { NEXT_JS_FLOW } from "../../../images";

const NextJsUsage = () => {
  return (
    <>
      <main className="main-section">
        <div className="table-content-wrapper">
          <h1 className="css-1uk1gs8">When To Use Which?</h1>
          <h4 className="color-green"> When To use Client Side Rendering</h4>
          <ul className="task-list">
            <li className="task-list-item">
              Client-side data fetching is useful when your page doesn&apos;t
              require SEO indexing,
            </li>
            <li className="task-list-item">
              When you don&apos;t need to pre-render your data
            </li>
            <li className="task-list-item">
              When the content of your pages needs to update frequently.
            </li>
            <Note>
              It&apos;s important to note that using client-side data fetching
              can affect the performance of your application and the load speed
              of your pages. This is because the data fetching is done at the
              time of the component or pages mount, and the data is not cached.
            </Note>
          </ul>

          <h4 className="color-green"> When To use Server Side Rendering</h4>
          <ul className="task-list">
            <li className="task-list-item">When you require SEO indexing.</li>
            <li className="task-list-item">
              If you need to render a page whose data must be fetched at request
              time.
            </li>
            <li className="task-list-item">
              If you data changes frequenlty on the backend and you need updated
              data on each request.
            </li>
            <Note>
              Beacuse it is rendered on the server on every request, it is not
              suitable for pages that have a almost static data. This is because
              it will slow down the performance of your application.
            </Note>
          </ul>

          <h4 className="color-green"> When To use Static Site Generation</h4>
          <ul className="task-list">
            <li className="task-list-item">When you require SEO indexing.</li>
            <li className="task-list-item">
              {" "}
              When you need fast inital load, beacuse it is generated during the
              build time and at request time Next JS server only need to serve
              that.
            </li>
            <li className="task-list-item">
              Work best for CMS pages or documantaion pages.
            </li>
            <Note>
              Beacuse it only contains data which will be produced during the
              build time, it is not suitable for pages which contains dynamic
              data.
            </Note>
          </ul>

          <h1 className="css-1uk1gs8">Can I use all of them?</h1>
          <p>
            The beauty of Next.js is that you can choose the most appropriate
            rendering method for your use case on a page-by-page basis, whether
            that&rsquo;s Static Site Generation, Server-side Rendering, or
            Client-Side Rendering.
          </p>
        </div>
      </main>
      <main className="image-section ">
        <Image
          src={NEXT_JS_FLOW}
          alt="Server side rendering"
          width={1551}
          height={768}
        />
      </main>
    </>
  );
};

export default NextJsUsage;
