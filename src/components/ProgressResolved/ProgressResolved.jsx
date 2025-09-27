import React from 'react';
import bgVone from "../../assets/Frame1.png";

const ProgressResolved = ({ selectedTickets, resolvedTicket }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div
        className="flex-1 relative h-[250px] p-6 rounded-lg flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center bg-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to bottom, #632EE3, #9F62F2), url(${bgVone})`,
        }}
      >
        <h2 className="text-xl font-bold text-white drop-shadow-md">In Progress</h2>
        <span className="text-2xl font-semibold text-white drop-shadow-md">{selectedTickets.length}</span>
      </div>

      <div
        className="flex-1 h-[250px] p-6 rounded-lg flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center bg-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to right, #54CF68, #00827A), url(${bgVone})`,
        }}
      >
        <h2 className="text-xl font-bold text-white drop-shadow-md">Resolved</h2>
        <span className="text-2xl font-semibold text-white drop-shadow-md">{resolvedTicket.length}</span>
      </div>
    </div>
  );
};

export default ProgressResolved;