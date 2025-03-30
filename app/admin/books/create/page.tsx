"use client"
import BookForm from '@/components/admin/form/BookForm'
import { Button } from '@/components/ui/button'
import { MoveLeft } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className="p-4">
        <Button 
            variant={"outline"}
            className="back-btn"
            onClick={() => {
                 window.history.back()
            }}
        >
            <MoveLeft size={16} className="inline-block mr-2"/>
            Go Back</Button>

        <section >
          <BookForm />
        </section>
    </div>
  )
}

export default page