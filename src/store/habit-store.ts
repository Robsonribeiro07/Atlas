import { GetHabit, HabitResponse } from '@/api/get-habit';
import { create } from 'zustand';

interface Habit {
    _id: string;
    Title: string;
    FinishedDays: { data: string; checked: boolean; id: string }[];
}

interface newHabit {
    Title: string;
    _id: string;
}

interface HabitsState {
    habits: HabitResponse[];
    backupHabits: HabitResponse[]; // Estado para salvar o backup
    setHabits: (habits: Habit[]) => void;
    addNewHabit: ({ Title, _id }: newHabit) => void; // Função para adicionar um novo hábito
    updateHabit: (habitId: string, updateData: { data: string; checked: boolean; id: string }) => void;
    fetchHabits: (userId: string) => Promise<void>;
    restoreBackOnFailed: () => void;
    backupFinishedDays: HabitResponse[];
    restoreBackupFinishedDats: () => void;
    isLoading: boolean;
    error: string | null;
}

export const useHabitsStore = create<HabitsState>((set, get) => ({
    habits: [],
    backupHabits: [], // Inicializa o estado de backup
    isLoading: false,
    error: null,
    backupFinishedDays: [],

    setHabits: (habits: Habit[]) => set(() => ({ habits })),

    fetchHabits: async (userId: string) => {
        if (get().habits.length > 0) return;

        set({ isLoading: true, error: null });

        try {
            const response = await GetHabit({ userId });

            if (response) {
                const { data } = response;
                set({ habits: data, isLoading: false });
            }
        } catch {
            set({ isLoading: false, error: 'Error fetching habits' });
        }
    },

    // Função para adicionar um novo hábito com backup e revertendo em caso de erro
    addNewHabit: ({ Title, _id }) => {
        const currentHabits = get().habits; // Estado atual
        set({ backupHabits: currentHabits }); // Salva o estado atual no backup

        if (!Title || !Title.trim()) {
            set({ error: 'Title is required' });
            return;
        }

        try {
            // Adiciona o novo hábito ao estado
            const updatedHabits = [...currentHabits, { _id, Title, FinishedDays: [] }];
            set({ habits: updatedHabits });

            // Caso a adição seja bem-sucedida, pode-se chamar outras ações aqui, se necessário
        } catch (error) {
            // Caso ocorra um erro, restaura o estado anterior
            console.error('Erro ao adicionar hábito:', error);
            set({ habits: get().backupHabits, error: 'Failed to add habit' });
        }
    },

    updateHabit: (habitId, updateData) => {
        const currentHabits = get().habits;

        set({ backupFinishedDays: currentHabits });

        set((state) => {
            const updatedHabits = state.habits.map((habit) => {
                if(habitId === habit._id) {
                    const exitingDate = habit.FinishedDays.find(day => day.data.toString().split('T')[0] === updateData.data.toString().split('T')[0]);


                    console.log('date aqui' + JSON.stringify(exitingDate))

                    console.log(get().habits)

                    if(exitingDate) {
                        exitingDate.checked = !exitingDate.checked  
                    } else {
                         habit.FinishedDays = [...habit.FinishedDays, updateData];
                    }

                    return habit;
                }

                return habit
                
            }
               
            );

            return { habits: updatedHabits };
        });
    },
   
    restoreBackupFinishedDats: () => set({ habits: get().backupFinishedDays }),

    // Função para restaurar manualmente o estado de backup
    restoreBackOnFailed: () => set({ habits: get().backupHabits }),
}));
