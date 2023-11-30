import React, { useState, useEffect } from 'react';
import KanbanColumn from './KanbanColumn';
import './index.css';

// Mock data, since I cannot fetch from an API
const mockTickets = [
  { id: 1, title: 'Fix login bug', status: 'Todo', priority: 2, user: 'User A' },
  { id: 2, title: 'Update user profile page', status: 'In Progress', priority: 3, user: 'User B' },
  // Add more mock tickets here
];

const App = () => {
  const [tickets, setTickets] = useState(mockTickets); // Replace mockTickets with fetched data
  const [grouping, setGrouping] = useState('status'); // Initial grouping

  // This effect would fetch data from the API if we could
  useEffect(() => {
    // Fetch tickets from the API and set them in state
    // setTickets(fetchedData);
  }, []);

  // This would be the logic to group tickets by the selected method
  const groupedTickets = groupBy(tickets, grouping);

  return (
    <div className="App">
      {Object.keys(groupedTickets).map((group) => (
        <KanbanColumn key={group} group={group} tickets={groupedTickets[group]} />
      ))}
    </div>
  );
};

// Helper function to group tickets
function groupBy(array, key) {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
}

export default App;
