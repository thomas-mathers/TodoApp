import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { TaskListItem } from "./task-list-item";
import { TaskListProps } from './task-list-props';

const TaskList = (props: TaskListProps) => (
    <AutoSizer>
        {({ height, width }) => (
            <List
                height={height}
                width={width}
                itemCount={props.tasks.length}
                itemSize={50}
                itemData={props}
            >
                {TaskListItem}
            </List>
        )}
    </AutoSizer>
)

export { TaskList };