import NavBar from '@/components/navbar'
import GeoLocation from '@/components/geo_location'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Home() { return (
    <div>
      <NavBar/>
      <div className='pt-20'>
        <GeoLocation/>
      </div>
    </div>
  )
}
