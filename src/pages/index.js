import Footer from "@/components/layout/footer";
import Link from "next/link";
import { company } from "@/utils/typo";

function BackgroundVideo({ video }) {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="hidden md:block absolute z-[-1] w-auto min-w-full min-h-full bottom-0 max-w-full  overflow-hidden"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hidden bg-[#030413] opacity-20 md:block absolute z-[-1] w-auto min-w-full min-h-full bottom-0 max-w-full  overflow-hidden"></div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <main className="">
        <BackgroundVideo video="/banner.mp4" />
        <div className="px-4 lg:px-0 mx-auto max-w-[1080px] flex justify-center flex-col min-h-[calc(100vh-56px)]">
          <div className="flex justify-center flex-row">
            <div className="flex flex-col justify-between text-center h-[calc(100vh-56px)] py-32">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#E4E4ED] ">
                {company.name}
              </h1>
              <div className="mb-5 text-4xl tracking-tight font-extrabold text-[#E4E4ED] sm:text-5xl md:text-7xl lg:px-32 space-y-5">
                <h2 className="block xl:inline">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </h2>
                <h3 className="block text-[#AEACC9] font-medium text-2xl lg:px-32">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </h3>
              </div>
              <div>
                <Link
                  href="/dashboard"
                  className="px-10 py-3 border-0 border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#008dff] to-[#7B3FE4] hover:drop-shadow-[0_3px_5px_#7d7d7d] md:py-4 md:text-lg"
                >
                  Use {company.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer fontColor="text-[#E4E4ED] dark:text-[#E4E4ED] hover:text-[#a1a1a1]" />
    </>
  );
}
