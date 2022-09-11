import { useEffect, useState, Fragment } from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Input from '../../components/input';
import Modal from '../../components/Modal';

export default function RegisterWebinar() {
  const [successedModalOpened, setSuccessedModalOpened] = useState(false);
  const [failedModalOpened, setFailedModalOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agency, setAgency] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const url =
      'https://script.google.com/macros/s/AKfycbzoPyVaimXHgLPb8lneYODUSga5nwNFDXEpB7WP1SQQZ-3k8sV8aMdXCoyfe-fisK3w6g/exec';
    const form = document.forms[0];

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      setIsLoading(true);
      setName('');
      setEmail('');
      setAgency('');
      setPhone('');
      fetch(url, { method: 'POST', body: new FormData(form) })
        .then(() => {
          setSuccessedModalOpened(true);
        })
        .catch(() => {
          setFailedModalOpened(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Technofest 2022 - Registrasi Webinar</title>
        <meta
          name="description"
          content="Webinar akan diselenggarakan pada tanggal 8 Oktober. Segera daftarkan webinar."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between bg-black text-primary-50">
        <Navbar />
        <main className="flex grow flex-col items-center justify-center py-40 px-4">
          <h1 className="mt-10 text-3xl font-semibold sm:text-4xl">Registrasi Webinar</h1>
          <p className="mt-1 text-center text-gray-500">
            Silakan lengkapi formulir pendaftaran di bawah.
          </p>
          <form className="w-full sm:w-[500px]">
            <div className="mt-10 ">
              <Input
                type="text"
                name="Nama"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Nama"
              />
              <Input
                type="text"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
              />
              <Input
                type="text"
                name="Asal Instansi"
                placeholder="Asal Instansi"
                value={agency}
                onChange={(e) => setAgency(e.target.value)}
                label="Asal Instansi"
              />
              <Input
                type="text"
                name="Nomor Whatsapp"
                placeholder="Nomor Whatsapp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                label="Nomor Whatsapp"
              />

              <div className="relative mt-8 flex">
                <button
                  type="submit"
                  className="group relative mx-auto inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-5 py-1.5 font-medium text-indigo-600 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-primary-500">
                  <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-primary-600 to-pink-700"></span>
                  <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-pink-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
                  <span className="relative text-white">Registrasi</span>
                </button>
                <div
                  className={`absolute inset-y-0 right-0 my-auto ${
                    isLoading ? 'block' : 'hidden'
                  }`}>
                  <div className="relative">
                    <div className="h-8 w-8 rounded-full border-2 border-black"></div>
                    <div className="absolute left-0 top-0 h-8 w-8 animate-spin rounded-full border-t-2 border-primary-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
        <Footer></Footer>
        {/* Successed Modal */}
        <Modal title="Registrasi Webinar berhasil." opened={successedModalOpened}>
          Silakan bergabung ke grup Whatsapp melalui link berikut.{' '}
          <a href="https://blabla.com" className="text-gray-500 hover:underline">
            https://blabla.com
          </a>
        </Modal>
        {/* Failed Modal */}
        <Modal title="Registrasi Webinar gagal." opened={failedModalOpened}>
          Terjadi kesalahan saat pendaftaran webinar.
        </Modal>
      </div>
    </Fragment>
  );
}
