import { BarCharts } from '@/components/charts/BarChart'
import DashboardCards from '@/components/DashboardCards'
import RecentSales from '@/components/RecentSales'
import React from 'react'

const page = () => {
  return (
    <div className="p-4">
        <h1 className="text-2xl font-semibold ">Dashboard</h1>
        <p className="mt-2 text-sm ">Welcome to the admin panel.</p>

        <div className="mt-4">
          <div className='mb-6'>
            <DashboardCards />
          </div>
          
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <BarCharts />
            <RecentSales />
          </div>
        </div>
    </div>
  )
}

export default page