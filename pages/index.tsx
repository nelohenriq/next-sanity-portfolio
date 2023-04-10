import { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Portfolio</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start items-center justify-center">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  );
};
export default Home;
