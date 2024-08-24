import Image from "next/image"
import Link from "next/link"

const TeamMem = () => {
  return (
  <div className="rounded-lg overflow-hidden ">
            <div className="flex flex-col xl:items-left xl:flex-row items-center gap-20 pb-32 drop-shadow-2xl">
              {/*Hanson Kam */}
                <div className="box-border h-100 w-80 flex flex-col pb-10 bg-gray-200 hover:drop-shadow-2xl">
                  <Image 
                  src="/assets/hansonKam.png"
                  alt="HansonPic"
                  width={320}
                  height={100}
                   />
                  <h1 className="font-bold text-xl">
                    Hanson Kam
                  </h1>
                <span className="text-xl">
                  CEO & Co-Founder
                </span>
                <Link 
                href="mailto:bushoshoujom@gmail.com"
                className="text-cyan-600 underline">
                Contact</Link>
                </div>
                {/*Kyle Zhang */}
                <div className="box-border h-100 w-80 flex flex-col pb-10 bg-gray-200 hover:drop-shadow-2xl">
                <Image 
                  src="/assets/kyleZhang.png"
                  alt="KylePic"
                  width={320}
                  height={100}
                   />
                  <h1 className="font-bold text-xl">
                    Kyle Zhang
                  </h1>
                <span className="text-xl">
                  CTO & Co-Founder
                </span>
                <Link 
                href="mailto:kylez42908@gmail.com"
                className="text-cyan-600 underline">
                  Contact</Link>
                </div>
                {/* Christian Wang*/}
                <div className="box-border h-100 w-80 flex flex-col pb-10 bg-gray-200 hover:drop-shadow-2xl">
                <Image 
                  src="/assets/blackProfile.png"
                  alt="Pic"
                  width={320}
                  height={100}
                   />
                  <h1 className="font-bold text-xl">
                    Christian Wang
                  </h1>
                <span className="text-xl">
                  CMO & Creative Marketing Director
                </span>
                <Link 
                href="mailto:chrisw9264@gmail.com"
                className="text-cyan-600 underline">
                  Contact</Link>
                </div>   
            </div>
          </div>
  )
}

export default TeamMem