import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import ImgAdmin from '../public/admin/avatar.png';
import ImgLink from '../public/images/link.png';
// import ImgHook from '../public/images/gif/giphy.gif';
import { CiSquareRemove } from 'react-icons/ci';

export const CardToggle = ({ setOpen, item }: any) => {
  const handleOverlay = () => {
    setOpen(false);
  };
  return (
    <div className="">
      <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>
      <div className="pyro2">
        <div className="before"></div>
        <div className="after"></div>
      </div>
      <div className="cOverlay z-50" onClick={handleOverlay}></div>
      <div className="cRope w-1 h-[90px] z-50"></div>
      <div className="cCardToggle p-12 bg-white">
        <div className="cCard z-50">
          <div className="flex gap-10">
            <div className="cImage flex-1">
              <div className="relative">
                {/* <video autoPlay loop muted className="border-4 z-[9999] w-full h-full">
                  <source
                    src={item.gif}
                  />
                </video> */}

                <Image
                  className="border-4 z-[9999]"
                  src={item.gif}
                  alt="not found"
                  // width={500}
                  // height={400}
                  width={376}
                  height={250}
                  layout="fixed"
                />
                <div className="absolute top-0 right-[-2.5rem] z-[999]">
                  <a href={item.link}>
                    <Image
                      src={ImgLink}
                      alt="not found"
                      width={50}
                      height={50}
                      // width={376}
                      // height={190}
                      layout="fixed"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="cInfo flex-1">
              <div className="cItem1">
                <h3>Programming Languages</h3>
                <ul className="cInfoUl">
                  {item.languages.map((lang: any, i: any) => (
                    <li key={i}>{lang}</li>
                  ))}
                </ul>
              </div>
              <div className="cItem2 mt-4">
                <h3>Main functions</h3>
                <ul className="cInfoUl">
                  {item.functions.map((lang: any, i: any) => (
                    <li key={i}>{lang}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="cMission mt-4">
            <h3>Mission</h3>
            <p>{`" ${item.name} " - ${item.misson}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
