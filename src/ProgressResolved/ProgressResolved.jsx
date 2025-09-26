import React from 'react';
import imageOne from "../assets/vector1.png"
const ProgressResolved = ({selectedTickets,resolvedTicket}) => {
    return (
      <div className="flex flex-col lg:flex-row gap-4">
      <div
          className="flex-1 relative h-[250px] p-6 rounded-lg flex flex-col items-center justify-center bg-gradient-to-r from-[#632EE3]/70 to-[#9F62F2]/70"
        //   style={{
        //     backgroundImage: `url(${imageOne})`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //   }}
        >
      <h2 className="text-xl font-bold text-white">In Progress</h2>
      <span className="text-2xl font-semibold text-white">{selectedTickets.length}</span>
    </div>

    <div className="flex-1 bg-gradient-to-r from-[#54CF68] to-[#00827A] p-6 rounded-lg flex flex-col items-center justify-center h-[250px]">
      <h2 className="text-xl font-bold text-white">Resolved</h2>
      <span className="text-2xl font-semibold text-white">{resolvedTicket.length}</span>
    </div>
  </div>

    );
};

export default ProgressResolved;