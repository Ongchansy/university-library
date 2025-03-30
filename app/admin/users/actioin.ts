"use server"

import { db } from "@/database/drizzle"
import { users } from "@/database/schema"
import { eq } from "drizzle-orm"

export const handleDelete = async (id: string) => {
    try {
        const user = await db.delete(users).where(eq(users.id,id)).returning()
        return {
            message: "delete success",
            data: user
        }
    } catch (error) {
        return {
            message: "delete failed",
            data: error,
        }
    }
}