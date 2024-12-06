import SelectText from './SelectText';

interface SelectOptionProps {
    months: string[];
    selectedMonth: string;
    onSelect: (month: string) => void;
    toggleTextBlock: () => void;
}

const SelectOption: React.FC<SelectOptionProps> = (props) => {
    return (
        <div
            className="flex flex-col gap-2"
            style={{
                borderTop:  '1px solid #717389',
                paddingTop: '10px',
                paddingBottom: '5px',
            }}
        >
            {props.months.map((month) => (
                <SelectText
                    key={month}
                    month={month}
                    isSelected={props.selectedMonth === month}
                    onSelect={props.onSelect}
                    click={props.toggleTextBlock}
                />
            ))}
        </div>
    );
};

export default SelectOption;  