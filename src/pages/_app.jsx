import "../styles/global.scss";
import "react-toastify/dist/ReactToastify.css";
import CookieBanner from "../components/CookieBanner";
import ContextHeaderProvider from "../Context/ContextHeader";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ContextHeaderProvider>
      <CookieBanner />
        <Component {...pageProps} />
      </ContextHeaderProvider>
    </>
  );
}
