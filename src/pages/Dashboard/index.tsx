import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  const logout = async () => {
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login/logout`)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/loggedin`)
      } catch(err) {
        await router.push('/')
        setLoading(false)
      }
    }

    checkAuth()
    setLoading(false)
  }, [])

  return (
    <>
      {
        loading ?
          <div>Loading...</div>
        :
          <div>
            <h1>Dashboard</h1>
            <button onClick={logout}>Logout</button>
          </div>
      }
    </>
  )
}