import { useState } from "react"
import { ConfirmDialog } from "./confirm-dialog"
import { DialogContext, IDialogContext, IDialogOptions } from "./dialog-context";

const DialogProvider = (props: any) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<IDialogOptions>({ title: 'Confirm', message: 'Are you sure you wish to perform this action?' });

    const handleConfirm = (options: IDialogOptions) => {
        setOpen(true);
        setOptions(options);
    }

    const handleClose = (confirm: boolean) => {
        setOpen(false);
        if (options.onClose) {
            options.onClose(confirm);
        }
    }

    const provider: IDialogContext = {
        confirm: handleConfirm
    }

    return (
        <DialogContext.Provider value={provider}>
            {props.children}
            <ConfirmDialog open={open} title={options.title} message={options.message} handleClose={handleClose} />
        </DialogContext.Provider>
    )
}

export { DialogProvider }