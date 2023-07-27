import Head from "next/head";
import { Container } from "react-bootstrap";
import Navbar from "../Components/navbar/Navbar";
import Header from "../Components/header/Header";
import Process from "../Components/processAndtesting/Process";
import Details from "../Components/details/Details";
import Work from "../Components/latestWork/Work";
import Clients from "../Components/clients/Clients";
import Footer from "../Components/footer/Footer";
// import { GetServerSideProps } from "next";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
// import favicon from '../public/favicon.ico'
// import styles from '../styles/Home.module.css'

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>100daysofMVP | Launch your MVP in 100 days</title>
        <meta name="100 days of mvp " content="We create your design WORLD" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <Header data={props.data} />
      <Process />
      <Details />
      <Work />
      <Clients />
      <Footer />
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch("http://127.0.0.1:1337/api/headers");
//   const { data } = await res.json();
//   console.log(JSON.stringify(data));
//   return { props: { data } };
// }

// const getData = async () => {
//   const res = await fetch(`http://localhost:1337/api/headers`)
//   const data = await res.json()
//   console.log(data)
//   return data
// }

// export async function getStaticProps() {
//   const data = await getdata()

//   return { props: { data } }
// }

// export const getServerSideProps: GetServerSideProps<{ data: any }> = async (context) => {
//   const res = await fetch('http://localhost:1337/api/headers')
//   const data: any = await res.json()

//   return {
//     props: {
//       data,
//     },
//   }
// }
