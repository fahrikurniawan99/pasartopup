import FlashSaleCard from "@/components/flash-sale/card";
import AppBar from "@/components/layout/app-bar";
import OperatorCard from "@/components/operator/card";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <AppBar />
        <div className="max-w-[1024px] w-full px-6 mx-auto "></div>
        <div className="overflow-hidden py-10 w-[100%] mx-auto">
          <h1 className="text-[#F57D1F] font-extrabold text-4xl tracking-tighter text-center relative z-10">
            Saatnya Jagoan Keluar,
          </h1>
          <h1 className="text-[#F57D1F] font-extrabold text-4xl tracking-tighter text-center relative z-10">
            di Flashsale 2.2
          </h1>
          <p className="text-center text-small tracking-tight text-[#211C6A]/70 font-bold mt-3 relative z-10">
            Udah murah tapi nggak borong. Yang bener aje, rugi dongggg...
          </p>
          <Marquee pauseOnHover speed={60}>
            <div className="flex flex-nowrap gap-5 w-fit mt-10 ml-5">
              {Array.from({ length: 10 }).map((_, index) => (
                <FlashSaleCard key={index} />
              ))}
            </div>
          </Marquee>
          <Marquee direction="right" pauseOnHover speed={60}>
            <div className="flex flex-nowrap gap-5 w-fit mt-10 ml-5">
              {Array.from({ length: 10 }).map((_, index) => (
                <FlashSaleCard key={index} />
              ))}
            </div>
          </Marquee>
        </div>
        <div
          className="h-full w-full bg-gradient-to-b from-[#EEF5FF] to-white/0 absolute top-0
         left-0 "
        ></div>
      </div>
      <div className="relative">
        <div className="bg-[#D04848]/40 absolute top-1/2 -translate-y-1/2 w-[200px] aspect-square rounded-full blur-[150px]"></div>
        <div className="bg-[#D04848]/40 absolute top-1/2 right-0 -translate-y-1/2 w-[200px] aspect-square rounded-full blur-[150px]"></div>
        <div className="max-w-[1024px] w-full px-6 mx-auto mt-20">
          <h1 className="text-[#D04848] font-extrabold text-4xl tracking-tighter text-center">
            Topup Game
          </h1>
          <p className="text-center text-small tracking-tight text-[#D04848]/70 font-bold mt-3">
            Udah murah tapi nggak borong. Yang bener aje, rugi dongggg...
          </p>
          <div className="grid grid-cols-5 gap-5 mt-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <OperatorCard key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-[#6C22A6]/40 absolute top-1/2 -translate-y-1/2 w-[200px] aspect-square rounded-full blur-[150px]"></div>
        <div className="bg-[#6C22A6]/40 absolute top-1/2 right-0 -translate-y-1/2 w-[200px] aspect-square rounded-full blur-[150px]"></div>
        <div className="max-w-[1024px] w-full px-6 mx-auto mt-20">
          <h1 className="text-[#6C22A6] font-extrabold text-4xl tracking-tighter text-center mt-20">
            Topup Voucher
          </h1>
          <p className="text-center text-small tracking-tight text-[#6C22A6]/70 font-bold mt-3">
            Udah murah tapi nggak borong. Yang bener aje, rugi dongggg...
          </p>
          <div className="grid grid-cols-5 gap-5 mt-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <OperatorCard key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-[#3559E0]/40 absolute top-1/2 -translate-y-1/2 w-[200px] aspect-square rounded-full blur-[150px]"></div>
        <div className="bg-[#3559E0]/40 absolute top-1/2 right-0 -translate-y-1/2 w-[200px] aspect-square rounded-full blur-[150px]"></div>
        <div className="max-w-[1024px] w-full px-6 mx-auto mt-20">
          <h1 className="text-[#3559E0] font-extrabold text-4xl tracking-tighter text-center mt-20">
            Topup Pulsa & Internet
          </h1>
          <p className="text-center text-small tracking-tight text-[#3559E0]/70 font-bold mt-3">
            Udah murah tapi nggak borong. Yang bener aje, rugi dongggg...
          </p>
          <div className="grid grid-cols-5 gap-5 mt-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <OperatorCard key={index} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-zinc-400 mt-48 mb-10 text-sm">
        © 2024 PT. Pandai Karya Aplikasi
      </p>
    </div>
  );
}
