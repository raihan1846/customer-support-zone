import React from 'react';
import ResolveTask from '../ResolveTask/ResolveTask';

const TaskStatus = ({selectedTickets = [],setSelectedTicket,resolvedTicket, setResolveTicket}) => {

    const handleResolve = (id) =>{
        const  resolved = selectedTickets.find(ticket=>ticket.id === id)

        if (resolved) {
            setResolveTicket(p=>[...p,resolved])
            setSelectedTicket(p=>p.filter(ticket=>ticket.id !==id))
        }
    }
    return (
        <div className="flex flex-col gap-4">
        {selectedTickets.map((ticket) => (
          <div
            className="card card-dash bg-base-100 w-96 shadow-md"
          >
            <div className="card-body">
              <h2 className="card-title">
                {ticket.title}{" "}
                <span className="text-sm text-gray-500">(#{ticket.count})</span>
              </h2>
              <div className="card-actions">
                <button onClick={()=>handleResolve(ticket.id)} className="btn btn-primary">Resolve</button>
              </div>
            </div>
          </div>
        ))}

{
    resolvedTicket.map((ticket)=>
    <div>
            <h2>{ticket.title}</h2>
            <h2>Test -2</h2>
        </div>
    )
}
        
      </div>
    );
};

export default TaskStatus;