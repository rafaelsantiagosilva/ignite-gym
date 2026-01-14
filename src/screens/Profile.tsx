import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ScreenHeader } from '@/components/ScreenHeader';
import { UserPhoto } from '@/components/UserPhoto';
import { Center, Heading, Text, VStack } from '@gluestack-ui/themed';
import { ScrollView, TouchableOpacity } from 'react-native';

export function Profile() {
	return (
		<VStack flex={1}>
			<ScreenHeader title="Perfil" />

			<ScrollView
				style={{ marginTop: 24 }}
				contentContainerStyle={{
					paddingBottom: 36,
				}}
			>
				<Center w="$full" px="$10">
					<UserPhoto
						size="2xl"
						uri="https://github.com/rafaelsantiagosilva.png"
						fallbackText="Rafael Santiago"
					/>

					<TouchableOpacity>
						<Text color="$green500" fontFamily="$heading" fontSize="$md" mt="$2">
							Alterar Foto
						</Text>
					</TouchableOpacity>

					<Center mt="$8" gap="$4">
						<Input placeholder="Nome" bg="$gray600" />
						<Input
							placeholder="E-mail"
							value="rafaelsantiago@email.com"
							bg="$gray600"
							readOnly
						/>
					</Center>

					<Heading
						alignSelf="flex-start"
						fontFamily="$heading"
						color="$gray200"
						fontSize="$md"
						mt="$12"
					>
						Alterar senha
					</Heading>

					<Center w="$full" mt="$2" gap="$4">
						<Input placeholder="Senha atual" bg="$gray600" secureTextEntry />
						<Input placeholder="Nova senha" bg="$gray600" secureTextEntry />
						<Input placeholder="Confirmar nova senha" bg="$gray600" secureTextEntry />
						<Button title="Atualizar" />
					</Center>
				</Center>
			</ScrollView>
		</VStack>
	);
}
