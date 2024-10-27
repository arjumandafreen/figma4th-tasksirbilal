import Featured from "@/components/Featured"; // Updated to lowercase 'c'
import Footer from "@/components/Footer";       // Updated to lowercase 'c'
import Hero from "@/components/Hero";           // Updated to lowercase 'c'
import Navbar from "@/components/Navbar";        // Updated to lowercase 'c'
import Recent from "@/components/Recent";        // Updated to lowercase 'c'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Recent />
      <Featured />
      <Footer />
    </div>
  );
}
