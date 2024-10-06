import About from "@/components/ui/home/About";
import Banner from "@/components/ui/home/Banner";
import Footer from "@/components/ui/home/Footer";
import Header from "@/components/ui/home/Header";
import Profiles from "@/components/ui/home/Profiles";
import { client } from "@/sanity/lib/client";

async function getData() {
  const data = await client.fetch(`*[_type == "home"]{
    title,
    about
    }[0]`);

  return data;
}

export default async function Home() {

  const data = await getData();

  return (
    <>
      <Banner />
      <About />
      <Profiles />
      <Header />
      <Footer />
      <div className="text-xl">{data.title} --- {data.about}</div>
    </>
  );
}
