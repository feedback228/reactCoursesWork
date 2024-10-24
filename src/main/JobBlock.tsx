import { Btn } from './Btn';

import eyeOff from '../assets/icon/eyeOff.svg';
import heart from '../assets/icon/heart.svg';
import avaJob from '../assets/foto/avaJob.png';

export const JobBlock = () => {
    return (
        <div className="max-w-[100%] w-full flex flex-col gap-3 1200:max-w-[37rem] p-8 border-solid	border-[0.063rem] border-[#717389] rounded-lg ">
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center w-full">
                    <h3 className="text-3xl font-bold">Job Title</h3>
                    <div className="flex gap-2">
                        <div className="flex justify-center items-center rounded-lg hover:bg-[#717389] transition duration-300 w-8 h-8">
                            <img
                                className="hidden 500:flex cursor-pointer"
                                src={eyeOff}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center items-center rounded-lg hover:bg-[#717389] transition duration-300 w-8 h-8">
                            <img
                                className="hidden 500:flex cursor-pointer hover:bg-[#717389] transition duration-300"
                                src={heart}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <p>10 000 - 30 000 $</p>
                    <div className="flex items-center gap-2">
                        <Btn
                            title="Python"
                            className="bg-black border-solid	border-[0.063rem] border-[#717389]  hover:bg-[#717389] transition duration-300"
                            pClassName="!text-white"
                        />
                        <Btn
                            title="Without experience"
                            className="bg-black border-solid	border-[0.063rem] border-[#717389]  hover:bg-[#717389] transition duration-300"
                            pClassName="!text-white"
                        />
                        <Btn
                            title="..."
                            className="flex 500:hidden bg-black border-solid	border-[0.063rem] border-[#717389] hover:bg-[#717389] transition duration-300"
                            pClassName="!text-white"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-7">
                <div className="flex items-center gap-4">
                    <img src={avaJob} alt="" />
                    <div>
                        <p className="text-sm">Company</p>
                        <p className="text-sm">Bangladesh</p>
                    </div>
                </div>
                <Btn title="Respond"  className='hover:bg-[#00bcd4] transition duration-300' />
            </div>
        </div>
    );
};
