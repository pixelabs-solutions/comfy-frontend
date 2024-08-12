import React from 'react'
import StatisticsSection from '../components/StatisticsSection'
import GraphChart from '../components/graph'
const dashboard = () => {
  return (
    <>
        <h1 className='text-[25px] font-bold '>Dashboard</h1>
        <p className='text-[#666777] text-sm my-2'>Monday, 29, April, 2024</p>
        <div className='w-full flex justify-end gap-5'>
            <button className='bg-[#E1F2E5] rounded-full flex gap-2 py-1 px-2 items-center text-[#656676]'>
              <div className='bg-[#34A853] h-2 w-2 rounded-full'></div>
              <span className=''>Active Interpreters</span>
              <p className='font-bold'>278</p>
            </button>
            <select name="" id="" className='bg-[#F5F7F9] px-2 '>
              <option value="" className='bg-[#F5F7F9]'>Weekly</option>
              <option value="" className='bg-[#F5F7F9]'>Daily</option>
              <option value="" className='bg-[#F5F7F9]'>Monthly</option>
            </select>
        </div>
        <StatisticsSection/>
        <div className='mt-8 mb-10'>
          <h2 className='text-[20px] font-bold'>Weekly Interactions</h2>
          <GraphChart />
        </div>

    </>
  )
}

export default dashboard