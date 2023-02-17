import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import ImgTop from '../public/images/top-icon.png';
import { useRouter } from 'next/router';
import { LANG_DROPDOWN } from './data';
import { En, Vi } from '../translation';
// import useDarkMode from './useDarkMode';
type Props = {};

export default function Setting({ data }: any) {
  const router = useRouter();
  const { locale, locales, push } = router;
  const current = router.pathname;
  // console.log(router);
  const t = locale === 'en' ? En : Vi;
  const [scrollY, setScrollY] = useState(false);
  const [istrue, setIstrue] = useState(false);
  const [isDarkMode, toggleDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark';
    }
  });
  // useEffect(() => {
  //   document.addEventListener('contextmenu', (e) => {
  //     e.preventDefault();
  //   });
  // });
  useEffect(() => {
    if (isDarkMode) {
      window.document.documentElement.classList.remove('light');
      window.document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      window.document.documentElement.classList.remove('dark');
      window.document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  const handleSet = () => {
    toggleDarkMode(!isDarkMode);
    setIstrue(!istrue);
  };

  const [color, setColor] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('colors') ?? '#ff4337';
    } else {
      return '#ff4337';
    }
  });
  const refTwo: any = useRef();
  const refThree: any = useRef();
  useEffect(() => {
    document.documentElement.style.setProperty('--color-items', color);
    localStorage.setItem('colors', color);
  }, [color]);

  useEffect(() => {
    data.current.addEventListener('scroll', () => {
      // console.log(data.current.scrollTop);
      if (data.current.scrollTop > 100) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    });
  });
  const scrollUp = () => {
    data.current.scrollTo({
      top: 0,
    });
  };
  const handleSettings = () => {
    refTwo.current.classList.toggle('mright');
    refThree.current.classList.remove('mtop');
  };
  const handleLanguage = () => {
    refThree.current.classList.toggle('mtop');
    refTwo.current.classList.remove('mright');
  };
  const ChangeColor = (Color: string) => {
    setColor(Color);
    refTwo.current.classList.remove('mright');
  };
  const handleLangageToggle = (value: any, sound: any) => {
    const audio = new Audio();
    audio.src = `${sound}`;
    audio.play();
    switch (value) {
      case 'en':
        router.push(`${current}`, `${current}`, { locale: 'en' });
        refThree.current.classList.remove('mtop');
        break;
      case 'vi':
        router.push(`${current}`, `${current}`, { locale: 'vi' });
        refThree.current.classList.remove('mtop');
        break;
      default:
    }
  };
  return (
    <>
      <div
        className="card fixed top-[10%] right-[-10rem] z-50 transition-all duration-150 flex "
        ref={refTwo}>
        <div className="h-20 flex flex-col justify-between mr-4 cursor-pointer ">
          <div className="hv" onClick={handleSettings}>
            <AiFillSetting className="w-8 h-8 p-1 bg-[#fcfaff] dark:bg-[#222222] dark:text-white dark:border-2 dark:border-dark shadow-lg rounded-full " />
          </div>
          <div className="hv2">
            {istrue ? (
              <div>
                <BsSunFill
                  className="w-8 h-8 p-1 bg-[#fcfaff] dark:bg-[#222222] dark:text-white dark:border-2 dark:border-dark shadow-lg rounded-full"
                  onClick={handleSet}
                />
              </div>
            ) : (
              <div>
                <BsFillMoonStarsFill
                  className="w-8 h-8 p-1 bg-[#fcfaff] dark:bg-[#222222] dark:text-white dark:border-2 dark:border-dark shadow-lg rounded-full"
                  onClick={handleSet}
                />
              </div>
            )}
          </div>
        </div>
        <div className="bg-[#fcfaff] dark:bg-[#222222] dark:text-white dark:border-2 dark:border-dark h-20 shadow-lg z-50 rounded-lg flex flex-col p-2 justify-between">
          <div className="text-center">Theme colors</div>
          <div className="flex gap-1 cursor-pointer ">
            <div
              className="color-root item-color bg-[#ff4337]"
              onClick={() => ChangeColor('#ff4337')}></div>
            <div
              className="color-root item-color bg-[#fe7007]"
              onClick={() => ChangeColor('#fe7007')}></div>
            <div
              className="color-root item-color bg-[#249581]"
              onClick={() => ChangeColor('#249581')}></div>
            <div
              className="color-root item-color bg-[#0d51b4]"
              onClick={() => ChangeColor('#0d51b4')}></div>
            <div
              className="color-root item-color bg-[#ff57b6]"
              onClick={() => ChangeColor('#ff57b6')}></div>
          </div>
        </div>
      </div>
      <div
        onClick={handleLanguage}
        className="morebtn language w-14 h-14 rounded-full fixed top-[-18px] right-[-18px] z-50 cursor-pointer flex justify-center font-bold items-center shadow-lg">
        <span className="mr-4 mt-2 dark:text-white capitalize">{locale}</span>
      </div>
      <div
        ref={refThree}
        className="fixed top-[-5rem] right-14 z-50 cursor-pointer shadow-lg bg-[#fcfaff] dark:bg-[#222222] dark:text-white dark:border-2 dark:border-dark p-1 transition-all duration-150">
        {LANG_DROPDOWN.map((lang, i) => {
          return (
            <div key={i}>
              {lang.value !== locale && (
                <div
                  className="p-1 hover:morebtn"
                  onClick={() => handleLangageToggle(lang.value, lang.sound)}>
                  {lang.flag} {lang.label}
                </div>
              )}
              <hr />
            </div>
          );
        })}
      </div>
      <div className="overlay" onClick={handleSettings}></div>
      <div className="overlay2" onClick={handleLanguage}></div>

      {scrollY && (
        <div
          className="fixed right-4 bottom-4 z-20 w-14 cursor-pointer transition duration-150 hover:scale-110"
          onClick={scrollUp}>
          <Image src={ImgTop} alt="not found" />
        </div>
      )}

      {/* {isDarkMode && (
        <div className="mainContent md:block hidden fixed z-10 h-0 bottom-[30vh] right-16 mr-4 cursor-pointer">
          <div className="buble">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <a href=""></a>
          </div>
          <div className="buble">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="buble">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="buble">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )} */}
    </>
  );
}
