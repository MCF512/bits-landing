import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Suspense } from 'react';

const Hero = dynamic(() => import('@/components/hero'), { ssr: false })
const About = dynamic(() => import('@/components/about'), { ssr: false })
const Team = dynamic(() => import('@/components/team'), { ssr: false })
const Directions = dynamic(() => import('@/components/directions'), { ssr: false })
const Contacts = dynamic(() => import('@/components/contacts'), { ssr: false })

export default function Home() {

    return (
        <div>
            <Hero />
            <About />
            <Team />
            <Directions />
            <Contacts />
        </div>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {

    return {
        props: {
        },
    };
}