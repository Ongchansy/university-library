"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Trash2 } from "lucide-react"
import { handleDelete } from "../actioin"

export type User = {
  id: string
  fullName: string,
  email: string,
  password: string,
  role: string,
  universityId: string,
  universityCard: string,
  createdAt: Date,
}

export type Users = User[]

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "universityId",
    header: "University ID",
  },
  {
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt)
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      return <div>{formattedDate}</div>
    }
  },
  {
    header: "Role",
    cell: ({ row }) => {
      const role = row.original.role
      if(role === "ADMIN") {
        return <div>
          <p className="bg-red-500 inline px-2 py-1 text-sm font-thin rounded-full">{row.original.role}</p>
        </div>
      }else{
        return <div>
          <p className="bg-green-500 inline px-2 py-1 text-sm font-thin rounded-full">{row.original.role}</p>
        </div>
      }
    }

  },
  {
    id: "actions",
    header: () => <div>Action</div>,
    cell: ({ row }) => {
      const id = row.original.id
 
      return (
        <div className="">
          <Trash2 onClick={() => handleDelete(id)} className="h-5 w-5 text-red-500 cursor-pointer" />
        </div>
      )
    },
  },
]
