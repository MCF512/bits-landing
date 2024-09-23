import {  FAQResponse, FAQSection } from "@/types";

export const getFAQ = async () => {
    try {
        const url = `${process.env.API_URL}/site/faq?type=HACKATHON`
        const data = await fetch(url);
        const jsonData:FAQSection[] = await data.json()

        const filteredData = jsonData.filter(({articles}) => !!articles.length )

        return filteredData
    } catch (e) {
        console.log(e)
    }
}