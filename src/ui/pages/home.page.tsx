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
import { Divider, Tooltip } from "antd";
import {
  BirthdayCakeIcon,
  Download04Icon,
  Location01Icon,
  Mortarboard01Icon,
  Share01Icon,
} from "hugeicons-react";

import FlutterLogo from "@/assets/tech_logo/flutter_logo.svg";
import DartLogo from "@/assets/tech_logo/dart_logo.svg";
import BlocLogo from "@/assets/tech_logo/bloc_logo.svg";
import GitLogo from "@/assets/tech_logo/git_logo.svg";
import FirebaseLogo from "@/assets/tech_logo/firebase_logo.svg";
import AWSLogo from "@/assets/tech_logo/aws_logo.svg";
import DockerLogo from "@/assets/tech_logo/docker_logo.svg";
import PythonLogo from "@/assets/tech_logo/python_logo.svg";
import FastAPILogo from "@/assets/tech_logo/fastapi_logo.svg";
import GraphQLLogo from "@/assets/tech_logo/graphql_logo.svg";
import LinuxLogo from "@/assets/tech_logo/linux_logo.svg";
import MongoDBLogo from "@/assets/tech_logo/mongodb_logo.svg";
import NextJSLogo from "@/assets/tech_logo/nextjs_logo.svg";
import NodeJSLogo from "@/assets/tech_logo/nodejs_logo.svg";
import ReactJSLogo from "@/assets/tech_logo/react_logo.svg";
import TailwindCSSLogo from "@/assets/tech_logo/tailwind_logo.svg";
import TraefikProxyLogo from "@/assets/tech_logo/traefik_proxy_logo.svg";
import NGINXLogo from "@/assets/tech_logo/nginx_logo.svg";
import TypeScriptLogo from "@/assets/tech_logo/ts_logo.svg";
import UnityLogo from "@/assets/tech_logo/unity_logo.svg";
import BlenderLogo from "@/assets/tech_logo/blender_logo_512x512.png";
import ViteJSLogo from "@/assets/tech_logo/vitejs_logo.svg";
import ZustandLogo from "@/assets/tech_logo/zustand_logo.svg";
import ThreeJSLogo from "@/assets/tech_logo/threejs_logo.svg";
/* 
import ProfileWebm from "@/assets/profile_pic.webm"; */
import MemojiMp4 from "@/assets/memoji.mp4";
/* import ProfileVideo from "@/assets/profile_v.mp4"; */

import AWSAssociateArchitect from "@/assets/cert/aws-certified-solutions-architect-associate.png";
import AWSAssociateDeveloper from "@/assets/cert/aws-certified-developer-associate.png";
import AWSServerless from "@/assets/cert/aws-knowledge-serverless.png";

export function HomePage() {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="  h-[70px] w-full flex justify-center items-center gap-8">
          {/* Home */}
          <NavBtn text={"Home"} href={"/"} />
          {/* Blog */}
          <NavBtn text={"Blog"} href={"https://blog.mqhamdam.pro/"} />
          {/* Projects */}
          <NavBtn text={"Projects"} href={"/projects"} />

          {/* Contact */}
          <NavBtn text={"Contact"} href={"/contact"} />
        </div>

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
              <source src={MemojiMp4} />
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
              <SkillTag
                logo={FlutterLogo}
                tooltipMsg={"Flutter Framework"}
                href="flutter.dev"
              />
              <SkillTag
                logo={DartLogo}
                tooltipMsg={"Dart Language"}
                href="flutter.dev"
              />
              <SkillTag
                logo={BlocLogo}
                tooltipMsg={"BLoC State Management"}
                href="flutter.dev"
              />
              <SkillTag
                logo={GitLogo}
                tooltipMsg={"Git Version Control"}
                href="flutter.dev"
              />
              <SkillTag
                logo={FirebaseLogo}
                tooltipMsg={"Firebase Cloud Services"}
                href="flutter.dev"
              />
              <SkillTag
                logo={AWSLogo}
                tooltipMsg={"Amazon Web Services"}
                href="flutter.dev"
              />
              <SkillTag
                logo={DockerLogo}
                tooltipMsg={"Docker Containerization"}
                href="flutter.dev"
              />
              <SkillTag
                logo={PythonLogo}
                tooltipMsg={"Python Programming Language"}
                href="flutter.dev"
              />
              <SkillTag
                logo={FastAPILogo}
                tooltipMsg={"FastAPI Framework"}
                href="flutter.dev"
              />
              <SkillTag
                logo={GraphQLLogo}
                tooltipMsg={"GraphQL Query Language"}
                href="flutter.dev"
              />
              <SkillTag
                logo={LinuxLogo}
                tooltipMsg={"Linux Operating System"}
                href="flutter.dev"
              />
              <SkillTag
                logo={MongoDBLogo}
                tooltipMsg={"MongoDB Database"}
                href="flutter.dev"
              />
              <SkillTag
                logo={NextJSLogo}
                tooltipMsg={"NextJS Framework"}
                href="flutter.dev"
              />
              <SkillTag
                logo={NodeJSLogo}
                tooltipMsg={"NodeJS Framework"}
                href="flutter.dev"
              />
              <SkillTag
                logo={ReactJSLogo}
                tooltipMsg={"ReactJS Framework"}
                href="flutter.dev"
              />
              <SkillTag
                logo={TailwindCSSLogo}
                tooltipMsg={"TailwindCSS Framework"}
                href="flutter.dev"
              />
              <SkillTag
                logo={TraefikProxyLogo}
                tooltipMsg={"Traefik Proxy Server"}
                href="flutter.dev"
              />
              <SkillTag
                logo={NGINXLogo}
                tooltipMsg={"NGINX Proxy Server"}
                href="flutter.dev"
              />
              <SkillTag
                logo={TypeScriptLogo}
                tooltipMsg={"TypeScript Language"}
                href="flutter.dev"
              />
              <SkillTag
                logo={UnityLogo}
                tooltipMsg={"Unity Game Engine"}
                href="flutter.dev"
              />
              <SkillTag
                logo={BlenderLogo}
                tooltipMsg={"Blender 3D Software"}
                href="flutter.dev"
              />
              <SkillTag
                logo={ViteJSLogo}
                tooltipMsg={"ViteJS Framework"}
                href="flutter.dev"
              />
              <SkillTag
                logo={ZustandLogo}
                tooltipMsg={"Zustand State Management"}
                href="flutter.dev"
              />{" "}
              <SkillTag
                logo={ThreeJSLogo}
                tooltipMsg={"ThreeJS Framework"}
                href="flutter.dev"
              />
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
    </div>
  );
}

/*  */
export function NavBtn({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      className="text-black px-4 py-1 text-lg   tracking-widest uppercase   hover:text-(--primary-color) transition-colors
        border-1   rounded-4xl border-transparent hover:border-(--primary-color)
      "
    >
      {text}
    </a>
  );
}

export function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="flex items-end hover:scale-95 transition-transform duration-300 ease-in-out   py-2 px-3 gap-2  "
    >
      <img src={icon} alt={label} className="h-[26px]   " />
      <div className="tracking-widest">{label}</div>
    </a>
  );
}

export function SkillTag({
  logo,
  tooltipMsg,
}: {
  logo: string;
  href: string;
  tooltipMsg: string;
}) {
  return (
    <Tooltip title={tooltipMsg}>
      <img
        src={logo}
        alt={tooltipMsg}
        className="h-8 w-8 hover:scale-90 transition-transform duration-300 ease-linear"
      />
    </Tooltip>
  );
}

export function CertTag({
  certification,
  tooltip,
}: {
  certification: string;
  tooltip: string;
}) {
  return (
    <Tooltip title={tooltip}>
      {" "}
      <img
        src={certification}
        alt={tooltip}
        className="h-32 w-32 hover:scale-90 transition-transform duration-300 ease-linear"
      />
    </Tooltip>
  );
}
