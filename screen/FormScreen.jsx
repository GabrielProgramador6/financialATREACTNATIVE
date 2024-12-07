import { useState } from 'react';
import {
	Alert,
	Button,
	Pressable,
	StyleSheet,
	TextInput,
	View,
} from 'react-native';
import { DropdownPickerSelectCurrency } from '../constants';
import DropdownPickerSelect from '../components/DropdownPickerSelect';

export default function FormScreen({ transactions, setTransactions }) {
	const [description, setDescription] = useState('');
	const [value, setValue] = useState(0);
	const [date, setDate] = useState('');
	const [hour, setHour] = useState('');
	const [category, setCategory] = useState('');
	const [type, setType] = useState('');
	const [currency, setCurrency] = useState('');

	function handleAddTransaction() {
		const newTransaction = {
			description,
			value,
			date,
			hour,
			category,
			type,
			currency,
		};

		setTransactions((prev) => [...prev, newTransaction]);

		setDescription('');
		setValue(0);
		setDate('');
		setHour('');
		setCategory('');
		setType('');
		setCurrency('');

		Alert.alert('Sucesso', 'Transação adicionada com sucesso!');
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={(text) => setDescription(text)}
				value={description}
				placeholder="Descrição"
			/>
			<TextInput
				style={styles.input}
				onChangeText={setValue}
				value={value.toString()}
				placeholder="Valor"
				keyboardType="numeric"
			/>
			<TextInput
				style={styles.input}
				onChangeText={setDate}
				value={date}
				placeholder="Data (AAAA-MM-DD)"
			/>
			<TextInput
				style={styles.input}
				onChangeText={setHour}
				value={hour}
				placeholder="Hora"
			/>
			<TextInput
				style={styles.input}
				onChangeText={setCategory}
				value={category}
				placeholder="Categoria"
			/>
			<TextInput
				style={styles.input}
				onChangeText={setType}
				value={type}
				placeholder="Tipo (Receita/Despesa)"
			/>
			<TextInput
				style={styles.input}
				onChangeText={setCurrency}
				value={currency}
				placeholder="Moeda"
			/>
			<Pressable
				style={{
					width: 200,
					height: 50,
					backgroundColor: '#ccc',
					fontSize: 20,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				onPress={handleAddTransaction}>
				Go to Form
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
		width: 400,
	},
});
