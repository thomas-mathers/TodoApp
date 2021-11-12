import { createContext } from "react"

export interface IDialogOptions {
    title: string,
    message: string,
    onClose?: (confirm: boolean) => void
}

export interface IDialogContext {
    confirm: (options: IDialogOptions) => void
}

const DEFAULT_CONTEXT: IDialogContext = {
    confirm: (options: IDialogOptions) => {}
}

export const DialogContext = createContext(DEFAULT_CONTEXT);