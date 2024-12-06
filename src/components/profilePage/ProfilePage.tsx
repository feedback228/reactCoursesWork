import { JobBlock } from '../main/JobBlock';
import { Slayder } from '../main/Slayder';
import { Profile } from './Profile';

export const ProfilePage = () => {
    return (
        <div className="w-full">
            <Profile />
            <Slayder />
            <div className='flex flex-col gap-4 px-8 mt-8'>
                <h2 className='font-bold text-2xl'>Recommended vacancies</h2>
                <div className='flex flex-col 1200:flex-row gap-6'>
                    <JobBlock />
                    <JobBlock />
                    <JobBlock />
                </div>
            </div>
        </div>
    );
};
