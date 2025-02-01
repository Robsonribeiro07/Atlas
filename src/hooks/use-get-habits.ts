"use client";
import { useHabitsStore } from "@/store/habit-store";
import { useUsers } from "./use-User";
import { useEffect } from "react";

export function useGetHabits() {
    const { userId } = useUsers();
    
    // Estado local para evitar problemas de sincronização com Zustand

    const fetchHabits = useHabitsStore((state) => state.fetchHabits);
    const isLoading = useHabitsStore((state) => state.isLoading);
    const habits = useHabitsStore((state) => state.habits);

    useEffect(() => {
        if (userId) {
            fetchHabits(userId);
        }
    }, [userId, fetchHabits]);

  

    return { habits: habits, isLoading };
}
