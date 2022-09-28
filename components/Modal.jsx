import { useEffect, useState } from 'react';

export default function Modal({ opened, title, children }) {
  const [modalOpened, setModalOpened] = useState(opened);
  function closeModal() {
    setModalOpened(false);
  }

  useEffect(() => {
    setModalOpened(opened);
  }, [opened]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 ${
        modalOpened ? 'block' : 'hidden'
      }`}>
      <div className="flex flex-col rounded-xl bg-white/90 py-10 px-8 text-gray-700 backdrop-blur sm:w-[500px]">
        <p className="inline-block  bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700 bg-clip-text text-xl font-semibold text-transparent">
          {title}
        </p>
        <div className="mt-4 text-gray-700">{children}</div>
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
  );
}
