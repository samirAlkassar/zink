import { Features } from "../components/Features"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { PlanSection } from "../components/PlanSection"
import { Footer } from "../components/Footer"


export default function Home() {
  return (
   <>
    <Header />
    <main>
      <Hero />
      <Features />
      <PlanSection />
    </main>
    <Footer />
   </>
  )
}