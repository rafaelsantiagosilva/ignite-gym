import { Group } from '@/components/Group';
import { HomeHeader } from '@/components/HomeHeader';
import { HStack, VStack } from '@gluestack-ui/themed';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Home() {
	const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'Ombro']);
	const [groupSelected, setGroupSelected] = useState('costa');

	return (
		<VStack flex={1}>
			<HomeHeader />

			<FlatList
				data={groups}
				renderItem={({ item }) => (
					<Group
						name={item}
						isActive={groupSelected === item}
						onPress={() => setGroupSelected(item)}
					/>
				)}
				keyExtractor={(item) => item}
				horizontal
				style={{
					marginTop: 10,
					maxHeight: 44,
					minHeight: 44,
				}}
				contentContainerStyle={{
					gap: 10,
					paddingHorizontal: 16,
				}}
				showsHorizontalScrollIndicator={false}
			/>
		</VStack>
	);
}
