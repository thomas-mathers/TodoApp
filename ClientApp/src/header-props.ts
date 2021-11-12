import { TaskViewModel } from "./view-models/task-view-model";

export interface HeaderProps {
    insertTask: (task: TaskViewModel) => void;
    deleteTasks: () => void;
    tasks: TaskViewModel[];
    darkTheme: boolean;
    setDarkTheme: (darkTheme: boolean) => void;
}