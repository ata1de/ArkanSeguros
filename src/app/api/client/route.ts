import { NextRequest } from "next/server";

export default  async function POST(req: NextRequest) {
    const {name, email,phone,peopleTyp,demand,service,isClient} = await req.json()

    try {
        
    } catch (error) {
        
    }

}