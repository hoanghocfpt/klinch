import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a]">
      <header className="flex sticky top-0 left-0 right-0 bg-transparent backdrop-blur-md border-b border-zinc-800 justify-between items-center px-4 py-2 lg:px-[8%] lg:py-[20px]">
        {/* <Image src="/logo.png" alt="" width={120} height={48} className="h-8 sm:h-12" /> */}
        <a href="#" className="text-4xl font-extrabold text-white">Klinch</a>
        <a className="px-4 sm:px-4 py-3 sm:py-3 flex items-center space-x-2 bg-[#3336e8] text-white text-sm sm:text-base rounded-lg" href="#">Download Now</a>
      </header>
      <section className="hero container mx-auto px-4 md:px-8 py-8 md:py-24">
        <div className="md:flex md:justify-between items-center">
          <div className="w-full md:w-[55%] flex md:block flex-col justify-center">
            <div className="mt-4 md:mt-0 mb-12 md:mb-20 text-center md:text-left">
              <h2 className="text-[24px] md:text-[36px] text-gray-300 font-medium md:font-semibold">AI Shopping Assistant</h2>
              <h1 className="mb-2 text-[36px] md:text-[64px] text-white font-bold">Never buy bullshit</h1>
              <p className="text-[18px] md:text-[28px] leading-[1.2em] text-gray-400">
                Klinch helps you find the best product at the best price, all with the magic of AI that pops-up on top of your favourite shopping app.
              </p>
            </div>
            <div className="flex w-full md:hidden justify-center">
              <video className="w-full rounded-4xl" autoPlay muted loop playsinline src="/video/6842103731319.mp4"></video>
            </div>
            <div className="inline-flex flex-col justify-center space-y-3 md:space-y-6">
              <a className="px-4 sm:px-16 py-4 inline-block bg-[#3336e8] text-center text-white text-sm sm:text-xl rounded-lg" href="#">Download Now</a>
              <div className="w-full">
                <p className="mb-3 md:mb-2 md:text-xl text-center md:text-left text-gray-400">Download Now Available for both Android & iOS</p>
                <div className="w-full flex justify-center space-x-4">
                  <a href="#">
                    <Image src="/images/download-google-play.png" alt="Google Play" width={274} height={80} className="object-contain h-12 md:h-14 flex items-center rounded-lg border border-gray-600 bg-black" />
                  </a>
                  <a href="#">
                    <Image src="/images/download-app-store.png" alt="App Store" width={274} height={80} className="object-contain h-12 md:h-14 flex items-center rounded-lg border border-gray-600 bg-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-[45%] md:flex justify-center">
            <video className="w-[400px] rounded-4xl" autoPlay muted loop playsinline src="/video/6842103731319.mp4"></video>
          </div>
        </div>
      </section>
      <footer className="text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:justify-between">
            <h2 className="text-3xl font-semibold mb-2">Start Klinching today</h2>
            <p className="text-lg flex flex-wrap items-center">Made with ❤️
              in Vietnam
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-start md:justify-between md:items-center">
            <a href="#" className="text-4xl font-extrabold text-white">Klinch</a>
            <p className="text-gray-400 text-sm">© 2025 Klinch Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
