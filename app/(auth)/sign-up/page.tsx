"use client"
import React from 'react'
import AuthForm from "@/components/AuthForm";
import {SignUpSchema} from "@/lib/validation";
import {signUp} from "@/lib/action/auth";

const Page = () => {
    return (
        <AuthForm
            type={`SIGN-UP`}
            schema={SignUpSchema}
            defaultValue={{
                fullName: "",
                email: "",
                password: "",
                universityId: "",
                universityCard: ""
            }}
            onSubmit={signUp}
        />
    )
}
export default Page
