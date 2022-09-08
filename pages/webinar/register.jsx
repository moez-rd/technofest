import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RegisterWebinar() {
  const [modalOpened, setModalOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function closeModal() {
    setModalOpened(false);
  }

  useEffect(() => {
    const url =
      'https://script.google.com/macros/s/AKfycbzoPyVaimXHgLPb8lneYODUSga5nwNFDXEpB7WP1SQQZ-3k8sV8aMdXCoyfe-fisK3w6g/exec';
    const form = document.forms[0];

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      setIsLoading(true);
      fetch(url, { method: 'POST', body: new FormData(form) })
        .then(() => {
          setIsLoading(false);
          setModalOpened(true);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error('Error!', error.message);
        });
    });
  }, []);

  return (
    <div className="h-screen bg-black text-primary-50">
      <nav className={`flex justify-between py-4 px-72`}>
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
          <Link href="/#about">
            <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium">
              <span className="absolute h-full w-full bg-gradient-to-br group-hover:from-pink-700 group-hover:via-primary-600 group-hover:to-blue-600"></span>
              <span className="relative rounded-full bg-black px-5 py-1 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                <span className="relative text-white">Tentang</span>
              </span>
            </a>
          </Link>
          <Link href="/#competition">
            <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium">
              <span className="absolute h-full w-full bg-gradient-to-br group-hover:from-pink-700 group-hover:via-primary-600 group-hover:to-blue-600"></span>
              <span className="relative rounded-full bg-black px-5 py-1 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                <span className="relative text-white">Perlombaan</span>
              </span>
            </a>
          </Link>

          <Link href="">
            <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-5 py-1.5 font-medium text-indigo-600 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-primary-500">
              <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700"></span>
              <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-pink-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
              <span className="relative text-white">Registrasi Webinar</span>
            </a>
          </Link>
        </div>
      </nav>
      <main className="mt-20 flex w-full flex-col items-center">
        <h1 className="mt-10 text-4xl font-semibold">Registrasi Webinar</h1>
        <form method="POST" className="mt-10 flex flex-col">
          <div className="mt-4 flex flex-col space-y-1 text-gray-200">
            <label htmlFor="">Nama</label>
            <input
              type="text"
              name="Nama"
              className="w-[500px] rounded-lg border-0 bg-gray-800 py-2.5 focus:ring-0"
              placeholder="Nama"
              required
            />
          </div>
          <div className="mt-4 flex flex-col space-y-1 text-gray-200">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="Email"
              className="w-[500px] rounded-lg border-0 bg-gray-800 py-2.5 focus:ring-0"
              placeholder="Email"
              required
            />
          </div>
          <div className="mt-4 flex flex-col space-y-1 text-gray-200">
            <label htmlFor="">Asal Instansi</label>
            <input
              type="text"
              name="Asal Instansi"
              className="w-[500px] rounded-lg border-0 bg-gray-800 py-2.5 focus:ring-0"
              placeholder="Asal Instansi"
              required
            />
          </div>
          <div className="mt-4 flex flex-col space-y-1 text-gray-200">
            <label htmlFor="">Nomor Whatsapp</label>
            <input
              name="Nomor Whatsapp"
              type="text"
              className="w-[500px] rounded-lg border-0 bg-gray-800 py-2.5 focus:ring-0"
              placeholder="Nomor Whatsapp"
              required
            />
          </div>

          <div className="relative mt-8 flex">
            <button className="group relative mx-auto  inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-5 py-1.5 font-medium text-indigo-600 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-primary-500">
              <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700"></span>
              <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-pink-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
              <span className="relative text-white">Registrasi</span>
            </button>
            <div className={`absolute inset-y-0 right-0 my-auto ${isLoading ? 'block' : 'hidden'}`}>
              <div className="relative">
                <div className="h-8 w-8 rounded-full border-2 border-black"></div>
                <div className="absolute left-0 top-0 h-8 w-8 animate-spin rounded-full border-t-2 border-primary-600"></div>
              </div>
            </div>
          </div>
        </form>
      </main>
      {/* Modal */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/50 ${
          modalOpened ? 'block' : 'hidden'
        }`}>
        <div className="relative flex w-[500px] flex-col rounded-xl bg-white/90 py-10 px-8 text-gray-700 backdrop-blur">
          <p className="inline-block  bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700 bg-clip-text text-xl font-semibold text-transparent">
            Registrasi Webinar berhasil.
          </p>
          <p className="mt-4 text-gray-700">
            Silakan bergabung ke grup Whatsapp melalui link berikut.{' '}
            <a href="https://blabla.com" className="text-gray-500 hover:underline">
              https://blabla.com
            </a>
          </p>
          <div className="mt-10 flex justify-center">
            <button
              onClick={closeModal}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-5 py-1.5 font-medium text-indigo-600 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-primary-500">
              <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700"></span>
              <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-pink-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
              <span className="relative text-white">Selesai</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
