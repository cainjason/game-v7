import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Video from "./Components/Video";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <div className="flex">
        <div className="w-1/3">
          <Navbar />
        </div>
        <div className="w-2/3 mt-10 mr-10">
          <Video />
        </div>
      </div>
      <Footer />
    </main>
  );
}
