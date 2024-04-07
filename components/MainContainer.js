import React from "react";
import A from "./A";
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"Next.js" + keywords} />
        <title>Main page</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Main"></A>
        <A href="/users" text="Users"></A>
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: orange;
          padding: 15px;
        }

        .link {
          text-decoration: none;
          color: white;
          font-size: 20px;
          margin: 10px;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
