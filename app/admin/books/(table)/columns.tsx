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
import { BookData } from "@/type"
import { deleteBook } from '../action/book';

export const columns: ColumnDef<BookData>[] = [
  {
    accessorKey: "title",
    header: () => <div>Title</div>,
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "createdAt",
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt ? row.original.createdAt : "N/A" );
      return format(date, "dd/MM/yyyy"); // Outputs: 01/04/2024
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