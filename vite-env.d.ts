/// <reference types="vite-plugin-svgr/client" />
declare module "*.jpg" {
  const value: string;
  export default value;
}

interface ImportMeta {
  readonly env: Record<string, string>;
  readonly glob: any;
}