import { TaskViewModel } from "./view-models/task-view-model";

export interface TaskListProps {
    tasks: TaskViewModel[];
    updateTask: (task: TaskViewModel, index: number) => void;
    deleteTask: (index: number) => void;
}