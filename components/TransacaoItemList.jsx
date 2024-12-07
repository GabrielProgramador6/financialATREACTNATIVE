import { Text, View } from 'react-native';
import DropdownPickerSelect from './DropdownPickerSelect';
import {
	DropdownPickerSelectCategory,
	DropdownPickerSelectCurrency,
} from '../constants';
import { Dimensions } from 'react-native';
import { useEffect, useState } from 'react';

export default function TransacaoItemList({ item }) {
	const { width, height } = Dimensions.get('window');

	const [orientation, setOrientation] = useState(
		width < height ? 'PORTRAIT' : 'LANDSCAPE'
	);

	useEffect(() => {
		Dimensions.addEventListener('change', ({ window: { width, height } }) => {
			if (width < height) {
				setOrientation('PORTRAIT');
			} else {
				setOrientation('LANDSCAPE');
			}
		});
	}, []);

	return (
		<View>
			{orientation === 'PORTRAIT' ? (
				<View>
					<Text>{item.description}</Text>
					<Text>{item.value}</Text>
					<Text>{item.date}</Text>
				</View>
			) : (
				<View>
					<Text>{item.description}</Text>
					<Text>{item.value}</Text>
					<View>
						<Text>{item.date}</Text>
						<Text>{item.hour}</Text>
					</View>
					<View>
						<DropdownPickerSelect items={DropdownPickerSelectCategory} />
						<Text>{item.type}</Text>
					</View>

					<DropdownPickerSelect items={DropdownPickerSelectCurrency} />
				</View>
			)}
		</View>
	);
}
