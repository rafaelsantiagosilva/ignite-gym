import { Heading, HStack, Text, VStack, Icon } from '@gluestack-ui/themed';
import { UserPhoto } from './UserPhoto';
import { LogOut } from 'lucide-react-native';

export function HomeHeader() {
	return (
		<HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$2">
			<UserPhoto
				size="lg"
				fallbackText="John Doe"
				uri="https://i.pravatar.cc/150?img=7"
			/>

			<VStack flex={1}>
				<Text color="$gray100" fontSize="$sm">
					Olá,
				</Text>
				<Heading color="$gray100" fontSize="$md">
					John Doe
				</Heading>
			</VStack>

			<Icon as={LogOut} color="$gray200" size="xl" />
		</HStack>
	);
}
