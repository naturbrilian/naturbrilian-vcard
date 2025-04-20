import { Config } from "@/types/config";
import { MdOutlineDevices, MdAttachment } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { PiTrophy, PiBooks, PiMediumLogoBold } from "react-icons/pi";
import { GoalIcon } from "@primer/octicons-react";
import {
  LuGithub,
  LuPencil,
  LuLinkedin,
  LuRss,
  LuMail,
  LuMapPin,
} from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaReact, FaAws } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { RiJavaLine, RiJavascriptLine } from "react-icons/ri";
import { SiLatex, SiFastapi, SiKubernetes, SiPostman } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { VscTerminalLinux, VscAzure } from "react-icons/vsc";
import { DiRedis } from "react-icons/di";
import {
  TbBrandCpp,
  TbBrandTypescript,
  TbBrandGolang,
  TbBrandNextjs,
  TbBrandDjango,
  TbBrandDocker,
  TbBrandMysql,
  TbMarkdown,
  TbBrandAstro,
  TbBrandTerraform,
  TbPhotoSquareRounded,
} from "react-icons/tb";

const config: Config = {
  avatar: "/images/profile-y.png",
  title: "Lieba Natur Brilian (naturbrilian | Write Anything",
  description:
    "Iam Liba Natur Brilian and also known as Natur or gingalibadeidara, a video editor and graphics designer with a deep passion for technology, art, music and content creator. When im not working i create vector and translating stuff.",
  author: "Lieba Natur Brilian - naturbrilian",
  keywords: [
    "Lieba Natur Brilian",
    "naturbrilian",
    "Graphics Designer and Video Editor",
    "Translation",
    "Vector",
  ],
  status: "Working",
  siteURL: "https://naturbrilian.my.id/",
  openGraph: {
    url: "https://naturbrilian.my.id/",
    type: "website",
    siteName: "Lieba Natur Brilian (naturbrilian | Write Anything",
    title: "Lieba Natur Brilian (naturbrilian | Write Anything",
    description:
      "I'am Liba Natur Brilian and also known as Natur or gingalibadeidara, a video editor and graphics designer with a deep passion for technology, art, music and content creator. When im not working i create vector and translating stuff",
    images: [
      {
        url: "https://docs.1chooo.com/images/cover-with-1chooo-com.png",
        width: 1200,
        height: 630,
        alt: "Chun-Ho (Hugo) Lin - 1chooo Cover Image",
      },
    ],
  },
  navigationLinks: [
    { path: "/", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/post", label: "Post" },
    { path: "/gallery", label: "Gallery" },
  ],
  contacts: [
    {
      icon: LuMapPin,
      title: "Location",
      content: "Kediri, East Java, Indonesia",
    },
    {
      icon: LuMail,
      title: "Email",
      link: "mailto:gingalibadeidara@gmail.com",
      content: "gingalibadeidara@gmail.com",
    },
    {
      icon: LuGithub,
      title: "GitHub",
      link: "https://github.com/naturbrilian",
      content: "@naturbrilian",
    },
    {
      icon: LuLinkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/naturbrilian/",
      content: "Liba Natur Brilian",
    },
  ],
  socialLinks: [
    {
      url: "https://github.com/naturbrilian",
      icon: LuGithub,
      name: "GitHub",
    },
    {
      url: "https://www.linkedin.com/in/naturbrilian/",
      icon: LuLinkedin,
      name: "LinkedIn",
    },
    {
      url: "https://medium.com/@naturbrilian",
      icon: PiMediumLogoBold,
      name: "Medium",
    },
    {
      url: "https://twitter.com/naturbrilian",
      icon: FaXTwitter,
      name: "Twitter",
    },
    {
      url: `/rss.xml`,
      icon: LuRss,
      name: "RSS Feed",
    },
    {
      url: `/cv`,
      icon: MdAttachment,
      name: "CV",
    },
  ],
  homeMetaData: {
    metadataBase: new URL("https://naturbrilian.my.id/"),
    title: "Lieba Natur Brilian (naturbrilian | Write Anything",
    description:
      "I'am Liba Natur Brilian and also known as Natur or gingalibadeidara, a video editor and graphics designer with a deep passion for technology, art, music and content creator. When im not working i create vector and translating stuff",
    authors: [{ name: "Chun-Ho (Hugo) Lin" }],
    creator: "Chun-Ho (Hugo) Lin",
    keywords: [
      "Chun-Ho (Hugo) Lin",
      "1chooo",
      "Software Engineering",
      "Next.js",
      "React",
    ],
    openGraph: {
      url: "https://naturbrilian.my.id/",
      type: "website",
      siteName: "Lieba Natur Brilian (naturbrilian | Write Anything",
      title: "Lieba Natur Brilian (naturbrilian | Write Anything",
      description:
        "I'am Liba Natur Brilian and also known as Natur or gingalibadeidara, a video editor and graphics designer with a deep passion for technology, art, music and content creator. When im not working i create vector and translating stuff",
      images: [
        {
          url: "https://docs.1chooo.com/images/cover-with-1chooo-com.png",
          width: 1200,
          height: 630,
          alt: "Chun-Ho (Hugo) Lin - 1chooo Cover Image",
        },
      ],
    },
    manifest: "/manifest.json",
    twitter: {
      card: "summary_large_image",
      title: "Lieba Natur Brilian (naturbrilian | Write Anything",
      description:
        "I'am Liba Natur Brilian and also known as Natur or gingalibadeidara, a video editor and graphics designer with a deep passion for technology, art, music and content creator. When im not working i create vector and translating stuff",
      images: "https://docs.1chooo.com/images/cover-with-1chooo-com.png",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: [
        {
          url: "/logo192.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
  },
  about: {
    firstName: "Lieba",
    lastName: "Brilian",
    middleName: "Natur",
    preferredName: "Natur",
    additionalName: "Lieba",
    pronouns: "She/Her",
    githubUsername: "naturbrilian",
    introduction: `
Hello i am Lieba Natur Brilian also people call me with Natur. I’m graphics designer, video editor and translator contributor for various services, apps and software. Im also like watching anime and multifandom. Also people know me as gingalibadeidara on another website like alphacoders.
    `,
    lifestyles: [
      {
        icon: LuGithub,
        title: "Design",
        text: "Yes, like the title i also like design something, if you wanna commish or ask you can contact me via X or Messenger",
      },
      {
        icon: LuPencil,
        title: "Blogging",
        text: "I also like write some article on here and tutorial (maybe).",
      },
      {
        icon: TbPhotoSquareRounded,
        title: "Photography",
        text: "Sky brings freedom; streets, a reminder of others' contributions.",
      },
    ],
    techStacks: {
      programmingLanguages: [
        { name: "Python", icon: AiOutlinePython },
        { name: "TypeScript", icon: TbBrandTypescript },
        { name: "Golang", icon: TbBrandGolang },
        { name: "C++", icon: TbBrandCpp },
        { name: "Java", icon: RiJavaLine },
        { name: "JavaScript", icon: RiJavascriptLine },
        { name: "LaTeX", icon: SiLatex },
        { name: "Markdown", icon: TbMarkdown },
        { name: "Astro", icon: TbBrandAstro },
        { name: "Terraform", icon: TbBrandTerraform },
      ],
      frameworks: [
        { name: "React", icon: FaReact },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Flask", icon: BiLogoFlask },
        { name: "Redis", icon: DiRedis },
        { name: "Linux Terminal", icon: VscTerminalLinux },
        { name: "AWS", icon: FaAws },
        { name: "Next.js", icon: TbBrandNextjs },
        { name: "Docker", icon: TbBrandDocker },
        { name: "MySQL", icon: TbBrandMysql },
        { name: "Django", icon: TbBrandDjango },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Postman", icon: SiPostman },
        { name: "Azure", icon: VscAzure },
      ],
    },
  },
  resume: {
    educations: {
      icon: IoSchoolOutline,
      title: "Education",
      items: [
        {
          company: "SMK TI PELITA NUSANTARA KEDIRI",
          location: "Kediri, East Java, Indonesia",
          role: "Multimedia",
          duration: "Apr. 2014 — Apr. 2017",
          tasksMarkdown: `
- **Studying about Video Editing, Design, and Programming**
        `,
        },
        {
          company: "CBM Academy Kediri",
          location: "Kediri, East Java, Indonesia",
          role: "Broadcasting",
          duration: "2017 - 2018",
          tasksMarkdown: `
- **Studying about Video Editing, Broadcast and etc** 
        `,
        },
      ],
    },
    awardLeaderships: {
      icon: PiTrophy,
      title: "Works",
      items: [
        {
          company: "RS Bhayangkara Kediri Gelar Mural Art Festival",
          location: "RSUD Bhayangkara, Kediri, East Java",
          role: "Editor",
          duration: "Sept, 2024",
          tasksMarkdown: `
- [Link](https://www.youtube.com/watch?v=ehqTP2MyUVo)
        `,
        },
      ],
    },
    teachingExperiences: {
      icon: PiBooks,
      title: "Volunteer",
      items: [
        {
          company: "Yurasubs",
          location: "East Java, Indonesia",
          role: "Graphics Designer, Moderator",
          duration: "2021 - Now",
          tasksMarkdown: `
- Make design for Social Media Post, and Banner
- Moderator for Discord Community
        `,
        },
      ],
    },
    professionalExperiences: {
      icon: MdOutlineDevices,
      title: "Experience",
      items: [
        {
          company: "Kediri Televisi",
          location: "Kediri, East Java, Indonesia",
          role: "Video Editor",
          duration: "2017 - Now",
          tasksMarkdown: `
- Edit Video for YouTube Content
          `,
        },
        {
          company: "The Java Post ID",
          location: "Kediri, East Java, Indonesia",
          role: "Video Editor, Website Admin and Graphics Designer",
          duration: "2024 - Now",
          tasksMarkdown: `
- Edit Video, Design for Company logo and Publish to Website.
          `,
        },
        {
          company: "Yuramedia",
          location: "East Java",
          role: "Graphics Designer",
          duration: "2025 - Now",
          tasksMarkdown: `
- Design for SNS, YouTube Banner, etc
          `,
        },
      ],
    },
  },
  jsonLdPerson: {
    "@context": "http://schema.org",
    "@type": "Person",
    "@id": "https://www.1chooo.com/#person",
    givenName: "Lieba",
    familyName: "Brilian",
    additionalName: "Natur",
    gender: "female",
    birthPlace: "Kediri, East Java, ID",
    nationality: "Indonesia",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "SMK TI PELITA NUSANTARA",
        sameAs: "https://www.ncu.edu.tw/",
      },
    ],
    jobTitle: "Video Editor",
    skills: "Video Editing, and Design",
    image: "https://www.1chooo.com/images/profile.webp",
    url: "https://naturbrilian.my.id",
    sameAs: [
      "https://www.linkedin.com/in/naturbrilian/",
      "http://github.com/naturbrilian",
      "https://medium.com/@naturbrilian",
    ],
  },
  giscusConfig: {
    id: "comments",
    repo: "1chooo/1chooo.com",
    repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "",
    category: "General",
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CONFIG_CATEGORY_ID || "",
    mapping: "pathname",
    term: "Welcome to @giscus/react component!",
    reactionsEnabled: "1",
    emitMetadata: "1",
    inputPosition: "bottom",
    theme: "dark_tritanopia",
    lang: "en",
    loading: "lazy",
  },
  googleAnalyticId: process.env.NEXT_PUBLIC_GA_ID || "",
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || "",
};

export default config;
