import { getUsers } from '@/services/actions'
import HomeClient from './client'

export const runtime = 'edge'

export default async function Home() {
  const users = await getUsers()
  return <HomeClient users={users} />
}
