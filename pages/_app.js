import Head from 'next/head'

import '@/public/output.css'

export default function App({ Component, pageProps }) {
    return (
        <main>
            <Head>
                <title>Wordstats</title>
            </Head>

            <Component {...pageProps} />
        </main>
    )
}
