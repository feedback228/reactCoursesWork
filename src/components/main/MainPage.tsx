import { HeroBlock } from './HeroBlock';
import { Slayder } from './Slayder';
import { VacansiesBlock } from './VacansiesBlock';

import heroBlockMain from '../../assets/foto/heroBLockMain.png';




export const MainPage = () => {
    const imgHeroBLock = (
        <img className="max-w-15rem h-15re] tablet:max-w-18rem" src={heroBlockMain} alt="" />
    );
    return (
        <div className="bg-black w-full flex flex-col  items-center">
            <HeroBlock
                h1="Upgrade your brain..."
                description="Learning IT skills equips individuals with the tools to thrive in a digital world, enabling them to solve complex problems and adapt to technological advancements."
                img={imgHeroBLock}
            />
            <Slayder />
            <VacansiesBlock />
        </div>
    );
};
