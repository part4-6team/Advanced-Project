import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import axios from 'axios';

// 상태를 정의하는 Zustand 스토어
interface CardState {
  cards: any[];
  isLoading: boolean;
  isError: boolean;
  fetchCards: (
    page: number,
    pageSize: number,
    orderBy: string,
    keyword: string
  ) => void;
}

export const useCardStore = create<CardState>()(
  devtools((set) => ({
    cards: [],
    isLoading: false,
    isError: false,
    fetchCards: async (
      page: number,
      pageSize: number,
      orderBy: string,
      keyword: string
    ) => {
      set({ isLoading: true, isError: false });
      try {
        const response = await axios.get('/api/cards', {
          params: { page, pageSize, orderBy, keyword },
        });
        set({ cards: response.data, isLoading: false });
      } catch {
        set({ isError: true, isLoading: false });
      }
    },
  }))
);
