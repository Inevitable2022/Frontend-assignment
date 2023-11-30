import React from 'react';

const KanbanCard = ({ ticket }) => (
  <div>
    <h3>{ticket.title}</h3>
    <p>Priority: {ticket.priority}</p>
    <p>Assigned to: {ticket.user}</p>
  </div>
);

export default KanbanCard;
