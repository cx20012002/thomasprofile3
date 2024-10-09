import Header from "./Header";

export default function page() {
  return (
    <div className="h-screen w-full bg-black relative">
      <div className="absolute inset-0 bg-[url('/h-2.webp')] bg-cover opacity-100 z-10"></div>
      <h1 className="text-3xl mix-blend-difference text-black">Hello</h1>
    </div>
  );
}
