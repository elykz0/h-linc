import Link from "next/link"

const Contact = () => {
  return (
    <div className=" flex flex-col">
      <div className="text-center py-32">
              Have a Question?
      </div>
      <div className=" text-9xl text-center justify-between hover:text-amber-800">
              <Link href='mailto:HLinc.org@gmail.com'>
                CONTACT US!
              </Link>
          </div>
      </div>
  )
}

export default Contact