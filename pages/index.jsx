import Image from 'next/image';
import { Fragment, useEffect, useRef, useState } from 'react';
import Cube from '../assets/svg/cube.svg';
import Separator from '../assets/svg/separator.svg';
import Comp from '../assets/svg/comp-llc3.svg';
import Essay from '../assets/svg/essay-llc3.svg';
import Poster from '../assets/svg/poster-llc3.svg';
import Uiux from '../assets/svg/uiux-llc3.svg';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const content = useRef();

  return (
    <Fragment>
      <Head>
        <title>Technofest</title>
        <meta
          name="description"
          content="Festival tahunan yang diadakan oleh Himpunan Mahasiswa Sistem Komputer Universitas Sriwijaya."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-gray-300">
        <Navbar content={content} />

        {/* --------------------------------- Header --------------------------------- */}

        <header className="flex flex-col items-center justify-center pb-[100px] pt-[40vh] text-center">
          <div className="relative w-56 sm:w-72 md:w-80">
            <Cube className="absolute bottom-12 left-0 w-4 rotate-12 sm:w-6 md:w-8"></Cube>
            <Cube className="absolute bottom-10 left-9 w-20 rotate-45 sm:w-32 md:w-40"></Cube>
            <Cube className="absolute bottom-8 right-14 w-10 rotate-90 sm:w-16 md:w-20"></Cube>
            <Cube className="absolute bottom-12 right-0 w-6 rotate-0 sm:w-8 md:w-12"></Cube>
          </div>
          <h1 className="bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500 bg-clip-text font-metal-storm text-4xl lowercase text-transparent 2xl:text-6xl">
            Technology Festival
          </h1>
          <p className="mt-2 max-w-xl text-sm sm:text-lg md:text-2xl">
            Himpunan Mahasiswa Sistem Komputer Universitas Sriwijaya
          </p>
          <div className="mt-10">
            <Link href="/#content">
              <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium">
                <span className="absolute h-full w-full bg-gradient-to-br group-hover:from-pink-700 group-hover:via-primary-600 group-hover:to-blue-600"></span>
                <span className="relative rounded-full bg-gray-700 px-5 py-1 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                  <span className="relative text-white">Explore</span>
                </span>
              </a>
            </Link>
          </div>
        </header>
        <Separator className="absolute -z-50 w-full"></Separator>
      </div>

      <main
        id="content"
        ref={content}
        className="mt-24 min-h-screen space-y-40 py-20 px-4 sm:mt-60 md:px-10 lg:space-y-60 lg:px-12 lg:py-40 xl:px-60">
        {/* --------------------------------- Tentang --------------------------------- */}
        <section
          id="about"
          className="relative grid grid-cols-1 justify-items-center text-center lg:grid-cols-2 lg:text-left">
          <Cube className="absolute top-20 left-5 -z-10 w-10 rotate-12 lg:left-[0px] lg:top-[210px] lg:w-14 2xl:w-20"></Cube>
          <Cube className="absolute top-24 right-4 -z-10 w-8 rotate-45 lg:right-auto lg:left-[50px] lg:top-[280px] lg:w-12 2xl:w-16"></Cube>
          <div className="flex items-center justify-center">
            <div className="relative h-40 w-40 lg:h-48 lg:w-48 xl:h-56 xl:w-56 2xl:h-80 2xl:w-80">
              <Image src="/technofest.png" alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="mt-10 md:max-w-lg lg:mt-0">
            <h2 className="inline bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500 bg-clip-text font-robot font-medium tracking-[10px] text-transparent">
              TENTANG
            </h2>
            <p className="px-10 text-3xl text-gray-700 sm:px-0 sm:text-4xl">
              <span className="font-semibold">Selamat datang</span> di Technofest 2022
            </p>
            <p className="mt-5 text-gray-500">
              Technology Festival adalah festival tahunan yang diadakan oleh Himpunan Mahasiswa
              Sistem Komputer Universitas Sriwijaya. Terdiri dari perlombaan dan seminar yang
              bertujuan untuk memotivasi kaum muda, terutama mahasiswa agar dapat berinovasi di
              dunia teknologi yang semakin maju. Technology Festival juga bertujuan untuk
              menyalurkan minat dan bakat anak muda melalui ajang perlombaan yang akan dilaksanakan
              pada acara tersebut.
            </p>
          </div>
        </section>

        {/* --------------------------------- Webinar --------------------------------- */}
        <section id="webinar" className="relative flex flex-col items-center">
          <Cube className="absolute left-2 top-0 -z-10 w-12 rotate-90 md:left-auto md:right-[0px] md:top-[20px] md:w-16 2xl:w-20"></Cube>
          <Cube className="rotate absolute top-16 right-6 -z-10 w-8 md:right-[20px] md:top-[130px] md:w-12 2xl:w-16"></Cube>
          <Cube className="absolute right-10 top-2 -z-10 w-6 rotate-12 md:right-[80px] md:top-[180px] md:w-10 2xl:w-14"></Cube>
          <div className="max-w-xl text-center">
            <h2 className="inline bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500 bg-clip-text font-robot font-medium tracking-[10px] text-transparent">
              WEBINAR
            </h2>
            <p className="px-10 text-3xl text-gray-700 sm:px-0 sm:text-4xl">
              <span className="font-semibold">Webinar</span> are Coming Soon
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
          <Cube className="absolute top-40 left-10 w-16 md:left-[0px] md:top-[10px] md:w-20"></Cube>
          <Cube className="absolute top-96 right-20 w-12 rotate-12 md:right-auto md:left-[40px] md:top-[350px] md:w-16"></Cube>
          <Cube className="absolute bottom-40 left-20 w-10 rotate-1 md:bottom-auto md:left-auto md:right-[60px] md:top-[280px] md:w-14"></Cube>
          <div className="max-w-xl text-center">
            <h2 className="inline bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500 bg-clip-text font-robot font-medium tracking-[10px] text-transparent">
              PERLOMBAAN
            </h2>
            <p className="px-10 text-3xl text-gray-700 sm:px-0 sm:text-4xl">
              <span className="font-semibold">Perlombaan</span> pada Tahun Ini
            </p>
          </div>
          <div className="z-10 mt-10 grid grid-cols-1 gap-y-10 text-center sm:grid-cols-2 sm:gap-x-10 xl:grid-cols-4 xl:gap-y-0">
            <div className="flex flex-col items-center rounded-xl p-5 shadow-xl backdrop-blur transition duration-300 hover:scale-105">
              <Uiux className="w-24"></Uiux>
              <h3 className="mt-5 text-2xl font-medium">UI/UX Design</h3>
            </div>
            <div className="flex flex-col items-center rounded-xl p-5 shadow-xl backdrop-blur transition duration-300 hover:scale-105">
              <Poster className="w-24"></Poster>
              <h3 className="mt-5 text-2xl font-medium">Poster Design</h3>
            </div>
            <div className="flex flex-col items-center rounded-xl p-5 shadow-xl backdrop-blur transition duration-300 hover:scale-105">
              <Comp className="w-24"></Comp>
              <h3 className="mt-5 text-2xl font-medium">Competitive Programming</h3>
            </div>
            <div className="flex flex-col items-center rounded-xl p-5 shadow-xl backdrop-blur transition duration-300 hover:scale-105">
              <Essay className="w-24"></Essay>
              <h3 className="mt-5 text-2xl font-medium">Writing Essay</h3>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </Fragment>
  );
}
