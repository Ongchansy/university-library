"use client"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ColumnDef } from "@tanstack/react-table"

interface SkeletonTableProps<TData> {
  columns: ColumnDef<TData>[]
  rows?: number
}

export const SkeletonTable = <TData,>({ columns, rows = 5 }: SkeletonTableProps<TData>) => {
  const getColumnKey = (column: ColumnDef<TData>): string | undefined => {
    if ('accessorKey' in column && typeof column.accessorKey === 'string') {
      return column.accessorKey
    }
    if ('id' in column && typeof column.id === 'string') {
      return column.id
    }
    return undefined
  }

  return (
    <div className="overflow-x-auto table-auto">
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="bg-indigo-50 p-4 text-left">
                {column.header ? (
                  typeof column.header === 'function' ? (
                    <div><Skeleton width={100} height={20} /></div>
                  ) : (
                    <Skeleton width={100} height={20} />
                  )
                ) : (
                  <Skeleton width={100} height={20} />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array(rows).fill(null).map((_, rowIndex) => (
            <tr key={rowIndex} className="border-t">
              {columns.map((column, cellIndex) => {
                const columnKey = getColumnKey(column)
                return (
                  <td key={cellIndex} className="p-4">
                    {columnKey === 'Image' ? (
                      <Skeleton circle width={40} height={40} />
                    ) : columnKey === 'actions' ? (
                      <div className="flex justify-center">
                        <Skeleton circle width={32} height={32} />
                      </div>
                    ) : (
                      <Skeleton width={getRandomWidth(columnKey)} height={20} />
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function getRandomWidth(columnKey?: string): number {
  switch(columnKey) {
    case 'title':
      return 120 + Math.random() * 80
    case 'author':
      return 100 + Math.random() * 60
    case 'genre':
      return 80 + Math.random() * 40
    case 'createdAt':
      return 90
    default:
      return 100 + Math.random() * 50
  }
}