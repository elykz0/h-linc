import Link from "next/link"

import {FaInstagram, FaTwitter, FaLinkedinIn,} from 'react-icons/fa'

const socials = [
    {icon: <FaInstagram />,path: "https://www.instagram.com/hlinc_/"},
    {icon: <FaTwitter />, path: "https://x.com/HLinc_"},
    {icon: <FaLinkedinIn />,path: "https://www.linkedin.com/company/h-linc/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3ByBdVRfT8TDSYrRwfwnHtDQ%3D%3D"},
    
]

const Social = ({containerStyles, iconStyles}) => {
    return (
      <div className={containerStyles}>
          {socials.map((item,index)=> {
              return (
              <Link key={index} href={item.path} className={iconStyles}>
                  {item.icon}
              </Link>)
          })}
      </div>
    )
  }
  
  export default Social