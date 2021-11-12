export interface Task {
    description: string;
    dateCreated: Date;
    dateCompleted: Date | null;
}