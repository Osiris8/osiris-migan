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
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
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
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
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
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    /*  {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    */
  ],
} as const;
