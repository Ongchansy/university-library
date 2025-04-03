"use server"

import { db } from "@/database/drizzle"
import { users } from "@/database/schema"
import { eq } from "drizzle-orm"

export const getUser = async () => {
    const user = await db.select().from(users)

    return user
}

export const getUserDetail = async (id:string) => {
    const userDetail = await db.select().from(users).where(eq(users.id,id))

    return userDetail
}

