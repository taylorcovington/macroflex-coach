"use client"

import { Children, cloneElement, createContext, useContext, useEffect, useMemo, useState } from "react"
import { supabase } from "@/utils/supabaseClient"
import Sidebar from "../components/Sidebar"
import Login from "../login"

interface Props {
  children: React.ReactNode
}

const AuthContext = createContext({})

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null)
  const onAuthStateChange = async () => {
    const { data: { user } } = await supabase.auth.getUser()
  
      console.log('user: ', user)
      if (user) {
        // TODO: fix subabase types
        // @ts-ignore
        setUser(user)
      } else {
        setUser(user)
      }
    }
  
    useEffect(() => {
      onAuthStateChange()
    }, [])

    const value  = useMemo(() => ({ user, signOut: () => supabase.auth.signOut() }), [user])

    return <AuthContext.Provider value={value}>
      { 
        !user ? <Login /> : 
          <>
            <Sidebar />
              {
                Children.map(children, (child) => {
                // Clone the child element and add props
                // @ts-ignore
                return cloneElement(child, { color: 'blue' });
              })}
          </>
        }
    </AuthContext.Provider>
}

export const useAuthContext = () => {
  // @ts-ignore TODO need to fix this
  const { user, signOut } = useContext(AuthContext)
  return { user, signOut }
}

// auth.uid() == user_id
