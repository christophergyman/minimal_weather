import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/navbar'
import CurrentWeather from '@/components/currentWeather'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()

const inter = Inter({ subsets: ['latin'] })

export default function Home() { return (
    <div>
      <NavBar/>
      <CurrentWeather/>
    </div>
  )
}
