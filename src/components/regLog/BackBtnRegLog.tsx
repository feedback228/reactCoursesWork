import { useNavigate } from 'react-router-dom';
import arrowLeft from '../../assets/icon/arrowLeft.svg';

interface BackBtnRegLogProps {
    title: string;
    p: string;
    span?: string;
    spanP?: string;
}

export const BackBtnRegLog: React.FC<BackBtnRegLogProps> = (props) => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    };

    return (
        <div className="flex gap-4">
            <button onClick={back}>
                <img src={arrowLeft} alt="Back" />
            </button>
            <div className="flex flex-col gap-1">
                <p className="font-medium">{props.title}</p>
                <p className="text-xs text-[#E4E5ED]">
                    {props.p}
                    <span className="font-bold text-base">
                        {props.span || ''}
                    </span>
                    <span className="text-xs text-[#E4E5ED]">
                        {props.spanP}
                    </span>
                </p>
            </div>
        </div>
    );
};
