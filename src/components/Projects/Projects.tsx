import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column';
import { Task } from '../../types';
import { useSearchParams  } from 'react-router-dom';

const Projects = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [searchParams] = useSearchParams();
  const param = searchParams.get('projects');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(param ? `http://localhost:5000/todos?project=${param}` : 'http://localhost:5000/todos');
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Произошла неизвестная ошибка');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [searchParams]);

  const moveTask = (taskId: number, newStatus: 'To Do' | 'In progress' | 'Done') => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );

    const updateTaskStatus = async () => {
      try {
        const response = await fetch(`http://localhost:5000/todos/${taskId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ status: newStatus })
        });

        if (!response.ok) {
          throw new Error('Не удалось обновить задачу на сервере');
        }

        const updatedTask = await response.json();
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          )
        );
      } catch (err) {
        if (err instanceof Error) {
          console.error('Ошибка:', err.message);
        }
      }
    };

    updateTaskStatus();
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Column
          status="To Do"
          tasks={tasks.filter((task) => task.status === 'To Do')}
          moveTask={moveTask}
        />
        <Column
          status="In progress"
          tasks={tasks.filter((task) => task.status === 'In progress')}
          moveTask={moveTask}
        />
        <Column
          status="Done"
          tasks={tasks.filter((task) => task.status === 'Done')}
          moveTask={moveTask}
        />
      </div>
    </DndProvider>
  );
}

export default Projects