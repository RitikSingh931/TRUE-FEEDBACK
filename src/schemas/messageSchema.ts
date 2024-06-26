import {z} from 'zod'

export const  messageSchema= z.object({
    content:z
    .string()
    .min(1,{message:"message must not be empty"})
    .max(200,{message:"message must not exceed 200 characters"})
})