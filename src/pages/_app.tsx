import React from "react"
import { Layout } from "@/components/layout"
import 'swiper/css';
import '../styles/globals.css'
import '@styles'

import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({ weight: 'variable', subsets: ['latin'], axes: ["wdth", "opsz", "GRAD", "slnt", "XTRA", "XOPQ", "YOPQ", "YTLC", "YTUC", "YTAS", "YTDE", "YTFI"], variable: '--roboto-font' })


interface AppProps {
    Component: React.ComponentType<any>;
    pageProps: any;
}


const App: React.FC<AppProps> = ({ Component, pageProps }) => {

    return (
        <div className={roboto.className}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}

export default App;
