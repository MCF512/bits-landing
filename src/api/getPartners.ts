import { PartnerResponse } from "@/types";

export const getPartners = async () => {
    try {
        const url = `${process.env.API_URL}/site/company?event=${process.env.EVENT_ID}`
        const data = await fetch(url);
        const jsonData: PartnerResponse = await data.json()

        return jsonData
    } catch (e) {
        console.log(e)
    }
}