"use client"

import React from 'react'
import {SignInSchema} from "@/lib/validation";
import AuthForm from "@/components/AuthForm";
import {signInWithCredentials} from "@/lib/action/auth";

const Page = () => {
    return (
        <AuthForm
            type={`SIGN-IN`}
            schema={SignInSchema}
            defaultValue={{
                email: "",
                password: "",
            }}
            onSubmit={signInWithCredentials}
        />
    )
}
export default Page
