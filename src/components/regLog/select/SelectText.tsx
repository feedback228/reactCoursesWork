interface SelectTextProps {
    month: string;
    isSelected: boolean;
    onSelect: (month: string) => void;
    click?: () => void;
    style?: React.CSSProperties;
}

const SelectText: React.FC<SelectTextProps> = (props) => {
    return (
        <div
            className={`cursor-pointer flex justify-center items-center max-w-[100px] hover:bg-darkBlue rounded-lg ${
                props.isSelected ? 'bg-hoverBlue' : ''
            }`}
            onClick={() => {
                props.onSelect(props.month);
                if (props.click) {
                    props.click();
                }
            }}
        >
            {props.isSelected}
            <p className="h-9 flex justify-center items-center">
                {props.month}
            </p>
        </div>
    );
};

export default SelectText;
