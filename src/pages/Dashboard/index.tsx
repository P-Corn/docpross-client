import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import NavBar from '@/components/NavBar'
import {Card} from 'primereact/card'
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';

interface Item {
  name: string;
}

interface FolderItemProps {
  item: Item;
  index: number ;
}

const FolderItem: React.FC<FolderItemProps> = ({ item, index }) => (
  <div className="col-4">
    <Card className="content-card bg-primary-100" key={index}>
      {item.name}
    </Card>
  </div>
)

export default function Dashboard() {
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

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
              <ContentWrapper title="Folders" component={FolderItem} items={[{ name: 'test' }, { name: 'pizaa' }]} />
              <ContentWrapper title="Files" component={FolderItem} items={[{ name: 'test' }, { name: 'pizaa' }]} />
            </div>
          </div>
      }
    </>
  )
}