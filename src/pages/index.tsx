import NavBar from '@/components/navbar'
import GeoLocation from '@/components/geo_location'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Display_box from '@/components/display_box'

export default function Home() { return (
    <div>
      <NavBar/>
      <div className='pt-20'>
        <GeoLocation/>
      </div>

      <div className='pt-20'>
        <Display_box/>
      </div>

    </div>
  )
}
