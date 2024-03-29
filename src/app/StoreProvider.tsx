'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/redux/store'
import { SessionProvider, useSession } from 'next-auth/react'

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return (
    <SessionProvider>
       <Provider store={storeRef.current}>{children}</Provider>
    </SessionProvider>
   
  )
  
}