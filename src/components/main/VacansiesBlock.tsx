import { JobBlock } from './JobBlock';
import { SearchFilterBlock } from './SearchFilterBlock';

export const VacansiesBlock = () => {
    return (
        <div className="flex flex-col w-full px-8 max-w-120rem mt-6 gap-8">
            <h2 className="text-4xl font-bold">Vacancies for you</h2>
            <SearchFilterBlock />
            <div className="grid grid-rows-1 gap-6 1200:grid 1200:grid-rows-2 1200:grid-flow-col 1200:gap-8">
                <JobBlock />
                <JobBlock />
                <JobBlock />
                <JobBlock />
                <JobBlock />
                <JobBlock />
            </div>
        </div>
    );
};
