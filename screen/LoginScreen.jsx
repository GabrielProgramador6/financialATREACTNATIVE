import { TextInput, View, Pressable, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
	return (
		<View>
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
				onPress={() => navigation.navigate('Transactions')}>
				<Text>Enter</Text>
			</Pressable>
		</View>
	);
}
