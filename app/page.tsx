import About from "@/components/ui/home/About";
import Banner from "@/components/ui/home/Banner";
import Footer from "@/components/ui/home/Footer";
import Header from "@/components/ui/home/Header";
import Profiles from "@/components/ui/home/Profiles";
import { client } from "@/sanity/lib/client";

async function getCombinedData() {
  const [history, profile] = await Promise.all([
    client.fetch(`*[_type=="history"]`),
    client.fetch(`*[_type == "profile"] | order(_createdAt asc)`),
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
      <Header />
      <Footer />
    </>
  );
}
