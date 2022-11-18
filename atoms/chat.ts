import { atom } from "recoil";

export const chatState = atom<string | null>({
    key: 'chat',
    default: null
}); 