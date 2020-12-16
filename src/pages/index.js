import React from 'react';
// import CC from "CookieConsent"
// import {Helmet} from "react-helmet";
import { useEffect } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import '../sass/global.scss';
import '../sass/index.scss';

const IndexPage = () => {

  // const useScript = url => {
  //   useEffect(() => {
  //     const script = document.createElement('script');

  //     script.src = url;
  //     script.async = true;

  //     document.head.prepend(script);

  //     return () => {
  //       document.head.remove(script);
  //     }
  //   }, [url]);
  // };
  // useScript("https://cmp.osano.com/Azyw5ISA0ipuZfJQ/a4a0e116-0a11-4f54-a918-48e7ff1f2ae8/osano.js");

  return (
    <div className="container">

      <Navigation />
      <main className="main">
        <div>
          <h1 className="heading-primary">Connor Richmond-Clark</h1>
          <h2 className="heading-secondary">. Full-stack Developer .</h2>
        </div>

        <a href="/projects" className="projects-button">
          Projects
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
