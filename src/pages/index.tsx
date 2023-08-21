import LandingPage from '@/components/LandingPage/2023/LandingPage'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=31536000')
  const company = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/companies`)
  const team = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/team`)
  const faq = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/faqs`)
  const [companyData, teamData, faqData] = await Promise.all([
    company,
    team,
    faq
  ])
  return {
    props: {
      companyData: companyData.data,
      teamData: teamData.data,
      faqData: faqData.data
    }
  }
}

export default function Home({
  companyData,
  teamData,
  faqData
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>FullyHacks 2024</title>
        <meta
          name="description"
          content="Welcome to FullyHacks 2024"
          key="desc"
        />
        <meta property="og:title" content="FullyHacks 2024" />
        <meta
          property="og:description"
          content="Welcome to FullyHacks 2024, CSUF's largest 24-hour hackathon"
        />
        <meta property="og:image" content="/fullyhacks_logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex flex-col items-center font-rubik font-semibold">
        <p className='mt-10 text-black text-xl'>
          FullyHacks 2024...
        </p>
      </main>
    </>
  )
}
