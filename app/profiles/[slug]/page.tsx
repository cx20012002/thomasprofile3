import React from "react";
import SingleProfileContent from "../components/SingleProfileContent";
import { client } from "@/sanity/lib/client";
import { Profile } from "@/lib/interface";
import NextProject from "../components/NextProject";

async function getProfile(slug: string) {
  const data: Profile = await client.fetch(
    `*[_type == "profile" && slug.current == $slug][0]{
      title, 
      subtitle, 
      smallTitle, 
      featureImage, 
      images, 
      introBlocks, 
      summary, 
      slug, 
      content, 
      profileSection,
      gallery,
      _createdAt
    }`,
    { slug },
  );

  return data;
}

async function getNextProfile(currentCreatedAt: string) {
  const nextProfile: Profile = await client.fetch(
    `*[_type == "profile" && _createdAt > $currentCreatedAt][0] {
      title, 
      summary,
      featureImage,
      slug,
    }`,
    { currentCreatedAt },
  );

  return nextProfile;
}

export default async function SingleProfile({
  params,
}: {
  params: { slug: string };
}) {
  const profile = await getProfile(params.slug);

  if (!profile) return <h1>Nothing here</h1>;

  const nextProfile = await getNextProfile(profile._createdAt);

  return (
    <div className="mt-32 md:mt-52">
      <SingleProfileContent profile={profile} />
      {nextProfile && <NextProject profile={nextProfile} />}{" "}
    </div>
  );
}
