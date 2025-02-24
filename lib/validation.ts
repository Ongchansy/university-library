"use client"

import { title } from "process"
import {z}  from "zod"

export const SignUpSchema = z.object({
    fullName: z.string().min(3),
    email: z.string().email(),
    universityId: z.string(),
    universityCard: z.string().nonempty("University Card is required"),
    password: z.string().min(8),
})

export const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const BookSchema =  z.object({
    title: z.string().trim().min(3).max(100),
    description: z.string().trim().min(3).max(100),
    author: z.string().trim().min(3).max(100),
    genre: z.string().trim().min(3).max(100),
    rating: z.number().min(1).max(5),
    totalCopy: z.coerce.number().int().positive().lte(10000),
    coverUrl: z.string().nonempty("Cover URL is required"),
    coverColor: z.string().trim().regex(/^#[0-9a-f]{6}$/i, "Invalid color code"),
    videoUrl: z.string().nonempty("Video URL is required"),
    summary: z.string().trim().min(10),
})