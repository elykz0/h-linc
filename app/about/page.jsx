"use client"
import Link from "next/link"
import Image from "next/image"
import TeamMem from "./teamMembers"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const about = () => {

  useEffect(() => {
    AOS.init({duration:1200})
  })

  return (
    <div className="h-full">
      {/*About US Section */}
      <div className="container text-center items-center font-bold text-5xl pb-20">
        About Us
      </div>
      <div className="container flex flex-col xl:flex-row justify-between text-center font-semilight text-xl pb-20" data-aos="fade-up">
        <p className="xl:pr-96 pl-1 pt-10 text-center font-semibold ">
        In 2024, HLinc was established with a profound purpose: to make the most of our finite time on Earth. An average person has only 77.5 years, or roughly 930 months, 3720 weeks, 26040 days, and 624960 hours to live. Time, once lost, is irreplaceable.
        </p>
        <Image
        src="/assets/photo1.png"
        alt="photo"
        width={400}
        height={400}
        className="pt-10 pl-10"
        />
      </div>
        <br />
      <div className="container flex flex-col xl:flex-row-reverse justify-between text-center font-semilight text-xl pb-20" data-aos="fade-up">
        <p className="xl:pl-96 pr-1 pt-1 text-center font-semibold">
        That's why at HLinc, we are dedicated to advancing knowledge and research to create a brighter future. Whether your passion lies in mathematics, sciences, engineering, or architecture, we welcome you as we work together toward a common goal: a better tomorrow.
        </p>
        <Image
        src="/assets/photo1.png"
        alt="photo"
        width={400}
        height={400}
        className="pt-10"
        />
      </div>
        <br />
      <div className="container flex flex-col xl:flex-row justify-between text-center font-semilight text-xl pb-20" data-aos="fade-up">
        <p className="xl:pr-96 pl-1 pt-10 text-center font-semibold">
        We recognize that the future is uncertain and financial stability or good health cannot always be guaranteed, we at Hlinc operate as a family. We support and guide disadvantaged students through high school, offering opportunities to expand their knowledge and choices through research and hands-on activities.
        </p>
        <Image
        src="/assets/photo1.png"
        alt="photo"
        width={400}
        height={400}
        className="pt-10"
        />
      </div>
        <br />
      <div className="container flex flex-col xl:flex-row justify-between text-center font-semilight text-xl pb-20" data-aos="fade-up">
        <p className="text-center items-center font-semibold pt-10 pb-10">
        Together, we strive to ensure that every student can make the most of their time and contribute meaningfully to a brighter future.
        </p>
      </div>
      <div>
      </div>
      {/* Team members section */}
      <div className="container text-center items-center font-bold text-5xl pb-10">
        Our Team
      </div>
      <div className="container flex flex-col xl:flex-row items-center" data-aos="fade-up">
        <TeamMem />
      </div>
      
    </div>
     
  )
}

export default about