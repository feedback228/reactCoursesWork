import { NormalInputRegLog } from '../NormalInput';
import { Link } from 'react-router-dom';
import lightNightBtn from '../../assets/icon/lightNightBtn.svg';
import location from '../../assets/icon/location.svg';
import profileIcon from '../../assets/icon/profileIcon.svg';
import { BurgerMenu } from './BurgerMenu';

interface InputBtnProps {
    activeIndex: number | null;
    handleClick: (index: number) => void;
}

const InputBtn: React.FC<InputBtnProps> = (props) => {
    return (
        <div className="flex justify-end tablet:flex gap-4 w-full items-center">
            <NormalInputRegLog
                type="search"
                placeholder="Search"
                className="tablet:flex max-w-[20rem] hidden"
                classNameForm="tablet:flex max-w-[20rem] hidden"
            />
            <button className="flex justify-center items-center border-solid border-0.063rem border-gray min-w-10 h-10 rounded-lg hover:bg-gray transition duration-300">
                <img src={lightNightBtn} alt="" />
            </button>
            <div className="tablet:flex justify-center items-center border-solid border-0.063rem border-gray min-w-[8.125rem] h-10 rounded-lg px-0.5rem gap-2 hidden">
                <img src={location} alt="" />
                <p>Moskow</p>
            </div>
            <Link to="profile">
                <button
                    className={`flex justify-center items-center bg-white h-10 rounded-lg px-0.5rem gap-.625rem min-w-10 tablet:min-w-[100px] hover:bg-hoverBlue transition duration-300 ${
                        props.activeIndex === 4 ? 'bg-hoverBlue' : ''
                    }`}
                    onClick={() => props.handleClick(4)}
                >
                    <img src={profileIcon} alt="Profile" />
                    <p className="text-black font-medium text-base hidden tablet:flex">
                        Stepan Korovin
                    </p>
                </button>
            </Link>
            <BurgerMenu />
        </div>
    );
};

export default InputBtn;
