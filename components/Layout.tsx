import React, { useEffect, useRef, useState } from 'react';
import Setting from './Setting';
import Sidebar from './Sidebar';
import { En, Vi } from '../translation';
import { useRouter } from 'next/router';
import { useInView } from 'framer-motion';

export default function Layout({ children }: any) {
  const router = useRouter();
  const { locale, locales, push } = router;
  const t: any = locale === 'en' ? En : Vi;
  const refOne: any = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
      <div className="h-[100vh] font-poppins">
        <div className="flex">
          <div className="bg-[#fcfaff] dark:bg-[#222222] dark:text-white">
            <Sidebar t={t} />
          </div>
          <div
            ref={refOne}
            className="w-[100%] h-[100vh] p-10 bg-[#f4f4fc] dark:bg-[#151515] dark:text-white z-10 transition duration-500 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
      <Setting data={refOne} />
    </section>
  );
}
