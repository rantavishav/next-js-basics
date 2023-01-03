import Image from "next/image";

import { Note } from "../../../components";
import { STATIC_SITE_GENERATION_FLOW } from "../../../images";

const ServerSiderendering = () => {
  return (
    <>
      <main className="main-section">
        <div className="table-content-wrapper">
          <h1 className="css-1uk1gs8">Static Site Generation</h1>
          <p>
            With Static Site Generation, the HTML is generated on the server,
            but unlike server-side rendering, there is no server at runtime.
            Instead, content is generated once, at build time, when the
            application is deployed, and the HTML is stored in a{" "}
            <em className="color-dark-green">CDN</em> and re-used for each
            request.
          </p>
          <p>
            This is a great fit for applications that don&apos;t need to update
            content frequently, and can be deployed to a CDN for a low cost of
            hosting.
          </p>
          <Note>
            In SSG, the page HTML is defained the the time of build and is
            served from the CDN. The page is not rendered on the server on every
            request.
          </Note>
        </div>
      </main>
      <main className="image-section">
        <Image
          src={STATIC_SITE_GENERATION_FLOW}
          alt="Server side rendering"
          width={1400}
          height={1400}
        />
      </main>
    </>
  );
};

export default ServerSiderendering;
