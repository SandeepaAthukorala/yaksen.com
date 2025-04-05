import axios from "axios";



const CHATBOT_API_URL = import.meta.env.VITE_CHAT_BOT_API_URL

export const sendMessage = async ({session_id, question} : {session_id: string, question: string})=>{
    try {
        const res = await axios.post(`${CHATBOT_API_URL}`, {
            session_id: session_id,
            question: question
        })

        return res
    } catch (error: any) {
        throw new Error(error)
    }
}
