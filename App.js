import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screen/LoginScreen';
import TransacaoListScreen from './screen/TransacaoListScreen';
import FormScreen from './screen/FormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	const [transactions, setTransactions] = useState([
		{
			description: '',
			value: 0,
			date: '',
			hour: '',
			category: '',
			type: '',
			currency: '',
		},
	]);

	return (
		<SafeAreaView>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Login"
						component={LoginScreen}
						options={{ title: 'Login' }}
					/>

					<Stack.Screen name="Transactions">
						{(props) => (
							<TransacaoListScreen
								list={transactions}
								navigation={props.navigation}
							/>
						)}
					</Stack.Screen>

					<Stack.Screen name="Form">
						{(props) => (
							<FormScreen
								transactions={transactions}
								setTransactions={setTransactions}
								navigation={props.navigation}
							/>
						)}
					</Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ecf0f1',
		padding: 8,
	},
	paragraph: {
		margin: 8,
		fontSize: 16,
		textAlign: 'center',
	},
	h1: {
		margin: 28,
		fontSize: 36,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	h2: {
		margin: 16,
		fontSize: 28,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
