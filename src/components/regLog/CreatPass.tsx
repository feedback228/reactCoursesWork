import { useState, useEffect } from 'react';
import InputRegLog from './InputRegLog';

interface CreatPassProps {
    creatPassErrorProps?: (error: string | null) => void;
    onPasswordError?: (error: string | null) => void;
}
const CreatPass: React.FC<CreatPassProps> = (props) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [creatPassError, setCreatPassError] = useState<string | null>(null);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    };

    const handleConfirmPasswordChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setConfirmPassword(e.target.value);
    };

    useEffect(() => {
        if (password !== confirmPassword) {
            setCreatPassError('Пароль не совпадает');
            if (props.creatPassErrorProps) {
                props.creatPassErrorProps('Пароль не совпадает');
            }
        } else {
            setCreatPassError(null);
            if (props.creatPassErrorProps) {
                props.creatPassErrorProps(null);
            }
        }
    }, [password, confirmPassword, props.creatPassErrorProps]);

    return (
        <div className="flex flex-col gap-4 w-full">
            <InputRegLog
                placehold="Create your password"
                title="Password"
                onChange={handlePasswordChange}
                onPasswordError={props.onPasswordError}
            />
            <InputRegLog
                placehold="Confirm your password"
                title="Confirm your password"
                onChange={handleConfirmPasswordChange}
                creatPassError={creatPassError}
            />
        </div>
    );
};

export default CreatPass;
