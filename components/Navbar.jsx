import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ content }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      handleNavbar();
      handleMobileNavbar();
    };

    function handleNavbar() {
      if (typeof content !== 'undefined') {
        if (content.current.offsetTop <= window.pageYOffset) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      }
    }

    function handleMobileNavbar() {
      setShowMobileNavbar(false);
    }
  });

  return (
    <Fragment>
      <nav
        className={`z-10 flex w-full items-center justify-between py-4 px-4 sm:px-10 lg:px-20 xl:px-20 2xl:px-72 ${
          showNavbar ? 'fixed z-50 w-full bg-gray-300/80 backdrop-blur' : 'absolute top-0'
        }`}>
        <div>
          <Link href="/">
            <a className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <Image src="/technofest.png" alt="" layout="fill" objectFit="cover" />
              </div>
              <p className="translate-y-0.5 font-metal-storm lowercase text-gray-800">Technofest</p>
            </a>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setShowMobileNavbar(!showMobileNavbar)}>
            <span className="mx-0.5 inline-block h-3 w-3 rounded-full bg-primary-500"></span>
            <span className="mx-0.5 inline-block h-3 w-3 rounded-full bg-pink-500"></span>
            <span className="mx-0.5 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
          </button>
        </div>
        <div className="hidden space-x-2 md:block">
          <Link href="/#about">
            <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-bold">
              <span className="absolute h-full w-full bg-gradient-to-br group-hover:from-pink-700 group-hover:via-primary-600 group-hover:to-blue-600"></span>
              <span className="relative rounded-full bg-gray-300 px-5 py-1 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                <span className="relative group-hover:text-gray-100">Tentang</span>
              </span>
            </a>
          </Link>
          <Link href="/#competition">
            <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-bold">
              <span className="absolute h-full w-full bg-gradient-to-br group-hover:from-pink-700 group-hover:via-primary-600 group-hover:to-blue-600"></span>
              <span className="relative rounded-full bg-gray-300 px-5 py-1 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                <span className="relative group-hover:text-gray-100">Perlombaan</span>
              </span>
            </a>
          </Link>

          <Link href="/webinar/register">
            <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-5 py-1.5 font-bold text-indigo-600 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-primary-500">
              <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700"></span>
              <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-pink-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
              <span className="relative text-white">Registrasi Webinar</span>
            </a>
          </Link>
        </div>
      </nav>
      <nav
        className={`fixed top-20 -right-4 z-50 grid grid-cols-1 items-center space-y-2 rounded-lg ${
          showMobileNavbar ? 'transition duration-300' : 'translate-x-48 transition duration-300'
        }`}>
        <Link href="/#about">
          <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium">
            <span className="absolute h-full w-full bg-gradient-to-br group-hover:from-pink-700 group-hover:via-primary-600 group-hover:to-blue-600"></span>
            <span className="relative h-full w-full rounded-full bg-gray-100 px-5 py-1.5 transition-all duration-300 ease-out group-hover:bg-opacity-0">
              <span className="relative text-gray-700 group-hover:text-white">Tentang</span>
            </span>
          </a>
        </Link>
        <Link href="/#competition">
          <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium">
            <span className="absolute h-full w-full bg-gradient-to-br group-hover:from-pink-700 group-hover:via-primary-600 group-hover:to-blue-600"></span>
            <span className="relative h-full w-full rounded-full bg-gray-100 px-5 py-1.5 transition-all duration-300 ease-out group-hover:bg-opacity-0">
              <span className="relative text-gray-700 group-hover:text-white">Perlombaan</span>
            </span>
          </a>
        </Link>

        <Link href="/webinar/register">
          <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 py-1.5 pl-5 pr-8 font-medium text-indigo-600 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-primary-500">
            <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700"></span>
            <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-pink-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
            <span className="relative text-white">Registrasi Webinar</span>
          </a>
        </Link>
      </nav>
    </Fragment>
  );
}
