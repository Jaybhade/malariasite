import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import URL from "../hooks/url";

export default function Home({ photos }) {
  const photo1 = URL + photos[0].Photos[0].url;
  console.log(photo1);
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

Home.getInitialProps = async () => {
  const req = await axios.get(URL + "/Homepage-photos/");
  const photos = req.data;

  return { photos };
};
