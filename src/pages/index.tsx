import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = dynamic(() => import('@/components/hero'), { ssr: false })
const About = dynamic(() => import('@/components/about'), { ssr: false })
const Team = dynamic(() => import('@/components/team'), { ssr: false })
const Directions = dynamic(() => import('@/components/directions'), { ssr: false })
const Schedule = dynamic(() => import('@/components/schedule'), { ssr: false })
const Contacts = dynamic(() => import('@/components/contacts'), { ssr: false })

export default function Home() {

    return (
        <div>
            <Hero />
            <About />
            <Team />
            <Directions />
            <Schedule />
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
