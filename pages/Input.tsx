import React, { useEffect, useRef } from 'react'

function Input(props: { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if(inputRef.current) {
            (inputRef.current as HTMLInputElement).focus();
        }
    }, []);

    return (
        <div className="group px-3 flex flex-row items-center align-middle rounded-md bg-foreground border-white/20">
            <input 
                ref={inputRef}
                className={`transition-all bg-transparent rounded-md border-transparent w-full text-center outline-none py-3 text-lg placeholder:text-white/50`}
                value={props.value}
                placeholder="loltyler1"
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
            />
        </div>
    )
}

export default Input