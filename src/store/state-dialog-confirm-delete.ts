import {create} from 'zustand'

interface HabisStateDialogConfirm {
    isOpen: boolean;
    Close: () => void;
    toggle: () => void
}

export const useTaskConfirmDeleteAll = create<HabisStateDialogConfirm>((set,get) => ({
    isOpen: false,
    Close: () => set({isOpen: false}),
    toggle: () => set({isOpen: !get().isOpen})
   
}))