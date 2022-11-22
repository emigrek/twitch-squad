import { atom } from "recoil";

export const creatorState = atom<boolean | null>({
    key: 'creator',
    default: true
}); 