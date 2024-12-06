import React, { useState, ChangeEvent } from 'react';

interface InputProps {
    type: string;
    placeholder: string;
    title?: string;
    name?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onEmailError?: (error: string | null) => void;
    onBlurError?: (error: string | null) => void;
    className?: string;
    classNameForm?: string;
    classNameDiv?: string;
    classNameP?: string;
    showDirty?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
    const { onEmailError } = props;
    const [emailError, setEmailError] = useState<string | null>(null);
    const [onBlurError, setOnBlurError] = useState<string | null>(null);
    const [dirty, setDirty] = useState(false);

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
    
        if (!inputValue) {
            setEmailError('Поле не может быть пустым');
            onEmailError && onEmailError('Поле не может быть пустым');
            return;
        }
    
        if (e.target.type === 'email') {
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!re.test(inputValue)) {
                setEmailError('Некорректный email');
                onEmailError && onEmailError('Некорректный email');
            } else {
                setEmailError(null);
                onEmailError && onEmailError(null);
            }
        } else {
            setEmailError(null);
            onEmailError && onEmailError(null);
        }
    };
    

    const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value == '') {
            setDirty(true);
            setOnBlurError('Поле не может быть пустым');
            props.onBlurError && props.onBlurError('Поле не может быть пустым');
        } else {
            setDirty(false);
            setOnBlurError('');
            props.onBlurError && props.onBlurError(null);
        }
    };

    return (
        <form
            className={`flex w-full justify-between items-center ${
                props.classNameForm || ''
            }`}
        >
            <p className={`text-[.875rem] ${props.classNameP || ''}`}>
                {props.title}
            </p>
            <div
                className={`flex flex-col items-start max-w-20.75rem w-full gap-1 ${
                    props.classNameDiv || ''
                }`}
            >
                {props.showDirty && (emailError || dirty || onBlurError) && (
                    <p className="text-red-600 text-xs">{emailError || onBlurError}</p>
                )}
                <input
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    onChange={emailHandler}
                    onBlur={onBlur}
                    className={`max-w-14rem tablet:max-w-20.75rem placeholder:text-.75rem tablet:placeholder:text-1rem w-full h-10 pl-3 border-solid border-0.063rem border-gray bg-transparent text-white rounded-lg ${
                        props.className || ''
                    }`}
                />
            </div>
        </form>
    );
};

export default Input;
