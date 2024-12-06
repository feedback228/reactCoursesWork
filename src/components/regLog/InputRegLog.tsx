import { useState, ChangeEvent, ReactNode } from 'react';

interface InputRegLogProps {
    type?: boolean;
    void?: () => void;
    placehold?: string;
    title: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeCreatPass?: (e: ChangeEvent<HTMLInputElement>) => void;
    onPasswordError?: (error: string | null) => void; 
    creatPassError?: ReactNode | null;
}

const InputRegLog: React.FC<InputRegLogProps> = (props) => {
    const { onPasswordError } = props;
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [dirty, setDirty] = useState(false);

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        if (inputValue.length <= 5) {
            setPasswordError('Пароль слишком короткий');
            onPasswordError && onPasswordError('Пароль слишком короткий'); 
        } else {
            setPasswordError(null); 
            onPasswordError && onPasswordError(null); 
        }

        if (props.onChange) {
            props.onChange(e);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    let errorMessage = null;

    if (onPasswordError && passwordError || dirty) {
        errorMessage = <p className="text-red-600 text-xs">{passwordError}</p>;
    } else if (props.creatPassError || dirty) {
        errorMessage = (
            <p className="text-red-600 text-xs">{props.creatPassError}</p>
        );
    } else {
        errorMessage = null;
    }

    const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value == '') {
            setDirty(true)
            setPasswordError('Поле не может быть пустым')
        }
    }

    return (
        <form className="flex flex-row w-full justify-between items-center h-10">
            <p className="text-.875rem max-w-5.25rem">{props.title}</p>
            <div className="flex flex-col items-start max-w-20.75rem w-full gap-1">
                {errorMessage}
                <div className="relative max-w-14rem tablet:max-w-20.75rem w-full">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder={props.placehold}
                        onChange={emailHandler}
                        onBlur={onBlur}
                        className="max-w-14rem tablet:max-w-20.75rem w-full h-10 pl-3 border-solid border-0.063rem border-gray bg-transparent text-white rounded-lg placeholder:text-[.75rem] tablet:placeholder:text-[1rem]"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                        {props.type ? (
                            <span role="img" aria-label="Hide password">
                                🙈
                            </span>
                        ) : (
                            <span role="img" aria-label="Show password">
                                👁️
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default InputRegLog;
