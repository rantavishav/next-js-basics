import Link from "next/link";
import { Footer, Header } from "../components";
import tableOfContent from "../data/tableOfContent";

const index = () => {
  return (
    <>
      <main className="main-section">
        <div className="mb-4">
          <h1 className="main-heading">Intro to Next.js</h1>
          <p className="text">Learn how to use Next.js</p>
        </div>

        {/* Table of contents */}
        <div className="table-content-wrapper">
          <h1>Table of Contents</h1>

          <ul>
            {tableOfContent.map((item) => (
              <li className="table-content-wrapper-item" key={item.title}>
                <h2>{item.title}</h2>
                <ol>
                  {item.subTopics.map((subTopic) => (
                    <li key={subTopic.path}>
                      <Link href={subTopic.path}>{subTopic.title}</Link>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default index;
