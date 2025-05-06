import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'
import React from 'react'

const WeatherDashboard = () => {
  return (
    <div className='space-y-4'>
        {/*fav cities*/}
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold tracking-tight'> My Location </h1>
        <Button variant="outline" size="icon" 
        // onClick={handleRefresh} 
        // disabled={}
        >
            <RefreshCw className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}
export default WeatherDashboard

