import { GithubUserInfo } from "../types";

export default async function githubInfoLoader(
  githubUserName: string = "hiteshchoudhary"
): Promise<GithubUserInfo> {
  const response = await fetch(
    `https://api.github.com/users/${githubUserName}`
  );
  return response.json();
}
