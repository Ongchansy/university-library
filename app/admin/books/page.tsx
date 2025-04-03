import { SearchForm } from '@/components/search-form'
import React, { Suspense } from 'react'
import MianTable from './(table)/main-table'
import { SkeletonTable } from '@/components/SkeletonTable'
import { columns } from './(table)/columns'
import { getBook } from '@/lib/action/book'
import { BookData } from '@/type'

const page = async () => {
  const rawBookData = await getBook()
  return (
    <div className="p-4 overflow-auto">
        <div className='flex justify-between items-center mb-4 mt-2'>
            <div>
                <h1 className="text-2xl font-semibold text-sidebar-foreground">Users Management</h1>
            </div>

            <SearchForm />
        </div>

        <div>
          <Suspense fallback={<SkeletonTable<BookData> columns={columns} rows={rawBookData.length} />}>
            <MianTable />
          </Suspense>
        </div>
    </div>
  )
}

export default page