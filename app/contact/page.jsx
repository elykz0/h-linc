import Link from "next/link"

const Contact = () => {
  return (
    <div className=" flex flex-col">
      <div className="text-center py-24">
              Have a Question?
      </div>
      <div className=" text-9xl text-center justify-between hover:text-amber-800">
              <Link href='mailto:HLinc.org@gmail.com'>
                CONTACT US
              </Link>
      </div>
      <div className="flex flex-col">
          <div className="text-center pt-52 pb-10">
              Not Sending? Try emailing 
              <p className="font-bold text-2xl"> Hlinc.org@gmail.com</p>
          </div>
      </div>
    </div>
  )
}

export default Contact