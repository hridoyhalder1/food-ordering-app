import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ pizzaList,admin }) {
  return (
    <>
      <Head>
        <title>Food Ordering App</title>
        <meta name="description" content="Best pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logos.png" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <Featured></Featured>
      <PizzaList pizzaList={pizzaList}></PizzaList>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      pizzaList: res.data,
      admin
    }
  }
}
