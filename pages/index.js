import Head from 'next/head'

export default function Home() {

  const defaultID = process.env.NEXT_PUBLIC_DEFAULT_ID;

  return (
    <div>
      <Head>
        <title>Proof of Concept - Nextjs + Firestore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>ID : {defaultID}</p>
      </main>

      <style jsx>{`
       
      `}</style>

    </div>
  )
}
