import { create } from 'zustand';

interface editingContent {
  tarefa: string,
  prioridade: "Alta" | "Media" | "Baixa"
  _id: string;
  status: string;
}

interface ShowEditOrRemoveTask {
  isEditing: string;
  Clear: () => void;
  setEditing: ({ _id }: { _id: string }) => void;
  isOpenDialog: boolean;
  toggleDialog: () => void;
  CloseDialog: () => void;
  editingContent: editingContent 
  setEditingContentTask: ({}: editingContent) => void
  isOpenDropDowm: boolean,
  toogleDropDowm: () => void

  
}

export const useShowButtonEditOrRemove = create<ShowEditOrRemoveTask>((set,get) => ({
  isEditing: '',
  isOpenDialog: false,
  isOpenDropDowm: false,
  editingContent: {
    status: 'pendente',
    _id: '',
    prioridade: "Alta",
    tarefa: '',
  },
  toggleDialog: () => set((state) => ({ isOpenDialog:!state.isOpenDialog })),
  CloseDialog: () => set({ isOpenDialog: false }),

  Clear: () => {
    if(get().isOpenDropDowm === true) return

    set({ isEditing: ''})
  }, 
  setEditing: ({ _id }) => set({ isEditing: _id }),
  setEditingContentTask({_id, prioridade, tarefa, status }) {

    
    set({editingContent: {
      _id,
      prioridade,
      tarefa,
      status
    } })

    
  },
  toogleDropDowm: () => set((state) => ({ isOpenDropDowm:!state.isOpenDropDowm })),
 
}));
