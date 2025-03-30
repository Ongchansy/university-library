"use client"

import { ColumnDef } from "@tanstack/react-table"
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
import { BookData } from "@/type"

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
    cell: ({ row }) => (row.original.createdAt ? row.original.createdAt.toLocaleDateString() : "N/A"),
  },
  {
    id: "actions",
    header: () => <div>Action</div>,
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
  },
]