import Image from 'next/image'
import MiniProfile from './components/MiniProfile'
import Suggestions from './components/Suggestions'


export default function Home() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
      <section className='col-span-2'>
        <div></div>
      </section>
      <section className='hidden xl:inline-grid md:col-span-1'>
       <div className='fixed top-20'>
       <MiniProfile />
       <Suggestions />
       </div>
      </section>
    </div>
  )
}
