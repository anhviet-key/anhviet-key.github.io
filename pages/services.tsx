import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
// import { FaMobileAlt } from 'react-icons/fa';
import { VscLightbulbAutofix } from 'react-icons/vsc';
import { SiWebpack } from 'react-icons/si';
import {
  MdOutlineDesignServices,
  MdWeb,
  MdOutlineSettingsSystemDaydream,
  MdMobileFriendly,
} from 'react-icons/md';

export default function Services({ t }: any) {
  return (
    <>
      <Head>
        <title>Profile - {t.Services.adress}</title>
      </Head>
      <main>
        <div className="mt-10">
          <div>
            <div>
              <h1 className="text-4xl font-bold">{t.Services.head}</h1>
              <div className="w-16 h-1 morebtn"></div>
              <div className="w-8 mt-[2px] h-1 morebtn"></div>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <div className="circle bg-[#fcfaff] dark:bg-[#222222] rounded-2xl relative border p-8 text-center min-h-[330px]">
                  <div className="">
                    <MdWeb className="text-4xl w-full mt-6" />
                  </div>
                  <div className="z-10">
                    <h3 className="text-2xl m-4 font-semibold">Web Design</h3>
                    <p>{t.Services.desOne}</p>
                  </div>
                </div>
                <div className="circle bg-[#fcfaff] dark:bg-[#222222] rounded-2xl relative border p-8 text-center min-h-[330px]">
                  <div className="">
                    <SiWebpack className="text-4xl w-full mt-6" />
                  </div>
                  <div className="z-10">
                    <h3 className="text-2xl m-4 font-semibold">
                      WebApp Design
                    </h3>
                    <p className="transition duration-100">
                      {t.Services.desTwo}
                    </p>
                  </div>
                </div>
                <div className="circle bg-[#fcfaff] dark:bg-[#222222] rounded-2xl relative border p-8 text-center min-h-[330px]">
                  <div className="">
                    <MdOutlineDesignServices className="text-4xl w-full mt-6" />
                  </div>
                  <div className="z-10">
                    <h3 className="text-2xl m-4 font-semibold">UX Design</h3>
                    <p>{t.Services.desThree}</p>
                  </div>
                </div>
                <div className="circle bg-[#fcfaff] dark:bg-[#222222] rounded-2xl relative border p-8 text-center min-h-[330px]">
                  <div className="">
                    <MdMobileFriendly className="text-4xl w-full mt-6" />
                  </div>
                  <div className="z-10">
                    <h3 className="text-2xl m-4 font-semibold">
                      MobileApp Design
                    </h3>
                    <p>{t.Services.desFour}</p>
                  </div>
                </div>
                <div className="circle bg-[#fcfaff] dark:bg-[#222222] rounded-2xl relative border p-8 text-center min-h-[330px]">
                  <div className="">
                    <VscLightbulbAutofix className="text-4xl w-full mt-6" />
                  </div>
                  <div className="z-10">
                    <h3 className="text-2xl m-4 font-semibold">Seo</h3>
                    <p>{t.Services.desFive}</p>
                  </div>
                </div>
                <div className="circle bg-[#fcfaff] dark:bg-[#222222] rounded-2xl relative border p-8 text-center min-h-[330px]">
                  <div className="">
                    <MdOutlineSettingsSystemDaydream className="text-4xl w-full mt-6" />
                  </div>
                  <div className="z-10">
                    <h3 className="text-2xl m-4 font-semibold">Backend</h3>
                    <p>{t.Services.desSix}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
