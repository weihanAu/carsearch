import React from "react";

const HeaderLink =({className,text,href})=>{
  return (
    <a className={className} href={href} >{text}</a>
  )
}

export default HeaderLink;