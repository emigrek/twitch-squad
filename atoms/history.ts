import { atom } from "recoil";

type Squad = string[];

export const historyState = atom<Squad[]>({
    key: 'history',
    default: []
}); 