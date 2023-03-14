import '../styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import CookieBanner from '../components/CookieBanner';



export default function App({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />
      <CookieBanner />
    </>
  ) 
}
