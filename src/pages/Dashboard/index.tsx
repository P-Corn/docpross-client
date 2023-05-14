import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import NavBar from '@/components/NavBar'
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';

export default function Dashboard() {
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  const logout = async () => {
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/logout`, { withCredentials: true })
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/loggedin`, { withCredentials: true })
        setLoading(false)
      } catch(err) {
        await router.push('/')
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  return (
    <>
      {
        loading ?
          <div>Loading...</div>
        :
          <div>
            <NavBar />
            <div className="container">
              <ContentWrapper title="Folders" items={[{ name: 'test' }, { name: 'pizaa' }]} />
            </div>
          </div>
      }
    </>
  )
}