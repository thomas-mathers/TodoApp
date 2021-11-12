export interface TaskViewModel {
    description: string;
    dateCreated: Date;
    dateCompleted: Date | null;
    editing: boolean;
    bulkEditing: boolean;
}