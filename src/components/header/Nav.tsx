import { Link } from 'react-router-dom';

interface NavProps {
    activeIndex: number | null;
    handleClick: (index: number) => void;
}


const Nav: React.FC<NavProps> = (props) => {
    return (
        <ul className="tablet:flex gap-6 hidden">
        <li
            className={`font-medium text-1.5rem transition duration-300 ${
                props.activeIndex === 0
                    ? 'text-hoverBlue'
                    : 'hover:text-hoverBlue'
            }`}
            onClick={() => props.handleClick(0)}
        >
            <Link to="kek">Courses</Link>
        </li>
        <li
            className={`font-medium text-1.5rem transition duration-300 ${
                props.activeIndex === 1
                    ? 'text-hoverBlue'
                    : 'hover:text-hoverBlue'
            } cursor-pointer`}
            onClick={() =>  props.handleClick(1)}
        >
            Responses
        </li>
        <li
            className={`font-medium text-1.5rem transition duration-300 ${
                 props.activeIndex === 2
                    ? 'text-hoverBlue'
                    : 'hover:text-hoverBlue'
            } cursor-pointer`}
            onClick={() =>  props.handleClick(2)}
        >
            Exercise
        </li>
    </ul>
    )
}

export default Nav