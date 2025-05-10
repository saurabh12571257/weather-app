import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'
import { useGeolocation } from '@/hooks/use-geolocation'
import React from 'react'

const WeatherDashboard = () => {
  const { locationData, getLocation } = useGeolocation()
  const { coordinates, error, isLoading: locationLoading } = locationData

  const handleRefresh = () => {
    getLocation()
  }

  if (locationLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">My Location</h1>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleRefresh}
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
        <div className="rounded-lg border bg-card p-4 text-card-foreground">
          <p className="text-destructive">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleRefresh}
          disabled={locationLoading}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default WeatherDashboard

