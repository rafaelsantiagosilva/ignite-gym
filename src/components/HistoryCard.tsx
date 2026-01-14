import { Heading, HStack, VStack, Text } from '@gluestack-ui/themed';

export function HistoryCard() {
	return (
		<HStack
			bgColor="$gray600"
			w="$full"
			px="$5"
			py="$4"
			mb="$3"
			bg="$gray600"
			rounded="$md"
			alignItems="center"
			justifyContent="space-between"
		>
			<VStack w="90%">
				<Heading
					color="$white"
					fontSize="$md"
					fontFamily="$heading"
					numberOfLines={1}
				>
					Costas
				</Heading>
				<Text color="$gray100" fontSize={'$lg'} numberOfLines={1}>
					Puxada Frontal
				</Text>
			</VStack>

			<Text color="$gray300" fontSize="$md">
				08:56
			</Text>
		</HStack>
	);
}
