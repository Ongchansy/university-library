"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import {BorrowBookModel } from "@/type"
import { deleteBook } from "@/lib/action/book";
import Image from "next/image";

export const columns: ColumnDef<BorrowBookModel>[] = [
  {
    accessorKey: "Image",
    cell: ({ row }) => {
      const coverUrl = row.original.coverUrl
      return <Image src={coverUrl} alt="book image" height={40} width={40} /> // Outputs: 01/04/2024
    },
  },
  {
    accessorKey: "Title",
    cell: ({ row }) => {
      const title =  row.original.title;
      return <p>{title}</p>; // Outputs: 01/04/2024
    },
  },
  {
    accessorKey: "Author",
    cell: ({ row }) => {
      const author =  row.original.author;
      return <p>{author}</p>; // Outputs: 01/04/2024
    },
  },
  {
    accessorKey: "Borrow Date",
    cell: ({ row }) => {
      const date = new Date(row.original.borrowDate ? row.original.borrowDate : "N/A" );
      return format(date, "dd/MM/yyyy"); // Outputs: 01/04/2024
    },
  },
  {
    accessorKey: "Due Date",
    cell: ({ row }) => {
      const date = new Date(row.original.dueDate ? row.original.dueDate : "N/A" );
      return format(date, "dd/MM/yyyy"); // Outputs: 01/04/2024
    },
  },
  {
    accessorKey:"Status",
    cell: ({ row }) => {
      const status =  row.original.status;
      if(status === "BORROWED") {
        return <p className="bg-red-500 inline px-2 py-1 text-sm font-thin rounded-full">{status}</p>
      }else{
        return <p className="bg-green-500 inline px-2 py-1 text-sm font-thin rounded-full">{status}</p>
      } // Outputs: 01/04/2024
    },
  },
  {
    id: "actions",
    header: () => <div>Action</div>,
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <Link href={"/admin/books/edit/" + row.original.id}>
                  <DropdownMenuItem>
                    Edit
                  </DropdownMenuItem>
                </Link>
              <DropdownMenuItem 
                onClick={ () => {
                  if(id) deleteBook(id)
                }}
              >Remove</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]