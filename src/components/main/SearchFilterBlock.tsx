import { NormalInputRegLog } from '../NormalInput';
import { Btn } from './Btn';

import filter from '../../assets/icon/filter.svg';
import arrowSort from '../../assets/icon/arrowSort.svg';
import dismiss from '../../assets/icon/dismiss.svg';

export const SearchFilterBlock = () => {
    const icon = <img src={filter} alt="" />;
    const icon2 = <img src={arrowSort} alt="" />;
    const icon3 = <img src={dismiss} alt="" />;
    return (
        <div className="flex flex-col w-full gap-2">
            <NormalInputRegLog
                type="search"
                placeholder="Search"
                className="tablet:flex !max-w-120rem w-full justify-start"
                classNameForm="tablet:flex !max-w-120rem w-full !justify-start"
            />
            <div className="flex flex-col tablet:flex-row gap-6 items-start">
                <div className="flex gap-2">
                    <Btn
                        title="Filters"
                        img={icon}
                        className="hover:bg-[#00bcd4] transition duration-300"
                    />
                    <Btn
                        title="Sorting"
                        className="!bg-black border-solid	border-0.063rem border-gray  hover:!bg-gray transition duration-300"
                        pClassName="!text-white"
                        img={icon2}
                    />
                </div>
                <div className=" flex flex-wrap	tablet:flex gap-2 items-center">
                    <Btn
                        title="Backend"
                        className="!bg-black border-solid	border-0.063rem border-gray  hover:!bg-gray transition duration-300"
                        pClassName="!text-white"
                        img={icon3}
                    />
                    <Btn
                        title="Python"
                        className="!bg-black border-solid	border-0.063rem border-gray  hover:!bg-gray transition duration-300"
                        pClassName="!text-white"
                        img={icon3}
                    />
                    <Btn
                        title="SQL"
                        className="!bg-black border-solid	border-0.063rem border-gray  hover:!bg-gray transition duration-300"
                        pClassName="!text-white"
                        img={icon3}
                    />
                    <Btn
                        title="Work experience (1-3 year)"
                        className="!bg-black border-solid	border-0.063rem border-gray  hover:!bg-gray transition duration-300"
                        pClassName="!text-white"
                        img={icon3}
                    />
                </div>
            </div>
        </div>
    );
};
