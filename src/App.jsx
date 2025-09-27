import { Suspense, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import ProgressResolved from './components/ProgressResolved/ProgressResolved';
import TaskStatus from './components/TaskStatus/TaskStatus';
import Footer from './components/Footer/Footer';

const fetchData = async () => {
  const res = await fetch('/ticket.json');
  return res.json();
};
const ticketPromise = fetchData();

function App() {
  const [selectedTickets, setSelectedTicket] = useState([]);
  const [resolvedTicket, setResolveTicket] = useState([]);

  return (
    <>
    <div className="w-full max-w-[1200px] mx-auto p-4">
      <Navbar></Navbar>
      <ProgressResolved
        selectedTickets={selectedTickets}
        setSelectedTicket={setSelectedTicket}
        resolvedTicket={resolvedTicket}
      ></ProgressResolved>
      <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <div className="w-full md:w-[900px]">
            <h2 className="text-xl font-semibold mb-6">Customer Tickets</h2>
            <Card
              resolvedTicket={resolvedTicket}
              setResolveTicket={setResolveTicket}
              ticketPromise={ticketPromise}
              selectedTickets={selectedTickets}
              setSelectedTicket={setSelectedTicket}
            >
            </Card>
          </div>
          <div className="w-full md:w-[300px]">
            <h1 className="text-xl font-bold mb-6">Task Status</h1>
            <TaskStatus
              selectedTickets={selectedTickets}
              setSelectedTicket={setSelectedTicket}
              resolvedTicket={resolvedTicket}
              setResolveTicket={setResolveTicket}
            >
            </TaskStatus>
          </div>
        </div>
      </Suspense>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;