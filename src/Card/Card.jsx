import React, { use } from 'react';
import imageCl from "../assets/ri_calendar-line.png";

const Card = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise); // only works with React 18 experimental

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {ticketData.map((ticket) => 
        <div
          key={ticket.id}
          className="bg-white shadow-lg rounded-xl"
        >
          <div className="p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                {ticket.title}
              </h2>
              <div className="flex items-center bg-green-100 rounded-full px-3 py-1 gap-2">
                <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                <p className="text-sm font-medium text-green-700 uppercase">
                  {ticket.status}
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              {ticket.description.length > 100
                ? ticket.description.slice(0, 100) + "..."
                : ticket.description}
            </p>
            <div className="flex justify-between items-center gap-4">
              <div className="flex justify-between items-center gap-2">
                <span>#{ticket.customer.id}</span>
                <h3 className="font-semibold text-red-600">
                  {ticket.priority.toUpperCase()} PRIORITY
                </h3>
              </div>
              <div className="flex justify-between items-center gap-2">
                <h3>{ticket.customer.name}</h3>
                <span className="flex items-center gap-1">
                  <img className="w-2 h-2" src={imageCl} alt="" />
                  {new Date(ticket.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
