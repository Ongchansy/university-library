import { SearchForm } from '@/components/search-form'
import React from 'react'
import MianTable from './(table)/main-table'

const page = () => {
  return (
    <div className="p-4 overflow-auto">
        <div className='flex justify-between items-center mb-4 mt-2'>
            <div>
                <h1 className="text-2xl font-semibold text-sidebar-foreground">Users Management</h1>
            </div>

            <SearchForm />
        </div>

        <div>
            <MianTable />
        </div>
    </div>
  )
}

export default page