import "../styles/globals.css";
import useMediaQuery from "../hooks/useMediaQuery";
import Navbar_pc from "../components/navbar_pc";
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
       <Navbar_pc/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
