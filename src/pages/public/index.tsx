import {octokit} from '@/utils/fetcher';
import type { InferGetStaticPropsType } from "next";

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const repos = await octokit.request(
    "GET /users/{username}/repos",
    {
      username: "simultechnology",
      per_page: 100
    });
  return { props: { repos }}
}

export default function Page(props: PageProps) {
  if (!props.repos.data) {
    return <>error!</>;
  }
  console.log(props.repos.data);
  props.repos.data.map(repo => {
    console.log(repo.blobs_url);
  });
  return <div>Hello Next.js</div>;
}
