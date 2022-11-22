import { atom } from "recoil";

export const squadState = atom<string[]>({
    key: 'squad',
    default: []
}); 