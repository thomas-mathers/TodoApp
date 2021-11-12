import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useLocalStorage<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] {
    const [state, setState] = useState<T>(() => {
        const value = localStorage.getItem(key);

        if (value === null) {
            return defaultValue;
        }

        return JSON.parse(value);
    });

    useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [key, state]);

    return [state, setState];
}

export { useLocalStorage }