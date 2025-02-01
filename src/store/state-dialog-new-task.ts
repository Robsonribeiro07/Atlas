import {create} from 'zustand'

interface NewTaskState {
    isOpen: boolean;
    Close: () => void;
    toggle: () => void
}

export const useStateNewTaskDialog = create<NewTaskState>((set,get) => ({
    isOpen: false,
    Close: () => set({isOpen: false}),
    toggle: () => set({isOpen: !get().isOpen})
   
}))