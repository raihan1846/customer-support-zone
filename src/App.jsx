
import { Suspense } from 'react'
import './App.css'
import Card from './Card/Card'
import Navbar from './Navbar/Navbar'
import ProgressResolved from './ProgressResolved/ProgressResolved'
import TaskStatus from './TaskStatus/TaskStatus'

const fetchData = async ()=>{
     const res = await fetch("/ticket.json")
      return res.json()
}
                   
function App() {
  const ticketPromise = fetchData()

  return (
    <div className="w-full max-w-[1200px] mx-auto p-2">
      <>
        <Navbar></Navbar>
        <ProgressResolved></ProgressResolved>
        <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
          <div className='flex mt-20'>
            <div className='w-[900px]'>
              <h2 className='text-xl font-semibold mb-10'>Customer Tickets</h2>
              <Card ticketPromise={ticketPromise}></Card>

            </div>
            <div className='w-[300px]'>
              <h1 className='text-xl font-semibold mb-10'>Task Status</h1>
              <TaskStatus></TaskStatus>
            </div>

          </div>
        </Suspense>
      </>
    </div>

  )
}

export default App
