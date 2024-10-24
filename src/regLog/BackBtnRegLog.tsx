import arrowLeft from '../assets/icon/arrowLeft.svg';

interface BackBtnRegLogProps {
    handleBack: () => void;
    title: string;
    p: string;
    span?: string;
    spanP?: string;
}

export const BackBtnRegLog: React.FC<BackBtnRegLogProps> = (props) => {
    return (
        <div className="flex gap-4">
            <button onClick={props.handleBack}>
                <img src={arrowLeft} alt="" />
            </button>
            <div className="flex flex-col gap-1">
                <p className="font-medium">{props.title}</p>
                <p className="text-xs text-[#E4E5ED]">
                    {props.p}
                    <span className="font-bold text-base">
                        {props.span || ''}
                    </span>
                    <span className="text-xs text-[#E4E5ED]">{props.spanP}</span>
                </p>
            </div>
        </div>
    );
};
