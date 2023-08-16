import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className="h-full">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter&family=Leckerli+One&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="h-full bg-black text-white font-body">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
