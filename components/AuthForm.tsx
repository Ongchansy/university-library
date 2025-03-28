"use client"

import React from 'react'
import {DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z, ZodType} from "zod"
import Link from "next/link";
import {FIELD_NAMES, FIELD_TYPES} from "@/constants";
import {useRouter} from "next/navigation";
import FileUpload from "@/components/FileUpload";
import {useToast} from "@/hooks/use-toast";
import {Form, FormField, FormItem,FormLabel,FormControl,FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

interface Props<T extends  FieldValues> {
    schema: ZodType<T>,
    defaultValue: T,
    onSubmit: (data: T) => Promise<{success: boolean, error?: string}>,
    type: "SIGN-IN" | "SIGN-UP"
}

const AuthForm = <T extends FieldValues > ({
                    type,
                    schema,
                    defaultValue,
                    onSubmit,
                  }: Props<T>) => {

    const router = useRouter()
    const { toast } = useToast()

    const form: UseFormReturn<T> = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: defaultValue as DefaultValues<T>,
    })

    const handleSubmit: SubmitHandler<T>  = async  (data) => {
        const result = await onSubmit(data)
        if (result.success) {
            toast({
                title: "Success",
                description: type === "SIGN-IN" ? "You have successfully signed in!" : "You have successfully signed up!",
            })
            router.push("/")
        }else{
            console.log("error")
            toast({
                title: `Error ${type === "SIGN-IN" ? "Signed in!" : "Signed up!"}`,
                description: result.error ?? "Error",
                variant: "destructive"
            })
        }
    }

    return (
        <div className={`flex flex-col gap-4`}>
            <h1 className={`text-2xl font-semibold text-white`}>
                {type === "SIGN-IN" ? "Welcome Back to BookWise" : "Create Your Library Account"}
            </h1>
                <p className={`text-light-100`}>
                    {
                        type === "SIGN-IN" ? "Access the vast collection of resource, and stay updated" : "Please complete all fields and upload a valid universiry ID to gain access the library"
                    }
                </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">
                    {
                        Object.keys(defaultValue).map((field:string) => {
                            return (
                                <FormField
                                    key={field}
                                    control={form.control}
                                    name={field as Path<T>}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className={`capitalize`}>{FIELD_NAMES[field.name as keyof typeof FIELD_NAMES ]}</FormLabel>
                                            <FormControl>
                                                {
                                                    field.name === "universityCard" ? 
                                                    <FileUpload
                                                        type='image'
                                                        accept='image/*'
                                                        placeholder='Upload Your ID'
                                                        folder='ids'
                                                        variant='dart'
                                                        onFileChange={field.onChange} 
                                                    /> : 
                                                    <Input
                                                        className={`form-input`}
                                                        required
                                                        type={FIELD_TYPES[field.name as keyof  typeof  FIELD_TYPES]}  
                                                        {...field} 
                                                    />
                                                }
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )
                        })
                    }
                    <Button type="submit" className={`form-btn`}>{type === "SIGN-IN" ? "Sign In" : "Sign Up"}</Button>
                </form>
            </Form>

            <p className={`text-center text-base font-medium`}>
                {type === "SIGN-IN" ? "New to BookWise? " : "Already have an account? "}

                <Link className={`font-bold text-primary`} href={type === "SIGN-IN" ? "/sign-up" : "/sign-in"}>
                    {type === "SIGN-IN" ? "Create an account" : "Sign-in"}
                </Link>
            </p>
        </div>
    )
}
export default AuthForm
