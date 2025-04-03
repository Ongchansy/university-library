import { SearchForm } from '@/components/search-form'
import React, { Suspense } from 'react'
import MainTable from './(table)/main-table'
import { SkeletonTable } from '@/components/SkeletonTable'
import { BorrowBookModel } from '@/type'
import { columns } from './(table)/columns'
import { getBorrowRecord } from '@/lib/action/borrowBook'

const page = async () => {
  const rawBorrowRecord = await getBorrowRecord()
  return (
    <div className="p-4 overflow-auto">
            <div className='flex justify-between items-center mb-4 mt-2'>
                <div>
                    <h1 className="text-2xl font-semibold text-sidebar-foreground">Users Management</h1>
                </div>
    
                <SearchForm />
            </div>
    
            <div>
              <Suspense fallback={<SkeletonTable<BorrowBookModel> columns={columns} rows={rawBorrowRecord.length} />}>
                <MainTable />
              </Suspense>
            </div>
    </div>
  )
}

export default page