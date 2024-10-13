import React from 'react';
import { useDrag } from 'react-dnd';
import { Task } from '../../types';

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: '8px',
        margin: '4px',
        backgroundColor: isDragging ? '#ddd' : '#fff',
        border: '1px solid #ccc',
        cursor: 'move'
      }}
    >
      {task.title}
    </div>
  );
};

export default TaskItem