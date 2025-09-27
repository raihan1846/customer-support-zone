import React from 'react';
const TaskStatus = ({ selectedTickets = [], setSelectedTicket, resolvedTicket, setResolveTicket }) => {

  const handleResolve = (id) => {
    const resolved = selectedTickets.find(ticket => ticket.id === id)

    if (resolved) {
      setResolveTicket(p => [...p, resolved])
      setSelectedTicket(p => p.filter(ticket => ticket.id !== id))
    }
  }
  return (
    <div className="flex flex-col gap-4">
      {
        selectedTickets.length === 0 ? (
          <p className="text-gray-500">Select a ticket to add to Task Status</p>
        ) :
          selectedTickets.map((ticket) => (
            <div key={ticket.id} className="card card-dash bg-base-100 w-96 shadow-md" >
              <div className="card-body">
                <h2 className="card-title">
                  {ticket.title}
                </h2>
                <div className="card-actions">
                  <button onClick={() => handleResolve(ticket.id)} className="btn btn-primary w-full">Completed</button>
                </div>
              </div>
            </div>
          ))}
      <h2>Resove Task</h2>
      {
        resolvedTicket.length === 0 ? (<p className="text-gray-500">No resolved tasks yet.</p>) :
          resolvedTicket.map((ticket) =>
            <div key={ticket.id} className="card card-dash bg-gray-100 w-96 shadow-md" >
              <div className="card-body">
                <h2 className="card-title">{ticket.title}</h2>
                <div className="flex justify-between">
                  <p className="text-green-500">✔ Completed</p>
                  <p className="text-black-100 text-end">Click to remove</p>
                </div>
              </div>
            </div>
          )
      }

    </div>
  );
};

export default TaskStatus;
