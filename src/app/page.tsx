import CTA from "@/components/CTA";
import Featured from "@/components/Featured";
import Feedbacks from "@/components/Feedbacks";
import Hero from "@/components/Hero";
import Possibilities from "@/components/Possibilities";
import Questions from "@/components/Questions";

export default function Home() {
  return (
    <>
      <Hero />
      <Possibilities />
      <Featured />
      <Feedbacks />
      <Questions />
      <CTA />
    </>
  );
}
