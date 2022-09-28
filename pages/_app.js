import { useEffect } from 'react';
import '../styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 200,
      duration: 700
    });
  });

  return <Component {...pageProps} />
}

export default MyApp
