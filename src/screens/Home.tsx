import { ExerciseCard } from '@/components/ExerciseCard';
import { Group } from '@/components/Group';
import { HomeHeader } from '@/components/HomeHeader';
import { AppNavigatorRoutesProps } from '@/routes/app.routes';
import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Home() {
	const [exercises, setExercises] = useState([
		'Puxada Frontal',
		'Remada Curvada',
		'Remada Unilateral',
		'Levantamento Terra',
	]);

	const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'Ombro']);
	const [groupSelected, setGroupSelected] = useState(groups[0]);

	const navigator = useNavigation<AppNavigatorRoutesProps>();

	function handleOpenExerciseDetails() {
		navigator.navigate('exercise');
	}

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
				showsHorizontalScrollIndicator={false}
				style={{
					marginTop: 10,
					maxHeight: 44,
					minHeight: 44,
				}}
				contentContainerStyle={{
					gap: 10,
					paddingHorizontal: 16,
				}}
			/>

			<VStack px="$8" mt="$12" flex={1}>
				<HStack justifyContent="space-between" alignItems="center" mb="$5">
					<Heading color="$gray200" fontSize="$md">
						Exercícios
					</Heading>

					<Text color="$gray200" fontSize="$sm" fontFamily="$body">
						{exercises.length}
					</Text>
				</HStack>

				<FlatList
					data={exercises}
					keyExtractor={(item) => item}
					renderItem={() => <ExerciseCard onPress={handleOpenExerciseDetails} />}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						gap: 10,
						paddingBottom: 20,
						marginBottom: 20,
					}}
				/>
			</VStack>
		</VStack>
	);
}
