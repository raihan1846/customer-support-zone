import React from 'react';
import ResolveTask from '../ResolveTask/ResolveTask';

const TaskStatus = () => {
    return (
        <div className="card card-dash bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">Payment Failed - Card Declined</h2>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TaskStatus;