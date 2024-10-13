import React from "react";
import ProfilesCard from "./components/ProfilesCard";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

async function getData() {
  const data = await client.fetch(
    `*[_type == "profile"] | order(_createdAt asc){title, smallTitle, slug, featureImage, summary}`,
  );
  return data;
}

export default async function Profiles() {
  const data = await getData();

  return (
    <div className="relative w-full items-center justify-center px-10">
      <div className="flex h-[30vh] w-full items-center">
        <h1 className="title">Making your boldest ideas a reality</h1>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 bg-red-50 md:grid-cols-2">
        {data.map((item, index) => (
          <ProfilesCard
            key={index}
            title={item.title}
            smallTitle={item.smallTitle}
            content={item.summary}
            isLarge={index % 3 === 0}
            bgImage={item.featureImage ? urlFor(item.featureImage).url() : "/h-1.webp"} // Conditional image handling
            slug={item.slug.current}
          />
        ))}
      </div>
    </div>
  );
}
