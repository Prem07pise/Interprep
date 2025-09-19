import { Sparkles, ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
      <Container>
        <div className="my-4 space-y-8">
          <h2 className="text-3xl text-center md:text-left md:text-5xl animate-fade-in">
            <span className="font-black md:text-7xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient-x hover:scale-105 transition-transform">
              Interview-Prep
            </span>
            <span className="text-gray-600 font-bold hover:text-purple-600 transition-all duration-300 ml-2 animate-bounce-slow">
              - Your Gateway to
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-900 text-transparent bg-clip-text font-extrabold hover:opacity-80 transition-opacity">
              Professional Success & Growth
            </span>
          </h2>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed max-w-2xl animate-fade-in">
            Boost your interview skills and increase your success rate with
            AI-driven insights. Discover a smarter way to prepare, practice, and
            stand out in today's competitive market.
          </p>

          <div className="flex gap-4 animate-bounce-slow">
                <Link to="/signin">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all transform hover:scale-105">
                    Get Started <ArrowRight className="ml-2" />
                  </Button>
                </Link>

            <Button size="lg" variant="outline" className="hover:bg-white/80 border-2 border-purple-500 text-purple-700">
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 gap-12 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all p-8">
          <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 text-center hover:scale-105 transition-transform">
            250k+
            <span className="block text-xl text-pink-600 font-normal mt-2">
              Offers Received
            </span>
          </p>
          <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-center hover:scale-105 transition-transform">
            1.2M+
            <span className="block text-xl text-indigo-600 font-normal mt-2">
              Interviews Aced
            </span>
          </p>
        </div>

        {/* image section */}
        <div className="w-full mt-12 rounded-2xl bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 h-[420px] shadow-2xl overflow-hidden relative hover:shadow-3xl transition-all group">
          <img
            src="/assets/img/hero.jpg"
            alt="Interview preparation"
            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 duration-700"
          />

          <div className="absolute top-4 left-4 px-6 py-3 rounded-lg bg-white/80 backdrop-blur-md hover:bg-white/95 transition-all shadow-lg">
            <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Interviews Copilot
            </span>
            <span className="text-gray-700 ml-1">&copy;</span>
          </div>

          <div className="hidden md:flex absolute items-center gap-2 bottom-4 right-4 px-6 py-4 rounded-lg bg-white/80 backdrop-blur-md hover:bg-white/95 transition-all shadow-lg">
            <img
              src="/assets/img/logo/gemini-color.png"
              alt="Gemini Logo"
              className="w-6 h-6"
            />
            <span className="font-semibold text-gray-700 bg-gradient-to-r from-blue-600 to-teal-600 text-transparent bg-clip-text">
              Powered by Gemini
            </span>
          </div>
        </div>
      </Container>

      {/* marquee section */}
      <div className="w-full my-16">
        <Marquee pauseOnHover speed={40}>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      <Container className="py-12 space-y-8">
        <h2 className="tracking-wide text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 font-bold text-center">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="col-span-1 md:col-span-3 transform hover:scale-102 transition-transform">
            <img
              src="/assets/img/office.jpg"
              alt=""
              className="w-full max-h-96 rounded-xl object-cover shadow-lg hover:shadow-xl"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center bg-white/50 backdrop-blur-sm rounded-xl p-6">
            <p className="text-center text-gray-700 text-lg">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
