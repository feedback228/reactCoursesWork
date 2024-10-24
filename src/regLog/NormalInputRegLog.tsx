interface NormalInputRegLogProps {
    type: string;
    placeholder: string;
    title?: string;
    className?: string;
    classNameForm?: string;
    classNameP?: string;
}

export const NormalInputRegLog: React.FC<NormalInputRegLogProps> = (props) => {
    const { className, classNameForm } = props;

    return (
        <form
            className={`flex w-full justify-between items-center ${
                classNameForm || ''
            }`}
        >
            <p className={`text-xs ${
                props.classNameP || ''
            }`}>{props.title}</p>
            <input
                type={props.type}
                placeholder={props.placeholder}
                className={`max-w-[14rem] tablet:max-w-[20.75rem] placeholder:text-[12px] tablet:placeholder:text-[16px] w-full h-10 pl-3 border-solid border-[0.063rem] border-[#717389] bg-transparent text-white rounded-lg ${
                    className || ''
                }`}
            />
        </form>
    );
};
