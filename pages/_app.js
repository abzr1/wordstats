import Head from 'next/head'

import '@/public/output.css'

export default function App({ Component, pageProps }) {
    return (
        <main>
            <Head>
                <title>wordstats</title>
            </Head>

            <Component {...pageProps} />
        </main>
    )
}
