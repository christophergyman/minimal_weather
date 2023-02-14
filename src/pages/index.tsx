import NavBar from '@/components/navbar'
import GeoLocation from '@/components/geo_location'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Home() { return (
    <div className='flex flex-col items-center'>
      <NavBar/>
      <div className='pt-52'>
        <GeoLocation/>
      </div>
    </div>
  )
}
