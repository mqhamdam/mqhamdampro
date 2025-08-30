import { Divider, Tooltip } from "antd";
import {
  BirthdayCakeIcon,
  Download04Icon,
  Location01Icon,
  Mortarboard01Icon,
  Share01Icon,
} from "hugeicons-react";

import { SocialLink, SkillTag, CertTag } from "@/components";
import { Layout } from "@/layouts";

import GithubIcon from "@/assets/social_icons/github_icon_48.png";
import LinkedInIcon from "@/assets/social_icons/linkedin_icon_48.png";
import GmailIcon from "@/assets/social_icons/gmail_icon_48.png";
import TelegramIcon from "@/assets/social_icons/telegram_icon_48.png";
import YoutubeIcon from "@/assets/social_icons/youtube_icon_48.png";
import InstagramIcon from "@/assets/social_icons/instagram_icon_48.png";

import TajikistanIcon from "@/assets/country_icons/tajikistan_icon_32.png";
import RussiaIcon from "@/assets/country_icons/russian_icon_32.png";
import USAIcon from "@/assets/country_icons/usa_icon_32.png";
import SouthKoreaIcon from "@/assets/country_icons/south_korea_icon_32.png";

import TechLogos from "@/utils/logos";
/* 
import ProfileWebm from "@/assets/profile_pic.webm"; */
import MemojiWebm from "@/assets/memoji.webm";
/* import ProfileVideo from "@/assets/profile_v.mp4"; */

import AWSAssociateArchitect from "@/assets/cert/aws-certified-solutions-architect-associate.png";
import AWSAssociateDeveloper from "@/assets/cert/aws-certified-developer-associate.png";
import AWSServerless from "@/assets/cert/aws-knowledge-serverless.png";

export function HomePage() {
  // Tech stack data for cleaner rendering
  const techStack = [
    { name: "Flutter", tooltip: "Flutter Framework" },
    { name: "Dart", tooltip: "Dart Language" },
    { name: "BLoC", tooltip: "BLoC State Management" },
    { name: "Git", tooltip: "Git Version Control" },
    { name: "Firebase", tooltip: "Firebase Cloud Services" },
    { name: "AWS", tooltip: "Amazon Web Services" },
    { name: "Docker", tooltip: "Docker Containerization" },
    { name: "Python", tooltip: "Python Programming Language" },
    { name: "FastAPI", tooltip: "FastAPI Framework" },
    { name: "GraphQL", tooltip: "GraphQL Query Language" },
    { name: "Linux", tooltip: "Linux Operating System" },
    { name: "MongoDB", tooltip: "MongoDB Database" },
    { name: "Next.js", tooltip: "NextJS Framework" },
    { name: "Node.js", tooltip: "NodeJS Framework" },
    { name: "React", tooltip: "ReactJS Framework" },
    { name: "Tailwind CSS", tooltip: "TailwindCSS Framework" },
    { name: "Traefik", tooltip: "Traefik Proxy Server" },
    { name: "NGINX", tooltip: "NGINX Proxy Server" },
    { name: "TypeScript", tooltip: "TypeScript Language" },
    { name: "Unity", tooltip: "Unity Game Engine" },
    { name: "Blender", tooltip: "Blender 3D Software" },
    { name: "Vite", tooltip: "ViteJS Framework" },
    { name: "Zustand", tooltip: "Zustand State Management" },
    { name: "Three.js", tooltip: "ThreeJS Framework" }
  ];

  return (
    <Layout>
      <div className="flex flex-col mt-10 ">
        <div className="bg-(--card-background-light) flex mx-auto shadow rounded-3xl  py-10 px-4 w-[1100px] relative">
          {/* Top right corner elements */}
          <div className="absolute top-6 right-6">
            <div className="flex gap-4">
              {/* download CV */}
              <a
                href=" "
                className="hover:shadow   flex border-1 border-slate-950 rounded-full px-4 py-2 gap-2 hover:border-(--primary-color) hover:text-(--primary-color) transition-colors"
              >
                <Download04Icon />
                Download CV
              </a>{" "}
              <a
                href=" "
                className=" hover:shadow flex border-1 border-slate-950 rounded-full px-4 py-2 gap-2 hover:border-(--primary-color) hover:text-(--primary-color) transition-colors"
              >
                <Share01Icon />
                Share CV
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 p-4  ">
            {/* Webm player with no border auto start */}
            <video
              className="rounded-3xl  "
              autoPlay
              loop
              muted
              playsInline
              width="400"
              height="400"
            >
              <source src={MemojiWebm} type="video/webm" />
            </video>
            <div className="flex flex-col h-full gap-4 justify-center">
              <div className="flex items-center gap-2  ">
                <BirthdayCakeIcon className="text-red-500" />
                <span className="text-gray-700 font-medium">
                  1999.05.28, 26 y.o.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Location01Icon className="text-blue-500" />
                <span className="text-gray-700 font-medium">
                  South Korea, Daegu
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mortarboard01Icon className="text-green-500" />
                <span className="text-gray-700 font-medium">
                  Kyungpook National University
                </span>
              </div>
            </div>
            <div className="flex flex-col h-full gap-4">
              {/* Apps Built */}
              {/* Year of Experience */}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <h1 className="text-4xl font-bold">Hamdam</h1>
              <Tooltip title="I'm from Tajikistan. Ман бо забони тоҷикӣ гап мезанам">
                <img
                  src={TajikistanIcon}
                  alt="Tajikistan Flag"
                  className="h-[32px] ml-2"
                />
              </Tooltip>
              {/* vertical line */}
              <div className="h-[32px] border-l-2 mx-2 border-slate-200"></div>
              <Tooltip title="Я говорю по-русски">
                <img
                  src={RussiaIcon}
                  alt="Russia Flag"
                  className="h-[32px] ml-2"
                />
              </Tooltip>
              <Tooltip title="한국어 할 수 있습니다 ^^">
                <img
                  src={SouthKoreaIcon}
                  alt="South Korea Flag"
                  className="h-[32px] ml-2"
                />
              </Tooltip>
              <Tooltip title="I speak English">
                <img src={USAIcon} alt="USA Flag" className="h-[32px] ml-2" />
              </Tooltip>
            </div>
            <p className="text-lg">
              I prefer working using latest technologies and frameworks.
              Prefering Domain-Driven Design, MVVM, MVC, and Microservices.
            </p>
            <div className="mt-6"></div>
            <Divider orientation="left" variant="dashed" dashed>
              {" "}
              <div className="tracking-widest uppercase text-gray-300">
                Certifications
              </div>
            </Divider>
            <div className="flex  mt-2 flex-wrap gap-4">
              <CertTag
                certification={AWSAssociateArchitect}
                tooltip="AWS Certified Solutions Architect - Associate"
              />
              <CertTag
                certification={AWSAssociateDeveloper}
                tooltip="AWS Certified Developer - Associate"
              />
              <CertTag
                certification={AWSServerless}
                tooltip="AWS Certified Serverless Knowledge"
              />
            </div>
            <div className="mt-4"></div>
            <Divider orientation="left" variant="dashed" dashed>
              {" "}
              <div className="tracking-widest uppercase text-gray-300">
                Tech Stack
              </div>
            </Divider>

            <div className="flex   mt-2 flex-wrap gap-4">
              {techStack.map((tech) => (
                <SkillTag
                  key={tech.name}
                  logo={TechLogos.getLogoByKeyword(tech.name)}
                  tooltipMsg={tech.tooltip}
                  href="flutter.dev"
                />
              ))}
            </div>
            {/* horizontal divider */}
            <div className="mt-6"></div>
            <Divider orientation="left" variant="dashed" dashed>
              {" "}
              <div className="tracking-widest uppercase text-gray-300">
                contacts
              </div>
            </Divider>
            <div className="flex gap-1   ">
              {/* Social Media */}
              <SocialLink href={""} label={"Github"} icon={GithubIcon} />{" "}
              <SocialLink href={""} label="LinkedIn" icon={LinkedInIcon} />{" "}
              <SocialLink href={""} label="Gmail" icon={GmailIcon} />{" "}
              <SocialLink href={""} label="Telegram" icon={TelegramIcon} />{" "}
              <SocialLink href={""} label="Youtube" icon={YoutubeIcon} />{" "}
              <SocialLink href={""} label="Instagram" icon={InstagramIcon} />{" "}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
