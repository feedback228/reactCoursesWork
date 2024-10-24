import { ProgressingBarLine } from '../coursesInfaPage/ProgressingBarLine';

interface HeroBlockProps {
    h1: string;
    description?: string;
    img?: JSX.Element;
    btn?: JSX.Element;
    image?: string;
    percentage?: number;
    className?: string;
    classNameP?: string;
}

export const HeroBlock: React.FC<HeroBlockProps> = (props) => {
    return (
        <div className="w-full px-8 max-w-[1920px]">
            <div
                className="py-8 tablet:flex max-w-[116rem] w-full border-solid border-[0.063rem] border-[#717389] rounded-lg mt-8"
                style={{
                    background: 'linear-gradient(to right, #303240, #000000)',
                }}
            >
                <div className="px-[2rem] flex flex-col tablet:flex-row justify-between items-center w-full tablet:px-[7.5rem]">
                    <div className='flex flex-col gap-6 1000:gap-1'>
                        <div
                            className={`flex flex-col gap-8 max-w-[40rem] ${
                                props.className || ''
                            }`}
                        >
                            <h1 className="font-bold text-[2.5rem]">
                                {props.h1}
                            </h1>
                            <p className={`font-medium text-[1.125rem] text-[#E4E5ED]${props.classNameP || ''}`}>
                                {props.description}
                            </p>
                        </div>
                        <div className="flex flex-col-reverse 1000:flex-row w-full items-start 1000:items-center justify-between gap-4">
                            {props.btn}
                            {props.percentage !== undefined && (
                                <ProgressingBarLine
                                    percentage={props.percentage}
                                />
                            )}
                        </div>
                    </div>
                    <div>
                        <div>{props.img}</div>
                        <img className='hidden 1000:block' src={props.image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
