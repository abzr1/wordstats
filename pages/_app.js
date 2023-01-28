import { Lora } from '@next/font/google'
import Head from 'next/head'

import '@/public/output.css'

const lora = Lora({ weight: ['400', '500'], subsets: ['latin'] })

export default function App({ Component, pageProps }) {
    return (
        <main className={lora.className}>
            <Head>
                <title>wordstats</title>
            </Head>

            <Component {...pageProps} />
        </main>
    )
}
