// Tech Logo Imports
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

// Logo mapping by keyword/technology name
const LOGO_MAP: Record<string, string> = {
  // Frontend Frameworks & Libraries
  react: ReactJSLogo,
  "react.js": ReactJSLogo,
  reactjs: ReactJSLogo,
  "next.js": NextJSLogo,
  nextjs: NextJSLogo,
  vue: ReactJSLogo, // fallback - add Vue logo if needed
  "vue.js": ReactJSLogo, // fallback
  angular: ReactJSLogo, // fallback
  svelte: ReactJSLogo, // fallback

  // Mobile Development
  flutter: FlutterLogo,
  dart: DartLogo,
  "react native": ReactJSLogo,
  ionic: ReactJSLogo, // fallback

  // Backend & APIs
  "node.js": NodeJSLogo,
  nodejs: NodeJSLogo,
  express: NodeJSLogo,
  "express.js": NodeJSLogo,
  fastapi: FastAPILogo,
  python: PythonLogo,
  django: PythonLogo,
  flask: PythonLogo,
  graphql: GraphQLLogo,

  // Styling & CSS
  "tailwind css": TailwindCSSLogo,
  tailwindcss: TailwindCSSLogo,
  tailwind: TailwindCSSLogo,
  css: TailwindCSSLogo, // fallback
  scss: TailwindCSSLogo, // fallback
  sass: TailwindCSSLogo, // fallback
  "styled-components": ReactJSLogo, // fallback

  // Languages
  typescript: TypeScriptLogo,
  javascript: TypeScriptLogo, // using TS logo as fallback
  js: TypeScriptLogo,
  ts: TypeScriptLogo,

  // Databases
  mongodb: MongoDBLogo,
  postgres: MongoDBLogo, // fallback
  postgresql: MongoDBLogo, // fallback
  mysql: MongoDBLogo, // fallback
  redis: MongoDBLogo, // fallback

  // Cloud & DevOps
  aws: AWSLogo,
  "amazon web services": AWSLogo,
  docker: DockerLogo,
  kubernetes: DockerLogo, // fallback
  firebase: FirebaseLogo,
  vercel: NextJSLogo, // fallback
  netlify: ReactJSLogo, // fallback

  // Build Tools & Development
  vite: ViteJSLogo,
  vitejs: ViteJSLogo,
  webpack: ViteJSLogo, // fallback
  rollup: ViteJSLogo, // fallback
  parcel: ViteJSLogo, // fallback

  // Version Control & Tools
  git: GitLogo,
  github: GitLogo,
  gitlab: GitLogo,

  // State Management
  zustand: ZustandLogo,
  redux: ZustandLogo, // fallback
  mobx: ZustandLogo, // fallback
  bloc: BlocLogo,
  riverpod: BlocLogo, // fallback

  // Game Development & 3D
  unity: UnityLogo,
  unreal: UnityLogo, // fallback
  "three.js": ThreeJSLogo,
  threejs: ThreeJSLogo,
  webgl: ThreeJSLogo,
  blender: BlenderLogo,

  // Infrastructure & Servers
  nginx: NGINXLogo,
  apache: NGINXLogo, // fallback
  traefik: TraefikProxyLogo,
  linux: LinuxLogo,
  ubuntu: LinuxLogo,
  debian: LinuxLogo,
  centos: LinuxLogo,

  // General Categories
  "e-commerce": ReactJSLogo,
  mobile: FlutterLogo,
  ios: FlutterLogo,
  android: FlutterLogo,
  api: GraphQLLogo,
  microservices: DockerLogo,
  serverless: AWSLogo,
  authentication: FirebaseLogo,
  "admin dashboard": ReactJSLogo,
  dashboard: ReactJSLogo,
  cms: ReactJSLogo,
  blog: NextJSLogo,
  portfolio: ReactJSLogo,
  "responsive design": TailwindCSSLogo,
  responsive: TailwindCSSLogo,
  seo: NextJSLogo,
  ssr: NextJSLogo,
  "machine learning": PythonLogo,
  ai: PythonLogo,
  "data visualization": ThreeJSLogo,
  charts: ReactJSLogo,
  analytics: ReactJSLogo,
  "3d graphics": ThreeJSLogo,
  "game development": UnityLogo,
  "cross-platform": FlutterLogo,
  devops: DockerLogo,
  "ci/cd": GitLogo,
  testing: ReactJSLogo,
  offline: FlutterLogo,
  shaders: ThreeJSLogo,
  interactive: ThreeJSLogo,
  "real-time": GraphQLLogo,
  subscriptions: GraphQLLogo,
  caching: MongoDBLogo, // fallback
  optimization: ViteJSLogo,
  performance: ViteJSLogo,
  bundling: ViteJSLogo,
  deployment: AWSLogo,
  hosting: AWSLogo,
  cdn: AWSLogo,
  monitoring: LinuxLogo,
  logging: LinuxLogo,
  security: LinuxLogo,
};

/**
 * Technology Logo Utility Class
 * Provides methods to get logos by technology keywords
 */
export class TechLogos {
  /**
   * Get logo by technology keyword
   * @param keyword - Technology name or keyword (case-insensitive)
   * @returns Logo URL or fallback logo
   */
  static getLogoByKeyword(keyword: string): string {
    const normalizedKeyword = keyword.toLowerCase().trim();
    return LOGO_MAP[normalizedKeyword] || ReactJSLogo; // Default fallback
  }

  /**
   * Get multiple logos by keywords array
   * @param keywords - Array of technology names
   * @returns Array of logo URLs
   */
  static getLogosByKeywords(keywords: string[]): string[] {
    return keywords.map((keyword) => this.getLogoByKeyword(keyword));
  }

  /**
   * Check if logo exists for keyword
   * @param keyword - Technology name
   * @returns Boolean indicating if specific logo exists
   */
  static hasLogo(keyword: string): boolean {
    const normalizedKeyword = keyword.toLowerCase().trim();
    return normalizedKeyword in LOGO_MAP;
  }

  /**
   * Get all available technology keywords
   * @returns Array of all supported keywords
   */
  static getSupportedKeywords(): string[] {
    return Object.keys(LOGO_MAP);
  }

  /**
   * Get logo with tooltip text
   * @param keyword - Technology name
   * @returns Object with logo URL and tooltip text
   */
  static getLogoWithTooltip(keyword: string): {
    logo: string;
    tooltip: string;
  } {
    return {
      logo: this.getLogoByKeyword(keyword),
      tooltip: keyword,
    };
  }
}

// Export individual logos for direct import if needed
export {
  FlutterLogo,
  DartLogo,
  BlocLogo,
  GitLogo,
  FirebaseLogo,
  AWSLogo,
  DockerLogo,
  PythonLogo,
  FastAPILogo,
  GraphQLLogo,
  LinuxLogo,
  MongoDBLogo,
  NextJSLogo,
  NodeJSLogo,
  ReactJSLogo,
  TailwindCSSLogo,
  TraefikProxyLogo,
  NGINXLogo,
  TypeScriptLogo,
  UnityLogo,
  BlenderLogo,
  ViteJSLogo,
  ZustandLogo,
  ThreeJSLogo,
};

// Export the logo map for external usage
export { LOGO_MAP };

export default TechLogos;
