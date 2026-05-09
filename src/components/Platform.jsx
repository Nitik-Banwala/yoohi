"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { STATS } from "@/utils/helper";
export default function Platform() {
 const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.4,
 });
 return (
  <section
   ref={ref}
   className="relative px-4 overflow-hidden bg-[#eef0f2] py-20"
  >
   <div className="max-w-[861.1px] mx-auto text-center">
    <p className="text-dark uppercase tracking-wide text-base font-medium">
     Platform
    </p>

    <h2 className="text-custom-5xl font-normal text-black mt-2">
     Through <span className="font-semibold">Our Platform</span>
    </h2>

    <p className="text-black mt-4 text-base font-normal">
     We’ve helped out partners and patients achieve
    </p>
    <div className=" flex flex-row justify-center items-center flex-wrap gap-7 mt-15">
     {STATS.map((item, index) => (
      <div
       key={index}
       className="relative h-[207.1px] w-[268.1] rounded-sm flex flex-col items-center justify-center overflow-hidden"
       style={{
        backgroundImage: `url(${item.bg})`,
       }}
      >
       <h3 className="text-white text-6xl font-semibold leading-none">
        {inView && (
         <CountUp
          start={0}
          end={item.number}
          duration={2.5}
          suffix="%"
         />
        )}
       </h3>
       <p className="text-white text-xl whitespace-pre-line leading-150">
        {item.title}
       </p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}