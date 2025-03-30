"use client"

import {
  createColumnHelper,
} from '@tanstack/react-table'
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from "next/link"
import { BookData } from '@/type'

const columnHelper = createColumnHelper<BookData>()

export const columns =  [
  columnHelper.accessor("title", {
    header: () => <span>Title</span>,
  }),
  columnHelper.accessor("author", {
    header: () => <span>Author</span>,
  }),
  columnHelper.accessor("genre", {
    header: () => <span>Genre</span>,
  }),
  columnHelper.accessor("createdAt", {
    header: "Created At",
    cell: ({ row }) => row.original.createdAt ? row.original.createdAt.toLocaleDateString() : "N/A",
  }),
  columnHelper.display({
    id: "actions",
    cell: ({ row }) => {
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
              <DropdownMenuItem>Remove</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  }),
]