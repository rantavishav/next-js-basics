import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta
          name="description"
          content="This site consist of Next js basic understanding and provide insights how Next JS works"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="http://localhost:3000/next-js/static-site-generation"
        />
        <meta property="og:title" content="Next JS basic course" />
        <meta
          property="og:description"
          content="This site consist of Next js basic understanding and provide insights how Next JS works"
        />
        <meta
          property="og:image"
          content="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png"
        />

        <meta property="twitter:card" content="Next JS basic course" />
        <meta
          property="twitter:url"
          content="http://localhost:3000/next-js/static-site-generation"
        />
        <meta property="twitter:title" content="Next JS basic course" />
        <meta
          property="twitter:description"
          content="This site consist of Next js basic understanding and provide insights how Next JS works"
        />
        <meta
          property="twitter:image"
          content="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
