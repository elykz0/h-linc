"use client"
import Link from "next/link"
import Image from "next/image"

import {Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription} from '@/components/ui/sheet'
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

const Branches = () => {
  const pathname = usePathname()

  useEffect(() => {
    AOS.init({duration:1200})
  })

  return (
    <div className="container items-center">
      <div className="items-center text-3xl justify-between ">
          {/*Branches */}
          <div className="text-center font-bold text-4xl pb-20">
              Branches
          </div>
          <div className="rounded-lg overflow-hidden ">
            <div className="flex flex-col xl:items-left xl:flex-row items-center gap-20 pb-10 drop-shadow-2xl">
              {/*Stuy */}
                <div className="box-border h-80 w-80 flex flex-col pb-10 bg-gray-200 hover:drop-shadow-2xl" data-aos="fade-up">
                <Sheet>
                  <SheetTrigger>
                  <Image 
                  src="/assets/stuy.png"
                  alt="StuyPic"
                  width={320}
                  height={100}
                   />
                  Stuyvesant
                </SheetTrigger>
                <SheetContent className="w-full pt-20">
                  <SheetTitle className="text-center text-2xl pb-10">Stuyvesant High School</SheetTitle>
                    <div className="object-cover">
                    <Image 
                      src="/assets/stuy.png"
                      alt="StuyPic"
                      width={320}
                      height={100}
                      className=""
                      />
                    </div>
                  <SheetDescription className="flex flex-col justify-center items-center gap-1 pt-3">
                      <span>Description</span> <hr/>
                      <p className="pb-1">Stuyvesant, a specialized high school in Manhattan, NY, was the second official branch of HLinc. Stuyvesant is well known for holding very high standards for all its students, and that applies to this club too. We strive to ignite and fuel student passions as much as possible so that they can become something greater than they ever imagined. At Stuyvesant, we work together to achieve the unachievable </p>
                  </SheetDescription>
                </SheetContent>
                </Sheet>
                </div>
                {/*QHSS */}
                <div className="box-border h-80 w-80 flex flex-col pb-10 bg-gray-200 hover:drop-shadow-2xl" data-aos="fade-up">
                <Sheet >
                <SheetTrigger>
                  <Image 
                  src="/assets/Qhss.png"
                  alt="QhssPic"
                  width={320}
                  height={200}
                   />
                  Qhss
                </SheetTrigger>
                <SheetContent className="w-full pt-16">
                  <SheetTitle className="text-center text-2xl pb-10">Queens High School for the Sciences at York College</SheetTitle>
                    <div className="object-cover">
                    <Image 
                      src="/assets/Qhss.png"
                      alt="QhssPic"
                      width={320}
                      height={100}
                      />
                    </div>
                  <SheetDescription className="flex flex-col justify-center items-center gap-1 pt-3">
                      <span>Description</span> <hr/>
                      <p className="pb-1">QHSS, a specialized high school located in Jamiaca, NY, was the first offical branch of HLinc. Here at QHSS, we collaborate alongside the other branches to strive for a better tomorrow. We have help from teachers, professors and our peers in order to maximize our efficiency and passion for the cause. At QHSS, we work not only as a team but as a family, </p>
                      <p className="font-semibold">”There is power in unity, and there is power in numbers.” - Martin Luther King Jr.</p>
                  
                  </SheetDescription>
                </SheetContent>
                </Sheet>
                </div>
                {/*B Latin */}
                <div className="box-border h-80 w-80 flex flex-col pb-10 bg-gray-200 hover:drop-shadow-2xl" data-aos="fade-up">
                <Sheet>
                <SheetTrigger>
                <Image 
                  src="/assets/Blatin.png"
                  alt="BlatinPic"
                  width={320}
                  height={100}
                   />
                  Brooklyn Latin
                </SheetTrigger>
                <SheetContent className="w-full pt-20">
                  <SheetTitle className="text-center text-2xl pb-10">Brooklyn Latin HS</SheetTitle>
                    <div className="object-cover">
                    <Image 
                      src="/assets/Blatin.png"
                      alt="BlatinPic"
                      width={320}
                      height={100}
                      />
                    </div>
                  <SheetDescription className="flex flex-col justify-center items-center gap-8 pt-10">
                      Hello
                  </SheetDescription>
                </SheetContent>
                </Sheet>
                </div>
                
            </div>
            <div className="flex flex-col xl:items-left xl:flex-row items-center gap-20 pb-10 drop-shadow-2xl">
              {/*Benzie Central */}
                <div className="box-border h-80 w-80 flex flex-col pb-10 bg-gray-200 hover:drop-shadow-2xl" data-aos="fade-up">
                <Sheet>
                <SheetTrigger>
                <Image 
                  src="/assets/benzieCentral.png"
                  alt="benizeCentralPic"
                  width={320}
                  height={100}
                   />
                Benzie Central
                </SheetTrigger>
                <SheetContent className="w-full pt-20">
                  <SheetTitle className="text-center text-2xl pb-10">Benzie Central HS</SheetTitle>
                    <div className="object-cover">
                    <Image 
                      src="/assets/benzieCentral.png"
                      alt="benzieCentralPic"
                      width={320}
                      height={100}
                      />
                    </div>
                  <SheetDescription className="flex flex-col justify-center items-center gap-8 pt-10">
                      Hello
                  </SheetDescription>
                </SheetContent>
                </Sheet>
                </div>
                {/*Portola */}
                <div className="box-border h-80 w-80 flex flex-col pb-10 bg-gray-200 hover:drop-shadow-2xl" data-aos="fade-up">
                <Sheet>
                <SheetTrigger>
                <Image 
                  src="/assets/Portola.png"
                  alt="PortolaPic"
                  width={320}
                  height={100}
                   />
                Portola
                </SheetTrigger>
                <SheetContent className="w-full pt-10">
                  <SheetTitle className="text-center text-2xl pb-5">Portola HS</SheetTitle>
                    <div className="object-cover">
                    <Image 
                      src="/assets/Portola.png"
                      alt="PortolaPic"
                      width={320}
                      height={100}
                      />
                    </div>
                  <SheetDescription className="flex flex-col justify-center items-center gap-1 pt-5">
                      <span>Description</span>  <hr/>
                      <p className="pb-1">Portola High School, a premier educational institution in Irvine, CA, proudly serves as a cornerstone of academic excellence within the community. As an integral part of the Irvine Unified School District, we work collaboratively with our sister schools to foster a brighter future. At Portola High, we are supported by dedicated educators, driven peers, and a dynamic curriculum designed to inspire and elevate every student. We thrive not only as a team but as a unified family, committed to achieving greatness together.</p>
                      <p className="font-semibold">“Education is the most powerful weapon which you can use to change the world.” - Nelson Mandela</p>
                  </SheetDescription>
                </SheetContent>
                </Sheet>
                </div>
                {/*Bronx Science */}
                <div className="box-border h-80 w-80 flex flex-col pb-10 bg-gray-200 hover:drop-shadow-2xl" data-aos="fade-up">
                <Sheet  >
                <SheetTrigger>
                <Image 
                  src="/assets/bronxScience.png"
                  alt="bronxSciencePic"
                  width={320}
                  height={100}
                   />
                  Bronx Science
                  </SheetTrigger>
                  <SheetContent className="w-full pt-20">
                  <SheetTitle className="text-center text-2xl pb-10">Bronx High School of Science</SheetTitle>
                    <div className="object-cover">
                    <Image 
                      src="/assets/bronxScience.png"
                      alt="bronxSciencePic"
                      width={320}
                      height={100}
                      />
                    </div>
                  <SheetDescription className="flex flex-col justify-center items-center gap-1 pt-3">
                      <span>Description</span> <hr/>
                      <p className="pb-1">Bronx Science is a specialized high school known for its exceptional education and extracurricular activities for all students.  This applies also to the Bronx Science branch of HLinc. We seek to assist and direct students so that they can achieve what was once thought to be impossible. </p>
                  </SheetDescription>
                </SheetContent>
                </Sheet>
                </div>
            </div>
            <div className="pt-20 pb-20 text-center">
                  Upcoming...
            </div>
            <div className="flex flex-col xl:items-left xl:flex-row items-center gap-20 pb-10 drop-shadow-2xl">
              {/*Cardozo HS */}
                <div className="box-border h-80 w-80 flex flex-col pb-10 bg-gray-200 hover:drop-shadow-2xl" data-aos="fade-up">
                <Sheet>
                <SheetTrigger>
                <Image 
                  src="/assets/cardozo.png"
                  alt="cardozoPic"
                  width={320}
                  height={100}
                   />
                Benjamin N. Cardozo
                </SheetTrigger>
                <SheetContent className="w-full pt-20">
                  <SheetTitle className="text-center text-2xl pb-10">Benjamin N. Cardozo High School </SheetTitle>
                    <div className="object-cover">
                    <Image 
                      src="/assets/cardozo.png"
                      alt="cardozoPic"
                      width={320}
                      height={100}
                      />
                    </div>
                  <SheetDescription className="flex flex-col justify-center items-center gap-8 pt-10">
                      Description
                  </SheetDescription>
                </SheetContent>
                </Sheet>
                </div>
                {/*Bayside HS */}
                <div className="box-border h-80 w-80 flex flex-col pb-10 bg-gray-200 hover:drop-shadow-2xl" data-aos="fade-up">
                <Sheet>
                <SheetTrigger>
                <Image 
                  src="/assets/bayside.png"
                  alt="baysidePic"
                  width={320}
                  height={100}
                   />
                Bayside HS
                </SheetTrigger>
                <SheetContent className="w-full pt-10">
                  <SheetTitle className="text-center text-2xl pb-5">Bayside High School</SheetTitle>
                    <div className="object-cover">
                    <Image 
                      src="/assets/bayside.png"
                      alt="baysidePic"
                      width={320}
                      height={100}
                      />
                    </div>
                  <SheetDescription className="flex flex-col justify-center items-center gap-1 pt-5">
                      <span>Description</span>  <hr/>
                  </SheetDescription>
                </SheetContent>
                </Sheet>
                </div>
                {/*Yonkers HS */}
                <div className="box-border h-80 w-80 flex flex-col pb-10 bg-gray-200 hover:drop-shadow-2xl" data-aos="fade-up">
                <Sheet  >
                <SheetTrigger>
                <Image 
                  src="/assets/yonkers.png"
                  alt="yonkersPic"
                  width={320}
                  height={100}
                   />
                  Yonkers HS 
                  </SheetTrigger>
                  <SheetContent className="w-full pt-20">
                  <SheetTitle className="text-center text-2xl pb-10">Yonkers Middle High School</SheetTitle>
                    <div className="object-cover">
                    <Image 
                      src="/assets/yonkers.png"
                      alt="yonkersPic"
                      width={320}
                      height={100}
                      />
                    </div>
                  <SheetDescription className="flex flex-col justify-center items-center gap-1 pt-3">
                      <span>Description</span> <hr/>
                  </SheetDescription>
                </SheetContent>
                </Sheet>
                </div>
            </div>
          </div> 
      </div>
    </div>
  )
}

export default Branches