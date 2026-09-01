import React from "react"
import { Layout } from "@/components/layout"
import 'swiper/css';
import '../styles/globals.css'
import '@/shared/styles/tokens.css'
import '@styles'

import { Barlow_Condensed, DM_Sans, Roboto_Flex } from 'next/font/google'
import Head from "next/head";

const roboto = Roboto_Flex({
    weight: 'variable',
    subsets: ['latin'],
    axes: ["wdth", "opsz", "GRAD", "slnt", "XTRA", "XOPQ", "YOPQ", "YTLC", "YTUC", "YTAS", "YTDE", "YTFI"],
    variable: '--roboto-font',
})

const barlowCondensed = Barlow_Condensed({
    weight: ['700', '900'],
    subsets: ['latin'],
    variable: '--uk-font-cond',
    display: 'swap',
})

const dmSans = DM_Sans({
    weight: ['300', '400', '500'],
    subsets: ['latin', 'latin-ext'],
    variable: '--uk-font-body',
    display: 'swap',
})

interface AppProps {
    Component: React.ComponentType<any>;
    pageProps: any;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Студия танцев BIT`S – Уроки танцев в Речице для детей и взрослых</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className={`${roboto.className} ${barlowCondensed.variable} ${dmSans.variable}`}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
        </>
    )
}

export default App;
