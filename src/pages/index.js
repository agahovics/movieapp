import Head from "next/head";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Contents } from "@/components/Contents";
import { useState } from "react";

export default function Home() {
  const [keyword, setKeyword] = useState(undefined);
  return (
    <>
      <Head>
        <title>Let's movie!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header
        search
        onSearch={(data) => {
          setKeyword(data);
        }}
      />
      <Hero />
      <Contents searchKeyword={keyword} />
    </>
  );
}
