declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number;
    CORS_ORIGIN: string;
  }
}