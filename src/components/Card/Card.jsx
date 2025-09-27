import React, { use } from 'react';
import CardTicket from '../CardTicket/CardTicket';

const Card = ({ ticketPromise,selectedTickets,setSelectedTicket,resolvedTicket }) => {
  const ticketData = use(ticketPromise); 
  const filteredTickets = ticketData.filter(
    (ticket) => !resolvedTicket.some((resolved) => resolved.id === ticket.id)
  );
  return (
    <div className="w-full max-w-[1200px] mx-auto p-4">
    <div className="grid md:grid-cols-2 gap-4">
      {
      filteredTickets.map((ticket) => <CardTicket key={ticket.id} selectedTickets={selectedTickets} setSelectedTicket={setSelectedTicket} ticket={ticket}></CardTicket>)
      }
    </div>
    </div>
  );
};

export default Card;
