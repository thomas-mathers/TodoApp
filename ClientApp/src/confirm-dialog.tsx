import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import { forwardRef } from "react";
import { ConfirmDialogProps } from "./confirm-dialog-props";

const Transition = forwardRef(function Transition(props: any, ref:any) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmDialog = (props: ConfirmDialogProps) => {
    return (
        <Dialog
            open={props.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={(e, reason) => props.handleClose(false)}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => props.handleClose(false)}>No</Button>
                <Button onClick={(e) => props.handleClose(true)}>Yes</Button>
            </DialogActions>
        </Dialog>
    );
}

export { ConfirmDialog }