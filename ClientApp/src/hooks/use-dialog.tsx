import { useContext } from 'react'
import { DialogContext } from '../dialog-context'

export const useDialog = () => {
    return useContext(DialogContext)
}