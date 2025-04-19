import { About, Blog, Clients, Contact, Hero, Projects } from "@/components/Home";


export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
      <Blog/>
      <Contact/>
    </main>
  );
}
