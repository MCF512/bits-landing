import { StaticImageData } from "next/image";

export interface Mentor {
    name: string,
    surname: string,
    image: string | StaticImageData ,
    about: string
}