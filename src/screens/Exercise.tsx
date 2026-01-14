import BodySvg from '@/assets/body.svg';
import RepetitionsSvg from '@/assets/repetitions.svg';
import SeriesSvg from '@/assets/series.svg';
import { Button } from '@/components/Button';
import {
	Box,
	HStack,
	Heading,
	Icon,
	Image,
	Text,
	VStack,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import { ScrollView, TouchableOpacity } from 'react-native';

export function Exercise() {
	const navigator = useNavigation();

	function handleGoBack() {
		navigator.goBack();
	}

	return (
		<VStack flex={1}>
			<VStack px="$8" bg="$gray600" pt="$12" pb="$2">
				<TouchableOpacity onPress={handleGoBack}>
					<Icon as={ArrowLeft} color="$green" size="xl" />
				</TouchableOpacity>

				<HStack justifyContent="space-between" alignItems="center" mt="$4" mb="$4">
					<Heading
						color="$gray100"
						fontFamily="$heading"
						fontSize="$lg"
						flexShrink={1}
						numberOfLines={1}
					>
						Puxada Frontal
					</Heading>
					<HStack alignItems="center">
						<BodySvg />

						<Text color="$gray200" ml="$1">
							Costas
						</Text>
					</HStack>
				</HStack>
			</VStack>
			<ScrollView
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 32 }}
			>
				<VStack p="$8">
					<Image
						source={{
							uri: 'https://image.tuasaude.com/media/article/ku/ib/treino-costas_73930.gif?width=686&height=487',
						}}
						alt="Exercício"
						mb="$3"
						resizeMode="cover"
						rounded="$lg"
						w="$full"
						h="$80"
					/>

					<Box bg="$gray600" rounded="$md" pb="$4" px="$4">
						<HStack alignItems="center" justifyContent="space-around" mb="$6" mt="$5">
							<HStack>
								<SeriesSvg />
								<Text color="$gray200" ml="$2">
									3 Séries
								</Text>
							</HStack>
							<HStack>
								<RepetitionsSvg />
								<Text color="$gray200" ml="$2">
									12 Repetições
								</Text>
							</HStack>
						</HStack>

						<Button title="Marcar como realizado" />
					</Box>
				</VStack>
			</ScrollView>
		</VStack>
	);
}
