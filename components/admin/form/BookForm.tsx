import { createBook } from '@/app/admin/books/action/book';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { BookSchema } from '@/lib/validation';
import { BookParams } from '@/type';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import {useForm} from "react-hook-form";

const BookForm = () => {

    const {toast} = useToast()

    const {handleSubmit,register,formState:{errors}} = useForm({
        defaultValues: {
            title: "",
            description: "",
            author: "",
            genre: "",
            rating: 1,
            totalCopies: 1,
            availableCopies: 1,
            coverUrl: "",
            coverColor: "",
            videoUrl: "",
            summary: ""
        },
        resolver: zodResolver(BookSchema)
    })

    const onSubmit = async (data: BookParams) => {
        const submitData =  await createBook(data)

        if(submitData.success){
            toast({
                title: "Success",
                description: "You have successfully created a book!",
            })
        }
        else{
            toast({
                title: "Error",
                description: "An error occurred while creating the book!",
                variant: "destructive"
            })
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">

                <div>
                    <Label>Book Title</Label>
                    <Input {...register('title',{required: true})} />
                    {errors.title && <p className='text-red-500 text-sm'>First name is required.</p>}
                </div>

                <div>
                    <Label>Description</Label>
                    <Input {...register('description',{required: true})} />
                    {errors.description && <p className='text-red-500 text-sm'>Description is required.</p>}
                </div>

                <div>
                    <Label>Author</Label>
                    <Input {...register('author',{required: true})} />
                    {errors.author && <p className='text-red-500 text-sm'>Author is required.</p>}
                </div>

                <div>
                    <Label>Genre</Label>
                    <Input {...register('genre',{required: true})} />
                    {errors.genre && <p className='text-red-500 text-sm'>Genre is required.</p>}
                </div>

                <div>
                    <Label>Rating</Label>
                    <Input {...register('rating',{required: true, valueAsNumber:true})} type='number' />
                    {errors.rating && <p className='text-red-500 text-sm'>Rating is required.</p>}
                </div>

                <div>
                    <Label>Total Copies</Label>
                    <Input {...register('totalCopies',{required: true, valueAsNumber: true})} />
                    {errors.totalCopies && <p className='text-red-500 text-sm'>Total Copies is required.</p>}
                </div>

                <div>
                    <Label>Available Copies</Label>
                    <Input {...register('availableCopies',{required: true, valueAsNumber:true})} />
                    {errors.availableCopies && <p className='text-red-500 text-sm'>Available Copies is required.</p>}
                </div>

                <div>
                    <Label>Cover URL</Label>
                    <Input {...register('coverUrl',{required: true})} />
                    {errors.coverUrl && <p className='text-red-500 text-sm'>Cover URL is required.</p>}
                </div>

                <div>
                    <Label>Cover Color</Label>
                    <Input {...register('coverColor',{required: true})} />
                    {errors.coverColor && <p className='text-red-500 text-sm'>Cover Color is required.</p>}
                </div>

                <div>
                    <Label>Video URL</Label>
                    <Input {...register('videoUrl',{required: true})} />
                    {errors.videoUrl && <p className='text-red-500 text-sm'>Video URL is required.</p>}
                </div>

                <div>
                    <Label>Summary</Label>
                    <Input {...register('summary',{required: true})} />
                    {errors.summary && <p className='text-red-500 text-sm'>Summary is required.</p>}
                </div>
            </div>

            <Button className='mt-4' type="submit">Submit</Button>
            
        </form>
    );
};

export default BookForm;