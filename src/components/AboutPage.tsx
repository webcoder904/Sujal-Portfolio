"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { TechStackButton } from "./TechStackButton";
import reactLogo from "../../public/assets/react.png";
import javascriptLogo from "../../public/assets/javascript.png";
import tailwindLogo from "../../public/assets/tailwind.png";
import nodejsLogo from "../../public/assets/nodejs.png";
import expressLogo from "../../public/assets/numpy.png";
import restapiLogo from "../../public/assets/restapi.png";
import mongodbLogo from "../../public/assets/mongodb.png";
import mongooseLogo from "../../public/assets/mongoose.png";
import nextjsLogo from "../../public/assets/nextjs.png";
import typescriptLogo from "../../public/assets/typescript.png";
import materialuiLogo from "../../public/assets/materialui.png";
import cppLogo from "../../public/assets/download.jpg";
import htmlLogo from "../../public/assets/html.png";
import cssLogo from "../../public/assets/css.png";
import postmanLogo from "../../public/assets/aiml.png";
import gitLogo from "../../public/assets/git.png";
import githubLogo from "../../public/assets/github.png";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import art from "../../public/assets/art.webp";
import art3 from "../../public/assets/art-3.webp";
import art4 from "../../public/assets/art-4.webp";
import art6 from "../../public/assets/art-6.webp";
import art7 from "../../public/assets/art-7.webp";
import blog1 from "../../public/assets/aiml.webp";
import blog2 from "../../public/assets/data analysis.webp";
import Blog3 from "../../public/assets/business.webp";
import { BlogsCards } from "./BlogsCards";
import { ServiceCards } from "./ServiceCards";

interface LazyImageProps {
  src: StaticImageData;
  alt: string;
  width: number;
}

const LazyImage = ({ src, alt, width }: LazyImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div ref={ref}>
      {inView && <Image src={src} alt={alt} width={width} loading="lazy" />}
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-28">
        <LazyImage src={art4} alt="about" width={1000} />
      </div>

      <div className="relative min-h-screen w-full flex flex-col justify-center items-center">
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
        <div
          className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold pt-32"
          id="about"
        >
          🌌 About 🦄
        </div>
        <br />
        <br />
        <div className="w-[90%] sm:w-[80%] md:w-[80%] xl:w-[60%] my-14 text-2xl z-10">
          Hello, folks! I'm a{" "}
          <span className="text-green-300">Full-Stack Web Developer,Mern stack specialist,Data scientist & Business analyst.</span> with
         I am deeply passionate about the MERN stack where JavaScript forms the core of
         my work. Over the past two years, I've immersed myself in web development,
         creating projects that showcase my expertise. Freelancing has been integral to my
         journey, allowing me to collaboratw with diverse client and refine both my technical 
         skill through my python and ai skills i have deep knownledge of data analysis ai/ml models.
          <br />
          <br />
          <br />
          <div className="flex w-full flex-wrap mt-8">
            <TechStackButton title="React.Js" logo={reactLogo} />
            <TechStackButton title="JavaScript" logo={javascriptLogo} />
            <TechStackButton title="TailwindCSS" logo={tailwindLogo} />
            <TechStackButton title="Node.Js" logo={nodejsLogo} />
            <TechStackButton title="Numpy" logo={expressLogo} />
            <TechStackButton title="REST APIs" logo={restapiLogo} />
            <TechStackButton title="MongoDB" logo={mongodbLogo} />
            <TechStackButton title="Mongoose" logo={mongooseLogo} />
            <TechStackButton title="Next.js" logo={nextjsLogo} />
            <TechStackButton title="TypeScript" logo={typescriptLogo} />
            <TechStackButton title="Material-UI" logo={materialuiLogo} />
            <TechStackButton title="Artificial intelligence and machine learning" logo={postmanLogo} />
            <TechStackButton title="Git" logo={gitLogo} />
            <TechStackButton title="GitHub" logo={githubLogo} />
            <TechStackButton title="python" logo={cppLogo} />
            <TechStackButton title="HTML5" logo={htmlLogo} />
            <TechStackButton title="CSS3" logo={cssLogo} />
          </div>
          <br />
          <br />
          <br />
          <div>
            <span className="sm:text-4xl text-[30px] font-bold text-green-300">
              ✨ Sujal kishore kumar talreja
            </span>
            <br />
            <br /> <span className="font-bold text-purple-300">
              Currently:
            </span>{" "}
            Final Year Computer Science Student <br />
            <br />
            <span className="font-bold text-purple-300">Branch:</span> Computer
            Science  <br />
            <br />
            <span className="font-bold text-purple-300">College:</span> Prof.
            Ganpat University
            <br />
            <br />
            <span className="font-bold text-purple-300">
              Graduation Year:
            </span>{" "}
            2025
            <br />
            <br />
            <span className="font-bold text-purple-300">Address:</span>{" "}
            Ahmedabad, Gujarat, India
            <br />
            <br />
            <br />
            <br />
            <div
              className="w-full flex justify-center items-center my-28"
              id="about"
            >
              <LazyImage src={art6} alt="about" width={1000} />
            </div>
            <span className="font-bold text-green-300">
              🎗️ As a student of computer science, I specialize in:
            </span>
            <br />
            <br />
            -Full Stack Web Development
            <br /> -Data scientist,Business analyst <br />
            -Object Oriented Programming
            <br /> -Database Management
            <br />
            <br /> I completed an{" "}
            <Link
              href="https://www.linkedin.com/in/sujal-kishore-kumar-talreja-65975b216/overlay/1719659646421/single-media-viewer?type=IMAGE&profileId=ACoAADaSluUBOuckqBc1BiJG90rMyKi4JZ5s5vU&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Buav3SH23RxCJBC5nkcsoLw%3D%3D"
              className="text-green-300 underline"
            >
              Internship
            </Link>{" "}
           At Ybi foundation i worked as data analyst for two month
           i created and worked on various project of data analysis
           and ai/ml.
            <br /> <br />I also completed a{" "}
            <Link
              href="https://media.licdn.com/dms/image/D4D2DAQHUuzm6f02jfQ/profile-treasury-image-shrink_160_160/0/1715492827455?e=1721142000&v=beta&t=TABixXxuJstNh0EYaumgM5qQodrF0CB3jbkT-PQFQJA"
              className="text-green-300 underline"
            >
              
              Power bi developer remote internship at Cognorise Infotech
            </Link>{" "}
            I have developed various types of dashboard on different data sets of excel
            I have gain deep knownledge and insights of data analysis and vizualization.
          </div>

          





          <br />
          <br />
          <br />
          🙌 So, let's connect and share a few laughs while we navigate the tech
          world together!
          <br />
          <br />
          ➡️ I am looking for opportunities in the fields of web development, Data science, Business analyst and
          software development.
          <br />
        </div>
      </div>

      <div className="w-full flex justify-center items-center my-2" id="about">
        <LazyImage src={art7} alt="about" width={1000} />
      </div>

      {/* Blogs */}
      <div
        className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold pt-32"
        id="blogs"
      >
        🌌 Blogs 🦄
      </div>
      <div className="relative w-full min-h-full flex flex-wrap justify-center mb-20">
        <BlogsCards
          title=" How Data and AI/ML Are Changing the World"


          description="In this Blog I cover how Ai/Ml changing world"
          thumbnail={blog1}
          url="https://medium.com/@sujaltalreja04/how-data-and-ai-ml-are-changing-the-world-f075ff091b71"
        />
        <BlogsCards
          title="My intrest from full stack web development to data analysis"
          description="How I became data analyst from full stack developer."
          thumbnail={blog2}
          url="https://medium.com/@sujaltalreja04/how-i-became-data-analyst-from-full-stack-developer-fde30326b6e6"
        />
        <BlogsCards
          title="How Business Analysis, Data Analysis, Data Science, AI, and ML Can Become Billion-Dollar Businesses"
          description="In this blog i have covered a details how data and ai can become billion dollar business."
          thumbnail={Blog3}
          url="https://medium.com/@sujaltalreja04/how-business-analysis-data-analysis-data-science-ai-and-ml-can-become-billion-dollar-businesses-e55b80e2361e"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
      </div>

      <div className="w-full flex justify-center items-center my-2" id="about">
        <LazyImage src={art3} alt="about" width={1000} />
      </div>
      <div
        className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold pt-32"
        id="services"
      >
        🌌 Services 🦄
      </div>
      <div className="relative flex justify-center w-full my-8">
        <div className="flex flex-wrap justify-around items-center xl:w-[70%] sm:w-[90%]">
          <ServiceCards
            title="Full stack development"
            description="Creating stellar user interfaces and web experiences using the latest technologies."
            emoji="💻"
          />
          <ServiceCards
            title="Python development"
            description="Developing robust, scalable server-side logic for a wide range of web applications."
            emoji="📡"
          />
          <ServiceCards
            title="Data scientist,Business analyst,Ai/Ml developer"
            description="Developing various ai/ml models according to different projects and task."
            emoji="📲"
          />
        </div>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
      </div>

      <div className="w-full flex justify-center items-center my-2" id="about">
        <LazyImage src={art} alt="about" width={1000} />
      </div>
    </>
  );
};

export default AboutPage;
