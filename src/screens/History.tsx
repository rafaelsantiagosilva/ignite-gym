import { HistoryCard } from '@/components/HistoryCard';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Heading, Text, VStack } from '@gluestack-ui/themed';
import { useState } from 'react';
import { SectionList } from 'react-native';

export function History() {
	type SectionListData = {
		title: string;
		data: any[];
	};

	const [exercises, setExercises] = useState<SectionListData[]>([
		{
			title: '10.01.26',
			data: ['1', '2'],
		},
		{
			title: '11.01.26',
			data: ['3'],
		},
	]);

	return (
		<VStack flex={1}>
			<ScreenHeader title="Histórico de Exercícios" />

			<SectionList
				sections={exercises}
				keyExtractor={(item) => item}
				renderItem={() => <HistoryCard />}
				renderSectionHeader={({ section }) => (
					<Heading
						color="$gray200"
						fontSize="$md"
						mt="$10"
						mb="$3"
						fontFamily="$heading"
					>
						{section.title}
					</Heading>
				)}
				style={{ paddingHorizontal: 24 }}
				contentContainerStyle={
					exercises.length === 0 && { flex: 1, justifyContent: 'center' }
				}
				ListEmptyComponent={() => (
					<Text color="$gray100" textAlign="center">
						Não há exercícios registrados ainda.{'\n'} Vamos fazer exercícios hoje?
					</Text>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</VStack>
	);
}
