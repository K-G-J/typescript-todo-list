import React from 'react';
import { ITask } from '../interfaces';

interface TodoTaskProps {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

export const TodoTask: React.FC<TodoTaskProps> = ({ task, completeTask }) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button type="button" onClick={() => completeTask(task.taskName)}>
        X
      </button>
    </div>
  );
};

// import React from 'react';
// import { ITask } from '../interfaces';

// interface Props {
//   task: ITask;
// }

// const TodoTask = ({ task }: Props) => {
//   return (
//     <div>
//       {task.taskName} {task.deadline}
//     </div>
//   );
// };

// export default TodoTask;
