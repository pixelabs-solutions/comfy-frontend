import GraphChart from '@/app/admin/components/graph'
import StatisticsSection from '@/app/admin/components/StatisticsSection'
import React from 'react'
import ToggleSwitch from '../toogle'

const dashboard = () => {
  return (
    <>
     <div className='flex justify-between mb-8'>
   <div>
   <h1 className='text-[25px] font-bold '>Dashboard</h1>
   <p className='text-[#666777] text-sm my-2'>Monday, 29, April, 2024</p>
   </div>
        <ToggleSwitch />
     </div>
        <StatisticsSection />
        <div className='mt-8 mb-10'>
          <h2 className='text-[20px] font-bold'>Weekly Interactions</h2>
          <GraphChart />
        </div>

    </>
  )
}

export default dashboard