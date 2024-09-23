import { Playground, StaffResponse } from "@/types";
import { filterStaff } from "@/utils/filterStaff";

export const getPlaygrounds = async () => {
    try {
        const url = `${process.env.API_URL}/site/playground?event=${process.env.EVENT_ID}`
        const data = await fetch(url);
        const jsonData: Playground[] = await data.json()

        return jsonData

    } catch (e) {
        console.log(e)
    }
}