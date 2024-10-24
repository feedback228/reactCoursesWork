import { useState } from 'react';

export const InputRegLog = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
    };
    return (
        <div className="flex flex-col gap-4">
            <form className="flex flex-row w-full justify-between items-center h-10">
                <p className="text-xs">Password</p>
                <div className="relative max-w-[14rem] tablet:max-w-[20.75rem] w-full">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="max-w-[14rem] tablet:max-w-[20.75rem] w-full h-10 pl-3 border-solid border-[0.063rem] border-[#717389] bg-transparent text-white rounded-lg placeholder:text-[12px] tablet:placeholder:text-[16px]"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                        {showPassword ? (
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
            </form>
            <form className="flex w-full justify-between items-center h-10">
                <p className="text-xs max-w-[84px]">Confirm your password</p>
                <div className="relative max-w-[14rem] tablet:max-w-[20.75rem] w-full">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        className="max-w-[14rem] tablet:max-w-[20.75rem] w-full h-10 pl-3 border-solid border-[0.063rem] border-[#717389] bg-transparent text-white rounded-lg placeholder:text-[12px] tablet:placeholder:text-[16px]"
                    />
                    <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                        {showConfirmPassword ? (
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
            </form>
        </div>
    );
};
