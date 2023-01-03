import Image from "next/image";

import { Note } from "../../../components";
import { SERVER_SIDE_RENDRING_FLOW } from "../../../images";

const ServerSiderendering = () => {
  return (
    <>
      <main className="main-section">
        <div className="table-content-wrapper">
          <h1 className="css-1uk1gs8">Server Side Rendering</h1>
          <p>
            With server-side rendering, the HTML of the page is generated on a
            server for <em className="color-dark-green">each request</em>. The
            generated HTML, JSON data, and JavaScript instructions to make the
            page interactive are then sent to the client.
          </p>
          On the client, the HTML is used to show a fast non-interactive page,
          while React uses the JSON data and JavaScript instructions to make
          components interactive (for example, attaching event handlers to a
          button). This process is called{" "}
          <em className="color-dark-green">hydration</em>.
          <Note>
            During SSR the page is rendered on the server on every request by
            default.
          </Note>
        </div>
      </main>
      <main className="image-section ml-auto">
        <Image
          src={SERVER_SIDE_RENDRING_FLOW}
          alt="Server side rendering"
          width={960}
          height={1000}
        />
      </main>
    </>
  );
};

export default ServerSiderendering;
