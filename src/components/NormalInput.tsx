interface NormalInputRegLogProps {
    type: string;
    placeholder: string;
    title?: string;
    name?: string;
    value?: string;
    className?: string;
    classNameForm?: string;
    classNameP?: string;
    classNameDiv?: string;
}

export const NormalInputRegLog: React.FC<NormalInputRegLogProps> = (props) => {
    const { className, classNameForm } = props;

    return (
        <form
            className={`flex w-full justify-between items-center ${
                classNameForm || ''
            }`}
        >
            <p className={`text-[.875rem] ${props.classNameP || ''}`}>
                {props.title}
            </p>

                <input
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                
                    className={`max-w-[14rem] tablet:max-w-20.75rem placeholder:text-.75rem tablet:placeholder:text-1rem w-full h-10 pl-3 border-solid border-0.063rem border-gray bg-transparent text-white rounded-lg ${
                        className || ''
                    }`}
                />

        </form>
    );
};
