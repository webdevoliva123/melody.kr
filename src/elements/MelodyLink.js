import Link from "next/link";
import React from "react";

const MelodyLink = ({ label = "View All", url = "/", LType = 1, ...props }) => {
  const type = {
    1 : 'text-xs  text-primary cursor-pointer hover:text-accent',
    2 : 'text-xs  cursor-pointer text-accent'
  }
  return (
    <Link href={url}>
      <article className={`${type[LType]} ${props.custcss}`}>{label}</article>
    </Link>
  );
};

export default MelodyLink;
