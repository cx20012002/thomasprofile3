import About from "@/components/ui/home/About";
import Banner from "@/components/ui/home/Banner";
import Footer from "@/components/ui/home/Footer";
import Header from "@/components/ui/home/Header";
import Profiles from "@/components/ui/home/Profiles";
import { History } from "@/lib/interface";
import { client } from "@/sanity/lib/client";

async function getData() {
  const data:History[] = await client.fetch(`*[_type=="history"]{
  experience
}`);

  return data;
}

export default async function Home() {
  const history = await getData();
  console.log(history)
  console.log({history})

  return (
    <>
      <Banner />
      <About />
      <Profiles history={history} />
      <Header />
      <Footer />
    </>
  );
}
