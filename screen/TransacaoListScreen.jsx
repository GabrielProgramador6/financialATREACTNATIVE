import { FlatList, Pressable, Text, View } from 'react-native';
import TransacaoItemList from '../components/TransacaoItemList';

export default function TransacaoListScreen({ list, navigation }) {
	return (
		<View>
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
					onPress={() => navigation.navigate('Form')}>
					<Text>Go to Form</Text>
				</Pressable>
			</View>

			<FlatList
				data={list}
				renderItem={({ item }) => <TransacaoItemList item={item} />}
				keyExtractor={(item, i) => i.toString()}
				ListEmptyComponent={
					<Text style={{ textAlign: 'center', marginTop: 20 }}>
						No transactions found
					</Text>
				}
			/>
		</View>
	);
}
