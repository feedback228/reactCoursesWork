import { Link } from 'react-router-dom';

interface LogoProps {
    activeIndex: number | null;
    handleClick: (index: number) => void;
}

const Logo: React.FC<LogoProps> = (props) => {
    return (
        <Link to="lol">
            <h2
                onClick={() => {
                    props.handleClick(3);
                }}
                className={`font-bold text-2.5rem ${
                    props.activeIndex === 3 ? 'text-hoverBlue' : 'text-hoverBlue'
                } transition duration-300`}
            >
                duties
            </h2>
        </Link>
    );
};

export default Logo
