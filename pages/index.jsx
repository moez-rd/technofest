import Image from 'next/image';
import { Fragment, useEffect, useRef, useState } from 'react';
import Cube from '../assets/svg/cube.svg';
import Comp from '../assets/svg/comp-llc3.svg';
import Essay from '../assets/svg/essay-llc3.svg';
import Poster from '../assets/svg/poster-llc3.svg';
import Uiux from '../assets/svg/uiux-llc3.svg';
import Link from 'next/link';

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const content = useRef();

  useEffect(() => {
    window.onscroll = function () {
      handleNavbar();
      handleMobileNavbar();
    };

    function handleNavbar() {
      if (content.current?.offsetTop <= window.pageYOffset) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    }

    function handleMobileNavbar() {
      setShowMobileNavbar(false);
    }
  });

  return (
    <Fragment>
      <div className="h-screen bg-black text-primary-50">
        <nav
          className={`flex items-center justify-between py-4 px-4 sm:px-72 ${
            showNavbar ? 'fixed z-50 w-full bg-black' : ''
          }`}>
          <div>
            <Link href="/">
              <a className="flex items-center space-x-2">
                <div className="relative h-8 w-8">
                  <Image src="/technofest.png" alt="" layout="fill" objectFit="cover" />
                </div>
                <p className="translate-y-0.5 font-semibold">Technofest</p>
              </a>
            </Link>
          </div>
          <div className="sm:hidden">
            <button onClick={() => setShowMobileNavbar(!showMobileNavbar)}>
              <span className="mx-0.5 inline-block h-3 w-3 rounded-full bg-primary-500"></span>
              <span className="mx-0.5 inline-block h-3 w-3 rounded-full bg-pink-500"></span>
              <span className="mx-0.5 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
            </button>
          </div>
          <div className="hidden space-x-2 lg:block">
            <Link href="#about">
              <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium">
                <span className="absolute h-full w-full bg-gradient-to-br group-hover:from-pink-700 group-hover:via-primary-600 group-hover:to-blue-600"></span>
                <span className="relative rounded-full bg-black px-5 py-1 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                  <span className="relative text-white">Tentang</span>
                </span>
              </a>
            </Link>
            <Link href="#competition">
              <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium">
                <span className="absolute h-full w-full bg-gradient-to-br group-hover:from-pink-700 group-hover:via-primary-600 group-hover:to-blue-600"></span>
                <span className="relative rounded-full bg-black px-5 py-1 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                  <span className="relative text-white">Perlombaan</span>
                </span>
              </a>
            </Link>

            <Link href="/webinar/register">
              <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-5 py-1.5 font-medium text-indigo-600 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-primary-500">
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
          <Link href="#about">
            <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium">
              <span className="absolute h-full w-full bg-gradient-to-br group-hover:from-pink-700 group-hover:via-primary-600 group-hover:to-blue-600"></span>
              <span className="relative h-full w-full rounded-full bg-black px-5 py-1.5 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                <span className="relative text-white">Tentang</span>
              </span>
            </a>
          </Link>
          <Link href="#competition">
            <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium">
              <span className="absolute h-full w-full bg-gradient-to-br group-hover:from-pink-700 group-hover:via-primary-600 group-hover:to-blue-600"></span>
              <span className="relative h-full w-full rounded-full bg-black px-5 py-1.5 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                <span className="relative text-white">Perlombaan</span>
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
        <header className="relative flex flex-col px-4 py-60 text-center sm:px-40 sm:text-left">
          <Cube className="absolute right-12 top-28 w-10 rotate-12 sm:right-[280px] sm:top-[210px] sm:w-20"></Cube>
          <Cube className="absolute left-12 top-36 w-14 rotate-45 sm:left-auto sm:right-[300px] sm:top-[280px] sm:w-40"></Cube>
          <Cube className="absolute right-20 bottom-32 w-20 sm:bottom-auto sm:right-[220px] sm:top-[400px] sm:w-32"></Cube>
          <Cube className="absolute left-14 bottom-20 w-12 rotate-90 sm:bottom-auto sm:left-auto sm:right-[340px] sm:top-[520px] sm:w-10"></Cube>

          <h1 className="mt-10 text-5xl font-semibold sm:text-6xl">
            <span className="bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700 bg-clip-text text-transparent">
              Technology
            </span>{' '}
            Festival
          </h1>
          <p className="mt-2 max-w-xl font-light sm:mt-4 sm:text-2xl">
            Himpunan Mahasiswa Sistem Komputer Universitas Sriwijaya
          </p>
        </header>
      </div>

      <main
        id="content"
        ref={content}
        className="min-h-screen space-y-40 py-20 px-4 sm:space-y-60 sm:p-40">
        {/* --------------------------------- Tentang --------------------------------- */}
        <section
          id="about"
          className="relative grid grid-cols-1 text-center sm:grid-cols-2 sm:text-left">
          <Cube className="absolute top-20 left-5 w-12 rotate-12 sm:left-[0px] sm:top-[210px] sm:w-20"></Cube>
          <Cube className="absolute top-24 right-4 w-20 rotate-45 sm:right-auto sm:left-[50px] sm:top-[280px] sm:w-40"></Cube>
          <div className="flex items-center justify-center">
            <div className="relative h-40 w-40 sm:h-80 sm:w-80">
              <Image src="/technofest.png" alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="mt-10 sm:mt-0 sm:max-w-lg">
            <h2 className="inline bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700 bg-clip-text font-medium tracking-[10px] text-transparent">
              TENTANG
            </h2>
            <p className="px-10 text-3xl sm:px-0 sm:text-4xl">
              <span className="font-semibold text-gray-700">Selamat datang</span> di Technofest 2022
            </p>
            <p className="mt-5 text-gray-500">
              Technology Festival adalah festival tahunan yang diadakan oleh Himpunan Mahasiswa
              Sistem Komputer Universitas Sriwijaya. Technology Festival merupakan rangkaian acara
              yang terdiri dari perlombaan dan seminar yang bertujuan untuk memotivasi kaum muda,
              terutama mahasiswa agar mau berinovasi di dunia teknologi yang semakin maju.
              Technology Festival juga bertujuan untuk menyalurkan minat dan bakat anak muda melalui
              ajang perlombaan yang akan dilaksanakan pada acara tersebut.
            </p>
          </div>
        </section>

        {/* --------------------------------- Webinar --------------------------------- */}
        <section id="webinar" className="relative flex flex-col items-center">
          <Cube className="absolute left-2 top-0 w-16 rotate-90 sm:left-auto sm:right-[0px] sm:top-[20px] sm:w-24"></Cube>
          <Cube className="rotate absolute top-16 right-6 w-8 sm:right-[20px] sm:top-[130px] sm:w-10"></Cube>
          <Cube className="absolute right-10 top-2 w-12 rotate-12 sm:right-[80px] sm:top-[180px] sm:w-32"></Cube>
          <div className="max-w-xl text-center">
            <h2 className="inline bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700 bg-clip-text font-medium tracking-[10px] text-transparent">
              WEBINAR
            </h2>
            <p className="px-10 text-3xl sm:px-0 sm:text-4xl">
              <span className="font-semibold text-gray-700">Webinar</span> are Coming Soon
            </p>
            <p className="mt-5 text-gray-500">
              Webinar akan diselenggarakan pada tanggal{' '}
              <span className="font-semibold">8 Oktober</span>. Segera daftarkan webinar.
            </p>
            <Link href="/webinar/register">
              <a className="group relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-5 py-1.5 font-medium text-indigo-600 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-primary-500">
                <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700"></span>
                <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-pink-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
                <span className="relative text-white">Registrasi Webinar</span>
              </a>
            </Link>
          </div>
        </section>

        {/* --------------------------------- Perlombaan --------------------------------- */}
        <section id="competition" className="relative flex flex-col items-center">
          <Cube className="absolute top-40 left-10 w-20 sm:left-[0px] sm:top-[10px] sm:w-32"></Cube>
          <Cube className="absolute top-96 right-20 w-24 rotate-12 sm:right-auto sm:left-[40px] sm:top-[350px] sm:w-20"></Cube>
          <Cube className="absolute bottom-40 left-20 w-16 rotate-1 sm:bottom-auto sm:left-auto sm:right-[60px] sm:top-[280px] sm:w-16"></Cube>
          <div className="max-w-xl text-center">
            <h2 className="inline bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700 bg-clip-text font-medium tracking-[10px] text-transparent">
              PERLOMBAAN
            </h2>
            <p className="px-10 text-3xl sm:px-0 sm:text-4xl">
              <span className="font-semibold text-gray-700">Perlombaan</span> pada Tahun Ini
            </p>
          </div>
          <div className="z-10 mt-10 grid grid-cols-1 gap-y-10 text-center sm:grid-cols-4 sm:gap-y-0 sm:gap-x-10">
            <div className="flex flex-col items-center rounded-xl px-2 py-5 shadow-xl backdrop-blur transition duration-300 hover:scale-105">
              <Uiux className="w-24"></Uiux>
              <h3 className="mt-5 text-2xl font-medium">UI/UX Design</h3>
            </div>
            <div className="flex flex-col items-center rounded-xl px-2 py-5 shadow-xl backdrop-blur transition duration-300 hover:scale-105">
              <Poster className="w-24"></Poster>
              <h3 className="mt-5 text-2xl font-medium">Poster Design</h3>
            </div>
            <div className="flex flex-col items-center rounded-xl px-2 py-5 shadow-xl backdrop-blur transition duration-300 hover:scale-105">
              <Comp className="w-24"></Comp>
              <h3 className="mt-5 text-2xl font-medium">Competitive Programming</h3>
            </div>
            <div className="flex flex-col items-center rounded-xl px-2 py-5 shadow-xl backdrop-blur transition duration-300 hover:scale-105">
              <Essay className="w-24"></Essay>
              <h3 className="mt-5 text-2xl font-medium">Writing Essay</h3>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center justify-center bg-black py-8 text-primary-50 sm:py-14">
        <div className="relative h-10 w-10">
          <Image src="/technofest.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <p className="mt-1 font-medium">Technology Festival</p>
        <p className="mt-3 text-xs text-gray-500">
          &copy; Copyright 2022 All Rights Reserved by Infokom Himasisko
        </p>
      </footer>
    </Fragment>
  );
}
