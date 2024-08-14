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
    "I develop complex applications and update my knowledge on a daily basis. I like to think about how we can use digital to make businesses more successful. I train entrepreneurs, business ideas and learners in digital technologies. [See my skills](/#skills), [my projects](#projects), and [contact me](mailto:miganosiris8@gmail.com).",
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
        "Support students by analyzing their needs and adapting teaching methods accordingly. Offer perspectives on the profession of web developer and monitor students' motivation to give their best. Monitor learners' progress and alert them to any delays. Helping students to defend their projects ",
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
        "Develop seemarket's website using Wordpress (https://www.see-markets.com/). Develop the mobile application using React Native",
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
        "Development of showcase site for young entrepreneurs. Responsible for digital technology training for entrepreneurs, business idea holders and students. Advisor on digital tools to use in the workplace. Digital project manager",
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
        "https://files.edgestore.dev/vgd5z5zx1hzcip0s/publicFiles/_public/8b74840f-dff8-4d5c-bb41-c2eeed77b447.mp4",
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
      video:
        "https://files.edgestore.dev/vgd5z5zx1hzcip0s/publicFiles/_public/c1d5b7d1-3a49-4349-a371-1f990d348482.mp4",
    },
  ],
} as const;
