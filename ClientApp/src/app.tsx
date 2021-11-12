import { Box, Container, createTheme, CssBaseline, Stack } from '@mui/material';
import "./app.css";
import { Header } from './header';
import { useLocalStorage } from './hooks/use-local-storage';
import { TaskList } from './task-list';
import { TaskViewModel } from './view-models/task-view-model';
import { DialogProvider } from './dialog-provider';
import { ThemeProvider } from '@emotion/react';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const lightTheme = createTheme({
    palette: {
        mode: 'light'
    }
});

const App = (props: any) => {
    const [tasks, setTasks] = useLocalStorage<TaskViewModel[]>('tasks', []);
    const [useDarkTheme, setUseDarkTheme] = useLocalStorage<boolean>('darkTheme', true);

    const insertTask = (task: TaskViewModel) => {
        setTasks(tasks.concat(task));
    }

    const updateTask = (task: TaskViewModel, index: number) => {
        setTasks(tasks.map((v, i) => i === index ? task : v));
    }

    const deleteTask = (index: number) => {
        setTasks(tasks.filter((v, i) => i !== index));
    }

    const deleteTasks = () => {
        setTasks([]);
    }

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
            <DialogProvider>
                <CssBaseline />
                <Container maxWidth="md" disableGutters>
                    <Stack className="full-height">
                        <Header tasks={tasks} insertTask={insertTask} deleteTasks={deleteTasks} darkTheme={useDarkTheme} setDarkTheme={setUseDarkTheme} />
                        <Box flex={1}>
                            <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
                        </Box>
                    </Stack>
                </Container>
            </DialogProvider>
        </ThemeProvider>
    );
};

export default App;