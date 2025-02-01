"use client"
import { ReactNode, useState, useEffect, useCallback } from "react";
import { CalendarContext } from "./date-context";

export const CalendarProvider: React.FC<{children: ReactNode}> = ({children}) => {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [isLimitReached, setIsLimitReached] = useState(false);  // Estado para verificar se atingiu o limite
  
  // Funções de formatação
  const getDayName = useCallback((date: Date) => date.toLocaleDateString("default", { weekday: "short" }), []);
  const getMonthName = useCallback((date: Date) => date.toLocaleDateString("default", { month: "long" }), []);
  
  // Função para retornar os 7 dias da semana a partir da currentDate
  const getWeekDays = useCallback(() => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return {
        dayName: getDayName(date),
        dayNumber: date.getDate(),
        IsDate: date,
      };
    });
  }, [currentDate, getDayName]);

  const weekDays = getWeekDays();
  const currentMonth = getMonthName(currentDate);
  const currentYear = currentDate.getFullYear();

  const nextWeek = useCallback(() => {
    if(isLimitReached) return
    setCurrentDate((prev: Date) => {
      const next = new Date(prev);
      next.setDate(prev.getDate() + 7);
      return next;
    });
  }, [isLimitReached]);

  const previousWeek = useCallback(() => {
    setCurrentDate((prev: Date) => {
      const previous = new Date(prev);
      previous.setDate(prev.getDate() - 7);
      return previous;
    });
  }, []);

  // Verificar se a data de "nextWeek" ultrapassou a data atual
  useEffect(() => {
    const today = new Date(); // Data atual
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 7); // Adiciona 7 dias

    // Se nextDate ultrapassar a data de hoje, atualiza o estado isLimitReached
    if (nextDate > today) {
      setIsLimitReached(true);
    } else {
      setIsLimitReached(false);
    }
  }, [currentDate]);

  return (
    <CalendarContext.Provider value={{ currentDate, setCurrentDate, weekDays, currentMonth, currentYear, nextWeek, previousWeek, isLimitReached }}>
      {children}
    </CalendarContext.Provider>
  );
};
