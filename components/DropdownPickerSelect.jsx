import RNPickerSelect from 'react-native-picker-select';

export default function DropdownPickerSelect({ onValueChange, items }) {
	return (
		<RNPickerSelect
			onValueChange={(value) => onValueChange(value)}
			items={items}
		/>
	);
}
