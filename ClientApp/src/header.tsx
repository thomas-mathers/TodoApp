import { Add, DarkMode, Delete, LightMode } from "@mui/icons-material";
import { AppBar, Box, Hidden, IconButton, Stack, TextField, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ChangeEvent, useState, Fragment } from "react";
import { HeaderProps } from "./header-props";
import { useDialog } from "./hooks/use-dialog";

const Header = (props: HeaderProps) => {
    const [description, setDescription] = useState<string>('');
    const dialog = useDialog();

    const handleClickInsert = () => {
        setDescription('');
        props.insertTask({ description: description, dateCreated: new Date(), dateCompleted: null, editing: false, bulkEditing: false });
    };

    const handleClickDelete = () => {
        dialog.confirm({ title: 'Confirm', message: 'Are you sure you wish to delete all tasks?', onClose: handleCloseConfirmDialog });
    }

    const handleCloseConfirmDialog = (confirmed: boolean) => {
        if (confirmed) {
            props.deleteTasks();
        }
    }

    const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    const toggleDarkMode = () => {
        props.setDarkTheme(!props.darkTheme);
    }

    return (
        <Fragment>
            <AppBar color="default" position="static">
                <Stack direction="row" spacing={1} alignItems="center" padding={2}>
                    <Hidden implementation="css" smDown>
                        <Typography variant="h5" marginRight={2}>Todo App</Typography>
                    </Hidden>
                    <Box flex="1">
                        <TextField
                            value={description}
                            onChange={handleChangeDescription}
                            variant="filled"
                            placeholder="Add new task..."
                            fullWidth
                            hiddenLabel/>
                    </Box>
                    <Tooltip title="Insert new task">
                        <IconButton size="small" color="primary" disabled={description.length == 0} onClick={handleClickInsert}>
                            <Add />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete all tasks">
                        <IconButton size="small" disabled={props.tasks.length == 0} onClick={handleClickDelete}>
                            <Delete />
                        </IconButton>
                    </Tooltip>
                    {
                        props.darkTheme ?
                            <Tooltip title="Light mode">
                                <IconButton size="small" onClick={toggleDarkMode}>
                                    <LightMode />
                                </IconButton>
                            </Tooltip>
                            :
                            <Tooltip title="Dark mode">
                                <IconButton size="small" onClick={toggleDarkMode}>
                                    <DarkMode />
                                </IconButton>
                            </Tooltip>
                    }
                </Stack>
            </AppBar>
        </Fragment>
    );
}

export { Header };
