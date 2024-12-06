import { Btn } from '../main/Btn';

import avaProfile from '../../assets/foto/avaProfile.png';
import edit from '../../assets/icon/edit.svg';

export const Profile = () => {
    return (
        <div className="flex flex-col gap-4 items-start w-full px-8">
            <Btn title="Edit your profile" className="bg-white hover:bg-[#00bcd4] transition duration-300" image={edit} />
            <div className="flex flex-col 1200:flex-row items-center w-full border-solid	border-0.063rem border-gray rounded-lg px-4rem py-8">
                <div className="flex flex-col 1200:flex-row items-center gap-[3rem]">
                    <img src={avaProfile} alt="" />
                    <div className="flex flex-col gap-6  border-solid border-0 1200:border-r-[1px]  border-gray pb-6 1200:pb-0 1200:pr-4.5rem">
                        <h1 className="text-3xl 900:text-5xl font-bold">Stepan Korovin</h1>
                        <div className='flex flex-col gap-2'>
                            <p>Gender: Male</p>
                            <p>Location: Moskow, Russian Federation</p>
                            <p>Joined 6 month ago</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col pt-6 1200:pt-0 1200:pl-4.5rem max-w-27rem gap-6'>
                    <h1 className="text-3xl 900:text-5xl font-bold">Skills:</h1>
                    <div className='flex flex-wrap gap-2'>
                        <Btn
                            title="Project Management"
                            className="!bg-blackBlue border-solid	border-0.063rem border-gray  hover:!bg-gray transition duration-300 "
                            pClassName="!text-white"
                        />
                        <Btn
                            title="Network Engineering"
                            className="!bg-blackBlue border-solid	border-0.063rem border-gray  hover:!bg-gray transition duration-300 "
                            pClassName="!text-white"
                        />
                        <Btn
                            title="Blockchain"
                            className="!bg-blackBlue border-solid	border-0.063rem border-gray  hover:!bg-gray transition duration-300 "
                            pClassName="!text-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
