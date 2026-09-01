import { StaticImageData } from "next/image";
import type { UkGradient } from "@/shared";

export interface Mentor {
  id: string;
  name: string;
  role: string;
  image?: string | StaticImageData;
  bio: string;
  dirs: string[];
  gradient: UkGradient;
}
