import { atom } from "recoil";
import Squad from "../types/Squad";

export const squadState = atom<Squad>({
    key: 'squad',
    default: {
        users: []
    }
}); 