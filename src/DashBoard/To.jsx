
import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const To = () => {
  const [tasks, setTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/task')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setOngoingTasks(data.filter((task) => task.status === 'ongoing'));
        setCompletedTasks(data.filter((task) => task.status === 'completed'));
      });
  }, []);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];

    const [reorderedItem] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, reorderedItem);

    
    const draggedTask = { ...reorderedItem, status: getStatusFromDroppableId(result.destination.droppableId) };

   
    updatedTasks.splice(result.destination.index, 0, draggedTask);

    setTasks(updatedTasks);

    const updatedOngoingTasks = updatedTasks.filter((task) => task.status === 'ongoing');
    const updatedCompletedTasks = updatedTasks.filter((task) => task.status === 'completed');

    setOngoingTasks(updatedOngoingTasks);
    setCompletedTasks(updatedCompletedTasks);
  };

  const getStatusFromDroppableId = (droppableId) => {
    switch (droppableId) {
      case 'ongoing-tasks':
        return 'ongoing';
      case 'completed-tasks':
        return 'completed';
      default:
        return 'todo';
    }
  };

  return (
    <div className='grid grid-cols-3 gap-4 mt-11'>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="all-tasks">
          {(provided) => (
            <div className="bg-slate-200 p-10 rounded-xl" {...provided.droppableProps} ref={provided.innerRef}>
              <h1 className='text-2xl font-semibold text-center text-black mb-2'>All tasks</h1>
              <ul>
                {tasks.map(({ _id, title, description }, index) => (
                  <Draggable key={_id} draggableId={_id} index={index}>
                    {(provided) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>


                        <div className="card w-[19rem] -ml-[10px] bg-base-100 shadow-xl">
                          <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>

                          </div>
                        </div>
                        <br />

                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>

        <Droppable droppableId="ongoing-tasks">
          {(provided) => (
            <div className="bg-slate-200 p-10 rounded-xl" {...provided.droppableProps} ref={provided.innerRef}>

              <h1 className='text-2xl font-semibold text-center text-red-800 mb-2'>Ongoing</h1>
              <ul className="">
                {ongoingTasks.map(({ _id, title, description }, index) => (
                  <Draggable key={_id} draggableId={_id} index={index}>
                    {(provided) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div className="card w-[19rem] -ml-[10px] bg-base-100 shadow-xl">
                          <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>

                          </div>
                        </div>

                          <br />
                        
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>

        <Droppable droppableId="completed-tasks">
          {(provided) => (
            <div className="bg-slate-200 p-10 rounded-xl" {...provided.droppableProps} ref={provided.innerRef}>
             <h1 className='text-2xl font-semibold text-center text-green-800 mb-2'>Completed</h1>
              <ul className="">
                {completedTasks.map(({ _id, title,description }, index) => (
                  <Draggable key={_id} draggableId={_id} index={index}>
                    {(provided) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                         <div className="card w-[19rem] -ml-[10px] bg-base-100 shadow-xl">
                          <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>

                          </div>
                        </div>
                        <br />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default To;





