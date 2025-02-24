"use server";
import {Credentials} from "@/type";
import {db} from "@/database/drizzle";
import {users} from "@/database/schema";
import {eq} from "drizzle-orm";
import {hash} from "bcryptjs";
import {signIn} from "@/auth";


export const signInWithCredentials = async (params: Pick<Credentials,"email" | "password"> ) => {
    const {email,password} = params;

    try {

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false
        })

        if(result?.error){
            return {
                success: false,
                error: result.error
            }
        }

        return {success: true};
    }catch(err){
        console.error(err);
        return {
            success: false,
            error: "Failed to signIn",
        }
    }
}

export const signUp = async (params: Credentials) => {
    const {fullName,email,password,universityId,universityCard} = params;

    const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email,email))
        .limit(1)

    if (existingUser.length > 0) {
        return {
            success: false,
            error: "User Already Exists",
        }
    }

    const hashPassword = await hash(password, 10 );

    try {
         await db.insert(users).values({
            fullName,
            email,
            password: hashPassword,
            universityId,
            universityCard,
        })

        await signInWithCredentials({email,password})

        return {success: true}

    }catch(err) {
        console.log(err)
        return {
            success: false,
            error:"Failed to signup"
        }
    }
}
