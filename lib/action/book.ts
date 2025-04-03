"use server"
import { db } from "@/database/drizzle"
import { books} from "@/database/schema"
import { BookParams} from "@/type"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export const createBook = async (params: BookParams) => {
    try {
        const newBook = await db.insert(books).values(params).returning()

        revalidatePath("/books")
        return {
            success: true,
            data: JSON.parse(JSON.stringify(newBook[0])),
            message: "create book success."
        }
    } catch (error) {
        console.log(error)

        return {
            success: false,
            message: "An Error occurred while creating the book."
        }
    }
}

export const deleteBook = async (id: string) => {
    try {
        const book = await db.delete(books).where(eq(books.id,id))
        revalidatePath("/books")
        return{
            success: true,
            data: JSON.parse(JSON.stringify(book)),
            message:"Delete Book Success."
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "An Error occurred while delete the book."
        }
    }
}



export const getBook = async () => {
    const response = await db.select().from(books)

    return response
}


export const getDetailBook = async (id:string) => {
    const [response] =  await db.select().from(books).where(eq(books.id,id))

    return response
}