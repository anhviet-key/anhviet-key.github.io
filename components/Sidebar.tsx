import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { GoHome } from 'react-icons/go';
import { FaUserAstronaut } from 'react-icons/fa';
import { CiCircleList } from 'react-icons/ci';
import { MdHomeRepairService, MdMenu } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { CgCloseR } from 'react-icons/cg';

export default function Sidebar({ t }: any) {
  const router = useRouter();
  const refOne: any = useRef();
  const [show, setShow] = useState(true);
  const handleChangeBar = () => {
    refOne.current.classList.toggle('showbar');
    // refOne.current.classList.toggle('md:showbar');

    setShow(!show);
  };
  const handleChangeBarMB = () => {
    refOne.current.classList.toggle('showbarMobile');
    // refOne.current.classList.toggle('md:showbar');

    setShow(!show);
  };
  return (
    <>
      <div
        className="w-max h-max fixed top-1 z-50 left-1 lg:hidden"
        onClick={handleChangeBarMB}>
        {show ? (
          <MdMenu className="w-10 h-10" />
        ) : (
          <CgCloseR className="w-10 h-10" />
        )}
      </div>
      <div
        className="w-[14px] h-[100vh] z-[99999999999999] bg-[#f4f4fc] dark:bg-[#222222] dark:text-white dark:hover:morebtn shadows-r fixed left-0 top-0 items-center cursor-pointer hover:morebtn transition duration-500 hidden lg:flex"
        onClick={handleChangeBar}>
        {show ? <AiFillCaretLeft /> : <AiFillCaretRight />}
      </div>

      <nav
        className="lg:w-80 h-[100vh] hidden lg:flex flex-col p-16 shadows-r transition-all duration-600  "
        ref={refOne}>
        <div className="logo w-[100%] text-[40px] tracking-wider h-24 flex justify-center items-center">
          <span className="font-great text-[70px] mt-4">H</span>
          <span>ello</span>
        </div>
        <div className="mt-20 self-center">
          <ul className="ulItems">
            <Link href="/" className={router.pathname == '/' ? 'active' : ''}>
              <li>
                <i>
                  <GoHome className="w-5 h-4" />
                </i>
                <span>{t.Menu.home}</span>
              </li>
            </Link>
            <Link
              href="about"
              className={router.pathname == '/about' ? 'active' : ''}>
              <li>
                <i>
                  <FaUserAstronaut className="w-5 h-4" />
                </i>
                <span>{t.Menu.about}</span>
              </li>
            </Link>
            <Link
              href="services"
              className={router.pathname == '/services' ? 'active' : ''}>
              <li>
                <i>
                  <CiCircleList className="w-5 h-4" />
                </i>
                <span>{t.Menu.services}</span>
              </li>
            </Link>
            <Link
              href="portfolio"
              className={router.pathname == '/portfolio' ? 'active' : ''}>
              <li>
                <i>
                  <MdHomeRepairService className="w-5 h-4" />
                </i>
                <span>{t.Menu.portfolio}</span>
              </li>
            </Link>
            <Link
              href="contact"
              className={router.pathname == '/contact' ? 'active' : ''}>
              <li>
                <i>
                  <TiMessages className="w-5 h-4" />
                </i>
                <span>{t.Menu.contact}</span>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
