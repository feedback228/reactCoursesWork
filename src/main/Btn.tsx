interface BtnProps {
    title?: string;
    img?: JSX.Element;
    image?: string;
    className?: string;
    pClassName?: string;
}

export const Btn: React.FC<BtnProps> = (props) => {
    return (
        <button className={`flex items-center gap-2 p-2 bg-[#0097A7] rounded-lg ${props.className || ''}`}>
            <img src={props.image} alt="" />
            
            <p className={`text-black${props.pClassName || ''}`}>{props.title}</p>
            {props.img}
        </button>
    )
}