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
# Hello and Welcome to my site!

I’m Liba Natur Brilian and also known as Natur or gingalibadeidara, a video editor and graphics designer with a deep passion for technology, art, music and content creator. Here, I share my recent project like design, video editing, vector, and blogging. I hope this platform can be a space to share inspiration, ideas, and engaging discussions with you.

# My Interest #

## Technologies ##

Already interested in technology since elementary school, initially because of the internet cafe era at that time. At first, I only knew the games that came with the operating system, then in 2007 I got to know the internet and others.

## Music ##

At first, it was because my father himself almost every Sunday morning played songs through a VCD player and cassette tape. At first, he was only interested in the genre of old western songs, then Indonesian songs, then to Kpop because of his junior high school friends at that time (yes,you know Super Junior and SNSD) until finally to JPop songs until now. Oh yes i also like classical music, Doujin music like touhou and etc.

## Anime ##

It started with anime that aired on Indonesian TV stations. The first anime I watched was Naruto, and then in 2012 I started to get interested in Little Busters (yes, this is also one of my favorite anime), and finally I continued until now, even though I rarely watch it anymore. And progress anime i watch now you can check my Anilist

## Game & Visual novel ##

Well, for this game and visual novel, I was initially curious, starting from hearing the song nightcore (what sped calls it now), and curious because the artwork used in the video was sourced from fan art, anime or from other sources. It turned out that it came from Visual Novel & because from here I started to be interested in playing Visual Novel. At that time, the Visual Novel that was being hotly discussed was Koi Kakeru Shin Ai Kanojo. As for the game itself, it started because of my school friend who played the game Bully Scholarship, and the first mobile game I played was THE IDOLM@STER: CINDERELLA GIRLS STARLIGHTS or known as deresute.

## Translation ##

To be honest, I first became interested in the world of translation when I learned to make karaoke effects and subtitles. In 2016 I started to dive into the world of translation, even though this was not my major at school. At first it was just to fill my free time, because of my interest in language lessons, both Indonesian and English. And this must be developed further, especially since I want to be able to speak German, Japanese, and Mandarin.

# ANOTHER SOCIAL MEDIA & CONTACT #

If you have any questions, suggestions, or just want to chat, feel free to reach out to me via X, Discord or my another socmed. I’m always excited to connect with people who share similar passions or offer different perspectives.

## Media social ##

### Facebook:  ###
<a class="inline text-orange-yellow-crayola underline hover:text-opacity-70" target="_blank" rel="noreferrer" href="https://fb.me/naturbrilian28" node="[object Object]">Lieba Natur Brilian</a>
// <a class="inline text-orange-yellow-crayola underline hover:text-opacity-70" target="_blank" rel="noreferrer" href="https://fb.me/gingalibadeidara.works" node="[object Object]">Gingalibadeidara Works</a>

### Twitter: ###
<a class="inline text-orange-yellow-crayola underline hover:text-opacity-70" target="_blank" rel="noreferrer" href="https://x.com/naturbrilian" node="[object Object]">@naturbrilian</a>

### Fediverse: ###
<a class="inline text-orange-yellow-crayola underline hover:text-opacity-70" target="_blank" rel="noreferrer" href="https://sakurajima.social/@naturbrilian" node="[object Object]">@naturbrilian@sakurajima.social</a> //
<a class="inline text-orange-yellow-crayola underline hover:text-opacity-70" target="_blank" rel="noreferrer" href="https://geoplanetary.net/@naturbrilian" node="[object Object]">@naturbrilian@geoplanetary.net</a> //
<a class="inline text-orange-yellow-crayola underline hover:text-opacity-70" target="_blank" rel="noreferrer" href="https://mastodon.social/@naturbrilian" node="[object Object]">@naturbrilian@mastodon.social</a>

## Project: ##
### Crowdin: ### 
<a class="inline text-orange-yellow-crayola underline hover:text-opacity-70" target="_blank" rel="noreferrer" href="https://crowdin.com/profile/naturbrilian" node="[object Object]">@naturbrilian</a>

### Github: ### 
<a class="inline text-orange-yellow-crayola underline hover:text-opacity-70" target="_blank" rel="noreferrer" href="https://github.com/naturbrilian" node="[object Object]">@naturbrilian</a>

### Graphics Design, and Vector: ### 
<a class="inline text-orange-yellow-crayola underline hover:text-opacity-70" target="_blank" rel="noreferrer" href="https://deviantart.com/gingalibadeidara" node="[object Object]">Deviantart</a> // <a class="inline text-orange-yellow-crayola underline hover:text-opacity-70" target="_blank" rel="noreferrer" href="https://pixiv.me/hifumidaiki" node="[object Object]">Pixiv</a>
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
