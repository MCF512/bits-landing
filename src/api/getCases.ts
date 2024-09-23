import { Case, CasesFetchResponse, CasesResponse, PartnerResponse } from "@/types";

export const getCases = async () => {
    try {
        const url = `${process.env.API_URL}/site/case?event=${process.env.EVENT_ID}`
        const data = await fetch(url);
        const jsonData: CasesFetchResponse = await data.json()

        const res: Case[] = jsonData.cases.map(({companies, expertises, ...props}) => {
            let updatedCompanies = companies.map((id) => {
                return jsonData.companies.find(({company_id}) => company_id === id )
            }).filter((val) => !!val)
            let updatedExpertises = expertises.map((id) => {
                return jsonData.expertises.find(({expertise_id}) => expertise_id === id) ?? null
            }).filter((val) => !!val)

            return {...props, companies: updatedCompanies, expertises: updatedExpertises}
        })

        return res
    } catch (e) {
        console.log(e)
    }
}