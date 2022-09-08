import type { NextPage } from 'next';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import Cube from '@/assets/svg/cube.svg';
import Comp from '@/assets/svg/comp-llc3.svg';
import Essay from '@/assets/svg/essay-llc3.svg';
import Poster from '@/assets/svg/poster-llc3.svg';
import Uiux from '@/assets/svg/uiux-llc3.svg';
import Link from 'next/link';

const Home: NextPage = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.getElementById('content')?.offsetTop <= window.pageYOffset) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    }
  });

  return (
    <Fragment>
      <div className="h-screen bg-black text-primary-50">
        <nav
          className={`flex justify-between py-4 px-72 ${
            showNavbar ? 'fixed z-10 w-full bg-black' : ''
          }`}>
          <div className="">
            <Link href="/">
              <a className="flex items-center space-x-2">
                <div className="relative h-8 w-8">
                  <Image src="/technofest.png" alt="" layout="fill" objectFit="cover" />
                </div>
                <p className="translate-y-0.5 font-semibold">Technofest</p>
              </a>
            </Link>
          </div>
          <div className="space-x-2">
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
        <header className="relative flex flex-col px-40 py-60">
          <Cube className="absolute top-[210px] right-[280px] w-20 rotate-12"></Cube>
          <Cube className="absolute top-[280px] right-[300px] w-40 rotate-45"></Cube>
          <Cube className="absolute top-[400px] right-[220px] w-32"></Cube>
          <Cube className="absolute top-[520px] right-[340px] w-10 rotate-90"></Cube>

          <h1 className="mt-10 text-6xl font-semibold">
            <span className="bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700 bg-clip-text text-transparent">
              Technology
            </span>{' '}
            Festival
          </h1>
          <p className="mt-4 max-w-xl text-2xl font-light">
            Himpunan Mahasiswa Sistem Komputer Universitas Sriwijaya
          </p>
        </header>
      </div>

      <main id="content" className="min-h-screen space-y-60 p-40">
        {/* --------------------------------- Tentang --------------------------------- */}
        <section id="about" className="relative grid grid-cols-2">
          <Cube className="absolute top-[210px] left-[0px] w-20 rotate-12"></Cube>
          <Cube className="absolute top-[280px] left-[50px] w-40 rotate-45"></Cube>
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-80">
              <Image src="/technofest.png" alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="max-w-lg">
            <h2 className="inline bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700 bg-clip-text font-medium tracking-[10px] text-transparent">
              TENTANG
            </h2>
            <p className="text-4xl">
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
          <Cube className="absolute top-[20px] right-[0px] w-24 rotate-90"></Cube>
          <Cube className="rotate absolute top-[130px] right-[20px] w-10"></Cube>
          <Cube className="absolute top-[180px] right-[80px] w-32 rotate-12"></Cube>
          <div className="max-w-xl text-center">
            <h2 className="inline bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700 bg-clip-text font-medium tracking-[10px] text-transparent">
              WEBINAR
            </h2>
            <p className="text-4xl">
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
          <Cube className="absolute top-[10px] left-[0px] w-32"></Cube>
          <Cube className="absolute top-[350px] left-[40px] w-20 rotate-12"></Cube>
          <Cube className="absolute top-[280px] right-[60px] w-16 rotate-1"></Cube>
          <div className="max-w-xl text-center">
            <h2 className="inline bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700 bg-clip-text font-medium tracking-[10px] text-transparent">
              PERLOMBAAN
            </h2>
            <p className="text-4xl">
              <span className="font-semibold text-gray-700">Perlombaan</span> pada Tahun Ini
            </p>
          </div>
          <div className="z-10 mt-10 grid grid-cols-4 gap-x-10 text-center">
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
      <footer className="flex flex-col items-center justify-center bg-black py-14 text-primary-50">
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
};

export default Home;
