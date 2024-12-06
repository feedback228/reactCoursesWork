interface BtnInGoogleProps {
    icon: string; 
    text: string; 
    classname?: string; 
}

const BtnInGoogle: React.FC<BtnInGoogleProps> = (props)=> {
    return (
        <button className={`flex items-center justify-center gap-2.5 bg-white w-full rounded-lg h-10 text-black font-medium text-sm ${props.classname || ''}`}>
            <img src={props.icon} alt="" />
            {props.text}
        </button>
    );
};

export default BtnInGoogle
