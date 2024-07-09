import chat_thumbnail from "../../public/assets/eranix.webp";
import crm_thumbnail from "../../public/assets/GenAI-Image-Generator.webp";
import crmlanding_thumbnail from "../../public/assets/spectrum folio.webp";
import financegpt_thumbnail from "../../public/assets/Mole gamme.webp";
import gdsc_thumbnail from "../../public/assets/resize translator.webp";
import gym_thumbnail from "../../public/assets/menja resize.webp";
import movieHub_thmbnail from "../../public/assets/resize 20speech 20regonition.webp";
import portfolio_thumbnail from "../../public/assets/code nebula.webp";
import technews_thumbnail from "../../public/assets/Terminal.webp";
import youtube_thumbnail from "../../public/assets/gemini 2.0.webp";
import gpa_thumbnail from "../../public/assets/resize 20crossy 20road.webp";

const projects = [
  {
    title: "Code Nebula Portfolio project ✨",
    thumbnail: portfolio_thumbnail,
    techStack: ["Next.js", "TailwindCSS", "TypeScript", "JavaScript"],
    description:
      "A personal portfolio showcasing my projects and skills, providing an interactive platform for visitors to learn about my experience and expertise.",
    github: "https://github.com/webcoder904/Code-Nebula",
    live: "https://webcoder904.github.io/Code-Nebula/",
  },
  {
    title: "AI image generator🎯",
    thumbnail: crm_thumbnail,
    techStack: ["React.js", "TailwindCSS", "ReactFlow","API"],
    description:
      "Developed a web based ai application in which we can generate image on any prompt and we can also download that image",
    github: "https://github.com/webcoder904/Ai-image-generator-web-app",
    
  },
  {
    title: "Spectrumfolio dark and light theme portfolio website ⚓",
    thumbnail: crmlanding_thumbnail,
    techStack: ["React.js", "TailwindCSS"],
    description:
      "Created a responsive website with dark and light theme based website which contain my latest project certifications and experience ",
    github: "https://github.com/Sujaltalreja04/SpectrumFolio",
    live: "https://spectrum-folio.vercel.app/",
  },
  {
    title: "Terminal based portfolio website 📺",
    thumbnail: technews_thumbnail,
    techStack: ["React.js", "Html","Css","Js"],
    description:
      "Developed a dynamic terminal and chatbot based website in which you can chat with my portfolio website in which user can see my ,hobbies ,intrest ,certification and projects",
    github: "https://github.com/Sujaltalreja04/Terminal",
    live: "https://terminal-chatbot-react-app.vercel.app/",
  },
  {
    title: "Google gemini ai powered clone 💻",
    thumbnail: youtube_thumbnail,
    techStack: ["React.js", "Material-UI", "API"],
    description:
      "Built a dynamic ui ux google gemini ai powered clone assistant with gemini api.",
    github: "https://github.com/Sujaltalreja04/Sujal-Gemini-React-Web-Application",
    live: "https://sujal-gemini-react-web-application.vercel.app/",
  },
  {
    title: "Eranix Dekstop assistant 💬",
    thumbnail: chat_thumbnail,
    techStack: ["React js", "Node.js", "News api","Weather and time api"],
    description:
      "Developed a real-time dekstop assistant in which we can give basic command to assistant to do basic task it can tell real time weather and time .",
    github: "https://github.com/webcoder904/Voice-Virtual-Assistant",
    live: "https://webcoder904.github.io/Voice-Virtual-Assistant/",
  },
  {
    title: "Whack A Mole Game💸",
    thumbnail: financegpt_thumbnail,
    techStack: ["React.js", "TailwindCSS", "Html","Css"],
    description:
      "Developed a famous 90s game killing mouse with cursor",
    github: "https://github.com/webcoder904/Mole-Game",
    live: "https://webcoder904.github.io/Mole-Game/",
  },
  {
    title: "Translator🚀",
    thumbnail: gdsc_thumbnail,
    techStack: ["React.js"],
    description:
      "Developed a translator which can do translation in any language",
    github: "https://github.com/webcoder904/Updated-translators",
    live: "https://webcoder904.github.io/Updated-translators/",
  },
  {
    title: "Speech recognition model🍿",
    thumbnail: movieHub_thmbnail,
    techStack: ["React.js", "Material-UI", "API"],
    description:
      "Developed a speech recognition model in which user can make paragraph script by saying in any language it was one type of translator in which suppose user speak in hindi and it can translate in english or any language in the world",
    github: "https://github.com/webcoder904/Speech-recognition",
    live: "https://webcoder904.github.io/Speech-recognition/",
  },
  {
    title: "Sujal menja 3d cube game🏋️",
    thumbnail: gym_thumbnail,
    techStack: ["HTML", "CSS","Javascript"],
    description:
      "Designed and developed a responsive game in which player have to 3d jumping cubes by cursor",
    github: "https://github.com/webcoder904/Sujal-menja/tree/main",
    live: "https://webcoder904.github.io/Sujal-menja/",
  },
  {
    title: "Crossy road game🧮",
    thumbnail: gpa_thumbnail,
    techStack: ["HTML", "CSS",],
    description:
      "Developed a crossy road game where player can cross road by passing obstacles",
    github: "https://github.com/webcoder904/Crossy-road",
    live: "https://webcoder904.github.io/Crossy-road/",
  },
];

export default projects;
