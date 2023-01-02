import Image from "next/image";

import { CLIENT_SIDE_RENDRING_FLOW } from "../../../images";

const ClientSideRendering = () => {
  return (
    <main className="main-section">
      <div className="table-content-wrapper">
        <h1 className="css-1uk1gs8">Client Side Rendering</h1>
      </div>
      <Image
        src={CLIENT_SIDE_RENDRING_FLOW}
        alt="Client side rendering"
        width={960}
        height={1000}
      />
    </main>
  );
};

export default ClientSideRendering;
