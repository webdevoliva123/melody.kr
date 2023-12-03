import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import { useRouter } from "next/router";

const Breadcrums = ({ pathCollection }) => {
  const router = useRouter();

  const navigateByPathName = (pathPosition) => {
    let genrateUrl = ''
    pathCollection?.map((path,idx) => {
        if(idx <= pathPosition){
            genrateUrl += `${path}${idx !== pathPosition ? '/' : ''}`
        }
    })
    router?.push(`/${genrateUrl}`)
  };
  return (
    <div className="mb-5 flex justify-start items-center gap-2">
      <div onClick={() => router?.push("/")}>
        <Heading
          label={"Melody"}
          htype={2}
          custcss="cursor-pointer hover:!text-accent"
        />
      </div>{" "}
      <article className="text-primary">/</article>
      {pathCollection?.map((path, idx) => {
        return (
          <div key={idx} className="flex justify-start items-center gap-2">
            <div onClick={() => navigateByPathName(idx)}>
              <Heading
                label={path}
                htype={2}
                custcss="!capitalize cursor-pointer hover:!text-accent"
              />
            </div>{" "}
            {pathCollection?.length - 1 !== idx && (
              <article className="text-primary">/</article>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrums;
