import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import ImgAdmin from '../public/admin/avatar.png';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ t }: any) {
  return (
    <section>
      <Head>
        <title>Profile - {t.Home.adress}</title>
      </Head>
      <main className="w-[100%] mt-20 sm:mt-40 flex">
        <div className="2xl:w-[60%] w-full">
          <h1 className="text-4xl font-bold leading-[2]">
            <div>
              {t.Home.heading}
              <span className="color-items"> {t.Home.name}</span>
            </div>
            <div>
              {t.Home.title}
              <b className="color-items"> {t.Home.job}</b>
            </div>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-400">
            {t.Home.description}
          </p>
          <Link href="/about">
            <div className="active:translate-y-0.5 animate-bounce morebtn font-semibold py-5 px-10 w-max rounded-full mt-20 text-white cursor-pointer">
              {t.Home.button}
            </div>
          </Link>
        </div>
        <div
          className="w-[40%] self-center hidden 2xl:block imgRight relative"
          data-aos="fade-in">
          <Image
            src={ImgAdmin}
            alt="not found"
            width={400}
            height={400}
            className="m-auto rounded-tr-3xl rounded-bl-3xl"
          />
        </div>
      </main>
    </section>
  );
}
