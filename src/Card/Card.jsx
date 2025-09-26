import React, { use } from 'react';
import CardTicket from '../CardTicket/CardTicket';

const Card = ({ ticketPromise,selectedTickets,setSelectedTicket }) => {
  const ticketData = use(ticketPromise); 

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {
      ticketData.map((ticket) => <CardTicket selectedTickets={selectedTickets} setSelectedTicket={setSelectedTicket} ticket={ticket}></CardTicket>)
      }
    </div>
  );
};

export default Card;
