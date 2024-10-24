import checkmarkCircle from '../assets/icon/checkmarkCircle.svg';

interface LessonBlockProps {
    num: string;
    title: string;
    description: string;
}

export const LessonBlock: React.FC<LessonBlockProps> = (props) => {
    return (
        <div className="flex justify-between items-center border-solid w-full	border-[0.063rem] border-[#717389] rounded-lg py-6 tablet:py-2 px-6 h-auto tablet:h-[8rem]">
            <div className="flex items-center gap-10">
                <h3 className="font-bold text-3xl">{props.num}</h3>
                <div className='flex flex-col gap-5'>
                    <div className="flex flex-col gap-2 max-w-[36rem]">
                        <h4 className="font-bold text-xl">{props.title}</h4>
                        <p className="font-medium text-sm 1000:text-lg text-[#E4E5ED] 1000:text-white">
                            {props.description}
                        </p>
                    </div>
                    <div className='flex items-center justify-between max-w-[13rem] flex-wrap'>
                        <div className="flex 1000:hidden items-center gap-2">
                            <p className='font-bold text-lg'>Tutorial</p>
                            <img
                                className="w-[1.5rem] h-[1.5rem]"
                                src={checkmarkCircle}
                                alt=""
                            />
                        </div>
                        <div className="flex 1000:hidden items-center gap-2">
                            <p className='font-bold text-lg'>Exercise</p>
                            <img
                                className="w-[1.5rem] h-[1.5rem]"
                                src={checkmarkCircle}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden 1000:flex items-center gap-[7.5rem]">
                <img src={checkmarkCircle} alt="" />
                <img src={checkmarkCircle} alt="" />
            </div>
        </div>
    );
};
