import { Cancel, CheckCircle, Circle, Delete, Done, Edit } from "@mui/icons-material";
import { Checkbox, IconButton, Box, Stack, TextField, Tooltip, Typography, Slide, Zoom, Grow } from "@mui/material";
import { ChangeEvent, Fragment, useState } from "react";
import { useDialog } from "./hooks/use-dialog";
import { TaskListItemProps } from "./task-list-item-props";

const TaskListItem = (props: TaskListItemProps) => {
    const dialog = useDialog();

    const tasks = props.data.tasks;
    const index = props.index;

    let task = tasks[index];

    const [description, setDescription] = useState<string>(task.description);

    const handleEdit = () => {
        props.data.updateTask({ ...task, editing: true }, index);
    }

    const handleConfirmEdit = () => {
        props.data.updateTask({ ...task, description: description, editing: false }, index);
    }

    const handleDiscardEdit = () => {
        setDescription(task.description);

        props.data.updateTask({ ...task, editing: false }, index);
    }

    const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    const handleCompleteToggle = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        props.data.updateTask({ ...task, dateCompleted: checked ? new Date() : null, editing: false }, index);
    }

    const handleDelete = () => {
        dialog.confirm({ title: 'Confirm', message: 'Are you sure you wish to delete this task?', onClose: handleCloseConfirmDialog });
    }

    const handleCloseConfirmDialog = (confirmed: boolean) => {
        if (confirmed) {
            props.data.deleteTask(index);
        }
    }

    return (
        <div style={props.style}>
            <Grow in={true}>
                <Stack direction="row" alignItems="center" spacing={1} padding={2}>
                    <Checkbox edge="start" checked={task.dateCompleted !== null} onChange={handleCompleteToggle} icon={<Circle />} checkedIcon={<CheckCircle />} />
                    <Box flex="1" overflow="hidden">
                        {
                            task.editing ?
                                <TextField variant="standard" value={description} onChange={handleChangeDescription} hiddenLabel fullWidth />
                                :
                                <Typography variant="body1" className={task.dateCompleted !== null ? 'task-description complete' : 'task-description'}>{task.description}</Typography>
                        }
                    </Box>
                    {
                        task.dateCompleted == null &&
                        <Stack direction="row">
                            {
                                task.editing ?
                                    <Fragment>
                                        <Tooltip title="Done">
                                            <IconButton onClick={handleConfirmEdit}>
                                                <Done />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Cancel">
                                            <IconButton onClick={handleDiscardEdit}>
                                                <Cancel />
                                            </IconButton>
                                        </Tooltip>
                                    </Fragment>
                                    :
                                    <Fragment>
                                        <Tooltip title="Edit">
                                            <IconButton onClick={handleEdit}>
                                                <Edit />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton onClick={handleDelete}>
                                                <Delete />
                                            </IconButton>
                                        </Tooltip>
                                    </Fragment>
                            }
                        </Stack>
                    }
                </Stack>
            </Grow>
        </div>
    );
};

export { TaskListItem };
