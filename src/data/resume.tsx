import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Osiris Migan",
  initials: "OM",
  url: "https://osirismigan.com/",
  location: "Cotonou, Bénin",
  locationLink: "https://maps.app.goo.gl/dbgkpTB2WzGehaTw7",
  description:
    "Enthusiastic web developer, specializing in React, Next.js, Node.js, MongoDB and Supabase. Passionate about creating innovative and elegant solutions.",
  summary:
    "I develop complex applications and update my knowledge on a daily basis. I like to think about how we can use digital to make businesses more successful. I train entrepreneurs, business ideas and learners in digital technologies. [See my skills](/#education), [my projects](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [contact me](/#hackathons).",
  avatarUrl: "/me.jpg",
  skills: ["React", "Next.js", "Typescript", "Node.js", "MongoDB", "Supabase"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "miganosiris8@gmail.com",
    tel: "+22961053668",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Osiris8",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/osiris-migan/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/migan_osiris",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@javascriptstation",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:miganosiris8@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "OpenClassrooms",
      href: "https://openclassrooms.com/en/",
      badges: [],
      location: "Remote",
      title: "Web Developer Mentor",
      logoUrl: "/OC.png",
      start: "January 2024",
      end: "Today",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "SeeMarket",
      badges: [],
      href: "https://www.see-markets.com/",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "seemarket.png",
      start: "May 2023",
      end: "Déc 2023",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },

    {
      company: "SENS",
      href: "https://solidarites-entreprises.org/site/",
      badges: [],
      location: "Cotonou, Bénin",
      title: "Software Engineer",
      logoUrl: "/sens.png",
      start: "January 2021",
      end: "Déc 2022",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
  ],
  education: [
    {
      school:
        "National University of Science, Technology, Engineering and Mathematics",
      href: "https://sigunstim.org/",
      degree: "Bachelor's degree",
      logoUrl: "/unstim.avif",
      start: "2014",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "OpenTranscriptAI",
      href: "https://opentranscriptai.com/",
      dates: "January 2024 - March 2024",
      active: true,
      description:
        "[OpentranscriptAI](https://www.opentranscriptai.com/) is an online platform that allows you to easily convert audio or video files into text. Our transcription service uses advanced technology to provide fast, accurate transcriptions, enabling you to make the most of your audiovisual content.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.opentranscriptai.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Hiretop",
      href: "https://hiretop-iota.vercel.app",
      dates: "June 2024 - September 2024",
      active: true,
      description:
        "Connecting talent to opportunity. Find your next career opportunity. Stand out from the crowd and boost your career with Hiretop.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",

        "TailwindCSS",

        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://hiretop-iota.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Osiris8/hiretop.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
} as const;
