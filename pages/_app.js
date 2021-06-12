import "../styles/globals.css";
import useMediaQuery from "../hooks/useMediaQuery";

function MyApp({ Component, pageProps }) {
  const breakpoint = 991;
  const size = useMediaQuery(breakpoint);
  const Desktop = ({ children }) => {
    const isDesktop = !size;
    return isDesktop ? children : null;
  };
  const NotDesktop = ({ children }) => {
    const isNotDesktop = size;
    return isNotDesktop ? children : null;
  };

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
