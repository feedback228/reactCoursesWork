interface BtnProps {
    title?: string;
    img?: JSX.Element;
    image?: string;
    className?: string;
    pClassName?: string;
}

export const Btn: React.FC<BtnProps> = (props) => {
    return (
        <button
            className={`flex items-center gap-2 p-2 bg-darkBlue rounded-lg ${
                props.className || ''
            }`}
        >
            <div className="flex gap-2">
                {props.image && <img src={props.image} alt="" />}
                <p className={`text-black${props.pClassName || ''}`}>
                    {props.title}
                </p>
                {props.img}
            </div>
        </button>
    );
};
