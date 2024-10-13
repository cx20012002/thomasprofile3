import About from "@/components/ui/home/About";
import Banner from "@/components/ui/home/Banner";
import FooterMenu from "@/components/ui/home/FooterMenu";
import HomeHeader from "@/components/ui/home/HomeHeader";
import Profiles from "@/components/ui/home/Profiles";
import { client } from "@/sanity/lib/client";

async function getCombinedData() {
  const [history, profile] = await Promise.all([
    client.fetch(`*[_type=="history"]`),
    client.fetch(
      `*[_type == "profile"] | order(_createdAt asc) {title, slug, smallTitle, featureImage, summary}`,
    ),
  ]);

  return { history, profile };
}

export default async function Home() {
  const { history, profile } = await getCombinedData();
  return (
    <>
      <Banner />
      <About />
      <Profiles history={history} proflie={profile} />
      <HomeHeader />
      <FooterMenu />
    </>
  );
}
