import React from 'react';
import ResolveTask from '../ResolveTask/ResolveTask';

const TaskStatus = ({selectedTickets = []}) => {
    return (
        <div className="flex flex-col gap-4">
        {selectedTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="card card-dash bg-base-100 w-96 shadow-md"
          >
            <div className="card-body">
              <h2 className="card-title">
                {ticket.title}{" "}
                <span className="text-sm text-gray-500">(#{ticket.count})</span>
              </h2>
              <div className="card-actions">
                <button className="btn btn-primary">Resolve</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default TaskStatus;