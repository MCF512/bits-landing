import { Hero } from "@/components/hero";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { About } from "@/components/about";
import { Team } from "@/components/team";
import { Directions } from "@/components/directions/ui/directions";
import { Contacts } from "@/components/contacts";
export default function Home() {

    return (
        <div>
            <Hero/>
            <About/>
            <Team/>
            <Directions/>
            <Contacts/>
        </div>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {

    return {
        props: {
        },
    };
}