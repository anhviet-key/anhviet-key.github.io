import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import NextJs from '../public/images/next-js.png';
import TypeScript from '../public/images//typescript-icon.png';
import Redux from '../public/images/redux-icon.png';
import Sass from '../public/images/sass-icon.png';
import Bootsrap from '../public/images/bootstrap-icon.png';
import TailWind from '../public/images/tailwind-icon.png';
import MySql from '../public/images/mysql-icon.png';
import MoongoDB from '../public/images/moongo-icon.png';
import Golang from '../public/images/go-icon.png';
import Express from '../public/images/express.png';
import { BsFillArrowDownCircleFill, BsDownload } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import Link from 'next/link';
import { useSpring, animated } from '@react-spring/web';

function Number({ n }: any) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, fricton: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0) + '%')}</animated.div>;
}

export default function about({ t }: any) {
  return (
    <>
      <Head>
        <title>Profile - {t.About.adress}</title>
      </Head>
      <main>
        <div className="mt-10 2xl:h-[100vh]">
          <div>
            <h1 className="text-4xl font-bold">{t.About.head}</h1>
            <div className="w-16 h-1 morebtn"></div>
            <div className="w-8 mt-[2px] h-1 morebtn"></div>
          </div>
          <div className="mt-10">
            <h1 className="text-3xl font-bold leading-[2]">
              <div>
                {t.About.heading}
                <b className="color-items"> {t.About.job}</b>
              </div>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {t.About.description}
            </p>
          </div>
          <div className="mt-10 flex flex-col lg:flex-row">
            <div className="text-gray-600 dark:text-slate-400 md:w-[50%] 2xl:w-[60%] flex text-lg gap-x-20 flex-wrap leading-10">
              <div className="listInf dark:text-slate-400">
                <div>
                  <span>Birthday : </span>
                  08 Apr 2001
                </div>
                <div>
                  <span>Github : </span>
                  <a target="blank" href="https://github.com/anhviet-key">
                    https://github.com/anhviet-key
                  </a>
                </div>
                <div>
                  <span>Degree : </span>
                  CS
                </div>
                <div>
                  <span>City : </span>
                  Quang Ngai
                </div>
              </div>
              <div className="listInf">
                <div>
                  <span>FaceBook : </span>
                  <a target="blank" href="www.fb.nguyen|anh|viet">
                    www.fb.nguyen|anh|viet
                  </a>
                </div>
                <div>
                  <span>Email : </span>
                  <a target="blank" href="mailto:nhviet.key@gmail.com">
                    anhviet.key@gmail.com
                  </a>
                </div>
                <div>
                  <span>Phone : </span>
                  <a target="blank" href="tel:0349423372<">
                    (+84) 349423372
                  </a>
                </div>
                <div>
                  <span>Freelance : </span>
                  Avaliable
                </div>
                <div className="border-none">
                  <Link
                    href="/Nguyễn Anh Việt - Fresher Frontend Developer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download>
                    <div className="morebtn flex items-center gap-4 active:translate-y-0.5 morebtn font-semibold py-2 px-10 w-max rounded-full mt-20 text-white cursor-pointer">
                      <BsDownload />
                      {t.About.button}
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 lg:w-[50%] 2xl:w-[40%] w-full h-[300px] font-medium flex relative">
              <div className="w-14 lg:w-14 h-[100%] flex justify-center items-center writtingMode bg-[#fcfaff] dark:text-black shadow-lg tracking-[20px] text-3xl font-medium">
                {t.About.skills}
              </div>
              <div className="w-[80%] absolute right-0 2xl:right-12">
                <div>
                  <div className="w-full flex justify-between">
                    <span>HTML/CSS</span>
                    <span>80%</span>
                  </div>
                  <div className="w-[100%] h-2 rounded-lg mt-2 relative bg-slate-400">
                    <i className="absolute w-[80%] h-full morebtn rounded-lg"></i>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="w-full flex justify-between">
                    <span>JAVASCRIPT</span>
                    <span> 70%</span>
                  </div>
                  <div className="w-[100%] h-2 rounded-lg mt-2 relative bg-slate-400">
                    <i className="absolute w-[70%] h-full morebtn rounded-lg"></i>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="w-full flex justify-between">
                    <span>REACTJS</span>
                    <span> 65%</span>
                  </div>
                  <div className="w-[100%] h-2 rounded-lg mt-2 relative bg-slate-400">
                    <i className="absolute w-[65%] h-full morebtn rounded-lg"></i>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="w-full flex justify-between">
                    <span>VUEJS</span>
                    <span> 50%</span>
                  </div>
                  <div className="w-[100%] h-2 rounded-lg mt-2 relative bg-slate-400">
                    <i className="absolute w-[50%] h-full morebtn rounded-lg"></i>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="w-full flex justify-between">
                    <span>NODEJS</span>
                    <span>65%</span>
                  </div>
                  <div className="w-[100%] h-2 rounded-lg mt-2 relative bg-slate-400">
                    <i className="absolute w-[65%] h-full morebtn rounded-lg"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl font-semibold">{t.About.otherSkills}</h1>
            <div className="listSkill dark:text-black cursor-pointer flex gap-10 justify-center flex-wrap mt-6">
              <span className="border-black">
                <i className="w-[30px]">
                  <Image src={NextJs} alt="not found" />
                </i>
                <b>#NextJs</b>
              </span>
              <span className="border-[#0078CF]">
                <i className="w-[30px]">
                  <Image src={TypeScript} alt="not found" />
                </i>
                <b>#TypeScript</b>
              </span>
              <span className="border-[#7649BD]">
                <i className="w-[30px]">
                  <Image src={Redux} alt="not found" />
                </i>
                <b>#Redux</b>
              </span>
              <span className="border-[#BE608B]">
                <i className="w-[30px]">
                  <Image src={Sass} alt="not found" />
                </i>
                <b>#Sass</b>
              </span>
              <span className="border-[#563D7C]">
                <i className="w-[30px]">
                  <Image src={Bootsrap} alt="not found" />
                </i>
                <b>#Bootsrap</b>
              </span>
              <span className="border-[#AB33B7]">
                <i className="w-[30px]">
                  <Image src={TailWind} alt="not found" />
                </i>
                <b>#Tailwind</b>
              </span>
              <span className="border-[#FFA600]">
                <i className="w-[30px]">
                  <Image src={MySql} alt="not found" />
                </i>
                <b>#MySql</b>
              </span>
              <span className="border-[#69AD5F]">
                <i className="w-[30px]">
                  <Image src={MoongoDB} alt="not found" />
                </i>
                <b>#MoongoDB</b>
              </span>
              <span className="border-[#22C1B5]">
                <i className="w-[30px]">
                  <Image src={Golang} alt="not found" />
                </i>
                <b>#Golang</b>
              </span>
              <span className="border-[#393939]">
                <i className="w-[30px]">
                  <Image src={Express} alt="not found" />
                </i>
                <b>#Express</b>
              </span>
            </div>
          </div>
          <Link href="#more">
            <div className="my-20 w-full flex justify-center sticky bottom-0">
              <BsFillArrowDownCircleFill className="text-4xl text-[#18212F] dark:text-white animate-bounce cursor-pointer" />
            </div>
          </Link>
        </div>
        <div id="more">
          <div className="flex flex-col xl:flex-row gap-10">
            <div className="xl:flex-1">
              <h1 className="text-2xl font-semibold">{t.About.education}</h1>
              <div className="flex h-[calc(100%-3.5rem)] gap-8 mt-6 bg-[#fcfaff] dark:bg-[#222222] rounded-2xl shadow-lg p-8">
                <div className="writing"></div>
                <div className="dotted">
                  <div>
                    <b className="flex circles items-center h-3">
                      <i className="mr-2 font-special">
                        <SlCalender />
                      </i>
                      2019 - 2022
                    </b>
                    <h3 className="text-lg font-semibold my-3">
                      {t.About.eduOne}
                    </h3>
                    <p>{t.About.eduDesOne}</p>
                  </div>
                  <div className="mt-10">
                    <b className="flex circles items-center h-3">
                      <i className="mr-2 font-special">
                        <SlCalender />
                      </i>
                      2016 - 2019
                    </b>
                    <h3 className="text-lg font-semibold my-3">
                      {t.About.eduTwo}
                    </h3>
                    <p>{t.About.eduDesTwo}</p>
                  </div>
                  <div className="mt-10">
                    <b className="flex circles items-center h-3">
                      <i className="mr-2 font-special">
                        <SlCalender />
                      </i>
                      2013 - 2016
                    </b>
                    <h3 className="text-lg font-semibold my-3">
                      {t.About.eduThree}
                    </h3>
                    <p>{t.About.eduDesThree}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:flex-1">
              <h1 className="text-2xl font-semibold">{t.About.experience}</h1>
              <div className="flex h-[calc(100%-3.5rem)] gap-8 mt-6 bg-[#fcfaff] dark:bg-[#222222] rounded-2xl shadow-lg p-8">
                <div className="writing"></div>
                <div className="dotted">
                  <div>
                    <b className="flex circles items-center h-3">
                      <i className="mr-2 font-special">
                        <SlCalender />
                      </i>
                      2021 - 2022
                    </b>
                    <h3 className="text-lg font-semibold my-3">
                      {t.About.eduFour}
                    </h3>
                    <i>
                      {t.About.nameFour}
                    </i>
                    <ul className='flex flex-col gap-2 mt-2 list-disc'>
                      <li>{t.About.eduDesFourMisson}</li>
                      <li>{t.About.eduDesFourLangue}</li>
                      <li>{t.About.databaseFour}</li>
                    </ul>
                  </div>
                  <div className="mt-10">
                    <b className="flex circles items-center h-3">
                      <i className="mr-2 font-special">
                        <SlCalender />
                      </i>
                      2021 - 2022
                    </b>
                    <h3 className="text-lg font-semibold my-3">
                      {t.About.eduFive}
                    </h3>
                    <i>
                      {t.About.nameFive}
                    </i>
                    <ul className='flex flex-col gap-2 mt-2 list-disc'>
                      <li>{t.About.eduDesFiveMisson}</li>
                      <li>{t.About.eduDesFiveLangue}</li>
                      <li>{t.About.databaseFive}</li>
                    </ul>
                  </div>
                  <div className="mt-10">
                    <b className="flex circles items-center h-3">
                      <i className="mr-2 font-special">
                        <SlCalender />
                      </i>
                      2021 - 2021
                    </b>
                    <h3 className="text-lg font-semibold my-3">
                      {t.About.eduSix}
                    </h3>
                    <i>
                      {t.About.nameSix}
                    </i>
                    <ul className='flex flex-col gap-2 mt-2 list-disc'>
                      <li>{t.About.eduDesSixMisson}</li>
                      <li>{t.About.eduDesSixLangue}</li>
                      <li>{t.About.databaseSix}</li>
                    </ul>
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
