"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Social from "@/components/Social";
import Link from "next/link";


export default function Home() {
  return ( 
    <> 
    {/* <div style={{
      zIndex:-1, 
      position:"absolute",
      width: "100vw",
      height: "100vh"
    }}>
    <Image 
    src="/assets/photo1.png"
    alt="photo"
    layout="fill"
    objectFit="cover"
    className="blur"
    />
    </div> */}
    <section className="h-full">
      <div className="container mx-auto h-full pb-20">
        <div className="flex flex-col items-center justify-between">
          <div className="text-center pt-40 pb-80 xl:pt-40 xl:pb-40 font-medium text-slate-600">
            <span className="text-2xl font-extralight">We Are</span> 
            <br /> 
            <span className="text-8xl xl:text-9xl text-teal-300 font-bold">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'H',
                  200, // wait 1s before replacing "Mice" with "Hamsters"
                  'H-',
                  200,
                  'H-L',
                  200,
                  'H-Li',
                  200,
                  'H-Lin',
                  200,
                  'H-Linc',
                  3000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
            </span>
          </div>
          {/*Social Medias */}
          <div className="mb-8 xl:mb-0">
              <Social 
              containerStyles= "flex gap-6" 
              iconStyles="w-9 h-9 border border-blue-400 rounded-full flex justify-center 
              items-center text-primary text-base hover:bg-white hover:text-primary 
              hover:translation-all duration-500" />
          </div>
        </div>
        <div className="container flex flex-col xl:flex-row items-center justify-between bg-transparent pt-10">
          <div className="pr-10 text-3xl border-b-2 pb-10">
            {/*what the flip */}
            <p className="font-light">
              {/* <span className="pl-60 ">We help </span> <br/> <span><span className="font-bold">disadvantaged teens</span> through school</span> <br/> <span className="pl-40 pb-10">by allowing them to</span> <br/> <span className="pl-32">expand their knowledge</span> <br/> and their choices through <span className="font-bold">research</span> <br/> <span className="pl-20"> and <span className="font-bold">hands-on activities</span>.</span> */}
              We help disadvantaged teens through school by allowing them to expand their knowledge and their choices through research and hands-on activities.

            </p>
            
          </div>
          <Image 
          src="/assets/photo1.png" 
          alt="Hello world" 
          width={400} 
          height={400}
          className="pt-10 " 
          />
        </div>
         {/* Google Form Limited Time */}
         <div className= "pt-10 text-center text-3xl font-semibold">
            Hlinc Program 
        </div>
        <div className="pt-10 font-light text-xl">
        During club hours, organization members will help you pursue a project, which is a choice between a passion project, group project, or research paper. If you are remote or there is not a club in your area, we will reach out to professors to guide you through your project/paper.
        </div>
        {/* Sign up Button */}
        <div className="items-center pl-48 xl:pl-96 pt-10">
           <div className="w-52 xl:w-96 h-16 border border-blue-400 rounded-full flex justify-center 
              items-center text-primary text-base hover:bg-white hover:text-primary 
              hover:translation-all duration-500">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfKiHsVHEjiBZBJrANiT0ynQsggGRlMfVB-3Amo9B5xCdngoQ/viewform"
                className = "font-semibold text-xl">
                Sign up Now!</Link>

        </div>
        </div>

      </div>
    </section>
    
    </>
  );
}
