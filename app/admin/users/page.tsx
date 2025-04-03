import { SearchForm } from '@/components/search-form'
import React, { Suspense } from 'react'
import MianTable from './(table)/main-table'
import { SkeletonTable } from '@/components/SkeletonTable'
import { User } from '@/type'
import { columns } from './(table)/columns'
import { getUser } from '@/lib/action/user'

const page = async () => {
  const rawUser = await getUser()
  return (
    <div className="p-4">
        <div className='flex justify-between items-center mb-4 mt-2'>
            <div>
                <h1 className="text-2xl font-semibold text-sidebar-foreground">Users Management</h1>
            </div>

            <SearchForm />
        </div>

        <div>
          <Suspense fallback={<SkeletonTable<User> columns={columns} rows={rawUser.length} />}>
            <MianTable />
          </Suspense>
        </div>
    </div>
  )
}

export default page