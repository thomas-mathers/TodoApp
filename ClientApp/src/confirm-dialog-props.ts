export interface ConfirmDialogProps {
    open: boolean;
    title: string;
    message: string;
    handleClose: (confirm: boolean) => void;
}