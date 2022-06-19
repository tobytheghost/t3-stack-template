import { trpc } from '@/utils/trpc'
import { NextPage } from 'next'

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['hello'])

  if (isLoading) return <div>Loading...</div>

  return (
    <div className='h-screen w-screen text-center flex flex-col align-middle justify-center'>
      <h1 className='text-3xl font-bold underline'>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h1>
      {data ? <span>{data.greeting}</span> : ''}
    </div>
  )
}

export default Home
