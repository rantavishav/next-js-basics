import Image from "next/image";

import { CLIENT_SIDE_RENDRING_FLOW } from "../../../images";

const ClientSideRendering = () => {
  return (
    <>
      <main className="main-section">
        <div className="table-content-wrapper">
          <h1 className="css-1uk1gs8">Client Side Rendering</h1>
          <p>
            In a standard React application, the browser receives an empty HTML
            shell from the server along with the JavaScript instructions to
            construct the UI.
          </p>
          <p>
            This means the downloads the JavaScript file and the execute it. The
            time between the HTML is download and the JavaScript is done
            executed we will see the blank page.
          </p>
        </div>
      </main>
      <main className="image-section ml-auto">
        <Image
          src={CLIENT_SIDE_RENDRING_FLOW}
          alt="Client side rendering"
          width={1000}
          height={1000}
        />
      </main>
    </>
  );
};

export default ClientSideRendering;
