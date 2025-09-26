
import { Suspense, use, useState } from 'react'
import './App.css'
import Card from './Card/Card'
import Navbar from './Navbar/Navbar'
import ProgressResolved from './ProgressResolved/ProgressResolved'
import TaskStatus from './TaskStatus/TaskStatus'

const fetchData = async ()=>{
     const res = await fetch("/ticket.json")
      return res.json()
}
  const ticketPromise = fetchData()
                   
function App() {
const [selectedTickets, setSelectedTicket] = useState([])
const [resolvedTicket, setResolveTicket] = useState([])
  return (
    <div className="w-full max-w-[1200px] mx-auto p-2">
      <>
        <Navbar></Navbar>
        <ProgressResolved selectedTickets={selectedTickets} setSelectedTicket={setSelectedTicket} resolvedTicket={resolvedTicket}></ProgressResolved>
        <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
          <div className='flex mt-20'>
            <div className='w-[900px]'>
              <h2 className='text-xl font-semibold mb-10'>Customer Tickets</h2>
              <Card ticketPromise={ticketPromise} selectedTickets={selectedTickets} setSelectedTicket={setSelectedTicket}></Card>

            </div>
            <div className='w-[300px]'>
              <h1 className='text-xl font-semibold mb-10'>Task Status</h1>
              <TaskStatus selectedTickets={selectedTickets} setSelectedTicket={setSelectedTicket} resolvedTicket={resolvedTicket} setResolveTicket={setResolveTicket}></TaskStatus>
            </div>

          </div>
        </Suspense>
      </>
    </div>

  )
}

export default App
