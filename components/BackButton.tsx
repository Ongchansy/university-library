"use client"
import React from 'react'
import { Button } from './ui/button'
import { MoveLeft } from 'lucide-react'

const BackButton = () => {
  return <Button
            variant={"outline"}
            className="back-btn "
            onClick={() => {
                 window.history.back()
            }}
        >
            <MoveLeft size={16} className="inline-block mr-2"/>
            Go Back
        </Button>
}

export default BackButton