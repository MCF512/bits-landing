import { StaffResponse } from "@/types";
import { filterStaff } from "@/utils/filterStaff";

export const getStaff = async () => {
    try {
        const url = `${process.env.API_URL}/site/staff?event=${process.env.EVENT_ID}&role=expert,jury,tracker`
        const data = await fetch(url);
        const jsonData: StaffResponse = await data.json()

        return filterStaff(jsonData)

    } catch (e) {
        console.log(e)
    }
}