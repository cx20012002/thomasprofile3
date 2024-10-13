// ProfileSection.js
import { PortableText, PortableTextReactComponents } from "next-sanity";
import AnimatedText from "./AnimatedText";

const customComponents:Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="body-text">{children}</p>,
  },
};

export default function ProfileSection({ profileSection }) {
  if (!profileSection) return null; // Optional: handle the case when profileSection is undefined

  return (
    <div className="my-5 flex w-full flex-col gap-5 md:my-[15vh] md:max-w-[1600px] md:flex-row md:gap-0">
      <div className="w-full md:w-2/6">{profileSection.title}</div>
      <div className="w-full md:w-4/6">
        <AnimatedText title={profileSection.summary}>
          <PortableText
            value={profileSection.content}
            components={customComponents}
          />
        </AnimatedText>
      </div>
    </div>
  );
}
