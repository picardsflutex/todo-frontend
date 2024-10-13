import React from 'react';
import { useDrop } from 'react-dnd';
import { Task } from '../../types';
import TaskItem from './TaskItem';

const Column: React.FC<{
  status: 'To Do' | 'In progress' | 'Done';
  tasks: Task[];
  moveTask: (taskId: number, status: 'To Do' | 'In progress' | 'Done') => void;
}> = ({ status, tasks, moveTask }) => {
  const [, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item: { id: number }) => moveTask(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  return (
    <div
      ref={drop}
      style={{
        padding: '16px',
        width: '300px',
        minHeight: '400px',
        margin: '8px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc'
      }}
    >
      <h3>{status}</h3>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column