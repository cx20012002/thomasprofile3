import MouseCursorComponent from "@/components/MouseCursorComponent";
import Image from "next/image";
import React from "react";
import ProfilesCard from "./components/ProfilesCard";

export default function Profiles() {
  const data = [
    {
      title: "Symphony",
      smallTitle: "Art Direction, User Research, User Testing",
      content:
        "Transcending expectations. Shaping unprecedented user journeys.",
      image: "/h-2.webp",
    },
    {
      title: "Small Card 1",
      smallTitle: "Small Card 3",
      content: "This is the content for the first small card.",
      image: "/profiles_image3.webp",
    },
    {
      title: "Small Card 2",
      smallTitle: "Small Card 3",
      content: "This is the content for the second small card.",
      image: "/profiles_image1.webp",
    },
    {
      title: "Big Card 2",
      smallTitle: "Small Card 3",
      content: "This is the content for the second big card.",
      image: "single_profile_image1.webp",
    },
    {
      title: "Small Card 3",
      smallTitle: "Small Card 3",
      content: "This is the content for the third small card.",
      image: "/h-1.webp",
    },
    {
      title: "Small Card 4",
      smallTitle: "Small Card 3",
      content: "This is the content for the fourth small card.",
      image: "/profiles_image2.webp",
    },
    {
      title: "Small Card 5",
      smallTitle: "Small Card 3",
      content: "This is the content for the fourth small card.",
      image: "/h-0.webp",
    },
  ];

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
            content={item.content}
            isLarge={index % 3 === 0}
            bgImage={item.image}
          />
        ))}
      </div>
    </div>
  );
}
