import fetch, { RequestInfo, RequestInit, Response } from "node-fetch";

export function fetchClashAPI(
  path: RequestInfo,
  options?: RequestInit
): Promise<Response> {
  const baseUrl = "https://api.clashofclans.com/v1/";
  const reqUrl = `${baseUrl}${encodeURIComponent(path as string)}`;
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.CLASH_TOKEN}`,
    },
    ...options,
  };

  return fetch(reqUrl, reqOptions);
}
