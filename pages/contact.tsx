import Head from 'next/head';
import React, { useRef, useState } from 'react';
import { FaPhone, FaGithubAlt } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import Wishlish from '../public/images/Op0MI7.png';
import Image from 'next/image';

export default function Contact({ t }: any) {
  const form: any = useRef();
  const rButton: any = useRef();

  const [show, setShow] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1nda4ca',
        'template_zncivcl',
        form.current,
        'OJZULETPj831H3uhu'
      )
      .then(
        (result) => {
          // console.log(result.text);
          // alert('Ok you')
          setShow(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  // const handleClick = () => {
  //   console.log(rButton.current);
  //   // rButton.current.addEventListener('click', () => {
  //   //   rButton.current.addClass('onclic', 250, validate);
  //   // });
  //   // function validate() {
  //   //   setTimeout(() => {
  //   //     rButton.current.removeClass('onclic');
  //   //     rButton.current.addClass('validate', 450, callback);
  //   //   }, 2250);
  //   // }
  //   // function callback() {
  //   //   setTimeout(() => {
  //   //     rButton.current.removeClass('validate');
  //   //   }, 1250);
  //   // }
  // };
  return (
    <>
      <Head>
        <title>Profile - {t.Contact.adress}</title>
      </Head>
      <main>
        <div className="mt-10">
          <div>
            <div>
              <h1 className="text-4xl font-bold">{t.Contact.head}</h1>
              <div className="w-16 h-1 morebtn"></div>
              <div className="w-8 mt-[2px] h-1 morebtn"></div>
            </div>
            <div className="mt-10 w-full text-center">
              <h3 className="color-items text-2xl font-semibold">
                {t.Contact.address}
              </h3>
              <div> {t.Contact.desOne}</div>
            </div>
            <div
              className="text-center py-8 mt-10 border bg-[#fcfaff] dark:bg-[#222222] mx-[-40px] flex flex-wrap gap-10 justify-around lg:gap-40
             lg:justify-center">
              <div className="w-40">
                <i>
                  <FaPhone className="w-full color-items text-2xl" />
                </i>
                <h2 className="font-semibold my-2">Call Us On</h2>
                <p className="text-gray-500 dark:text-slate-400">
                  +84 349423372
                </p>
              </div>
              <div className="w-40">
                <i>
                  <ImLocation2 className="w-full color-items text-2xl" />
                </i>
                <h2 className="font-semibold my-2">Office</h2>
                <p className="text-gray-500 dark:text-slate-400">
                  Nghia Hanh, Quang Ngai
                </p>
              </div>
              <div className="w-40">
                <i>
                  <MdEmail className="w-full color-items text-2xl" />
                </i>
                <h2 className="font-semibold my-2">Email</h2>
                <p className="text-gray-500 dark:text-slate-400">
                  anhviet.key@gmail.com
                </p>
              </div>
              <div className="w-40">
                <i>
                  <FaGithubAlt className="w-full color-items text-2xl" />
                </i>
                <h2 className="font-semibold my-2">Github</h2>
                <p className="text-gray-500 dark:text-slate-400">
                  github.com/anhviet-key
                </p>
              </div>
            </div>
            <div className="mt-10 w-full text-center">
              <h3 className="color-items text-2xl font-semibold">
                {t.Contact.headingTwo}
              </h3>
              <div>{t.Contact.desTwo}</div>
            </div>
            <div className="mt-10 w-full">
              <form ref={form} onSubmit={sendEmail} className="form">
                <div className="flex gap-10 flex-col sm:flex-row">
                  <div className="flex-1">
                    <input
                      required
                      type="text"
                      className="w-full h-14 outlineCustome border rounded-full py-2 px-6 text-xl"
                      placeholder={t.Contact.inputOne}
                      name="user_name"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      required
                      type="email"
                      className="w-full h-14 outlineCustome border rounded-full py-2 px-6 text-xl"
                      placeholder={t.Contact.inputThree}
                      name="user_email"
                    />
                  </div>
                </div>
                <div>
                  <input
                    required
                    type="text"
                    className="w-full h-14 outlineCustome border rounded-full py-2 px-6 text-xl mt-6"
                    placeholder={t.Contact.inputFour}
                    name="subject"
                  />
                  <textarea
                    className="w-full outlineCustome border rounded-2xl py-2 px-6 text-xl mt-6"
                    cols={40}
                    placeholder={t.Contact.inputFive}
                    rows={5}
                    name="message"></textarea>
                </div>
                <button
                  ref={rButton}
                  id="button"
                  type="submit"
                  // onClick={handleClick}
                  className="morebtn active:translate-y-0.5 morebtn font-semibold py-2 px-10 w-max rounded-full mt-2 text-white cursor-pointer">
                  {/* {t.Contact.button} */}
                </button>
              </form>
            </div>
          </div>
        </div>
        {show && (
          <div className="fixed z-20 h-max w-max m-auto inset-x-0 inset-y-0 p-6 bg-white text-black border-4 flex items-center flex-col justify-items-center shows">
            <div className="flex items-center gap-8">
              <i>
                <Image src={Wishlish} alt="not found" width={80} height={80} />
              </i>
              <b className="text-xl">Thank You!</b>
            </div>
            <div className="flex my-10 text-xl">
              I will reply soon via your email .
            </div>
            <div
              onClick={() => setShow(false)}
              className="absolute w-full flex justify-center bg-[#f4f4fc] bottom-0 pointed cursor-pointer hover:bg-red-500 hover:text-white duration-75 border-2 border-black">
              <b>X</b>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
