import BackgroundImg from '@/assets/background.png';
import Logo from '@/assets/logo.svg';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import {
	Center,
	Heading,
	Image,
	Text,
	VStack,
	ScrollView,
} from '@gluestack-ui/themed';

export function SignUp() {
	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			showsVerticalScrollIndicator={false}
		>
			<VStack flex={1} height={'$full'} bg="$gray500">
				<Image
					w="$full"
					h={624}
					source={BackgroundImg}
					defaultSource={BackgroundImg}
					alt="Pessoas treinando"
					position="absolute"
				/>
				<VStack flex={1} px="$10" pb="$16">
					<Center my={'$24'}>
						<Logo />
						<Text color="$gray100" fontSize="$sm">
							Treine sua mente e o seu corpo.
						</Text>
					</Center>
					<Center gap="$2">
						<Heading color="$gray100">Crie a sua conta</Heading>
						<Input placeholder="Nome" keyboardType="default" />
						<Input
							placeholder="E-mail"
							keyboardType="email-address"
							autoCapitalize="none"
						/>
						<Input placeholder="Senha" secureTextEntry />
						<Button title="Criar conta" />
					</Center>
					<Center flex={1} justifyContent="flex-end" mt="$4">
						<Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
							Já tem uma conta?
						</Text>
						<Button title="Acessar conta" variant="outline" />
					</Center>
				</VStack>
			</VStack>
		</ScrollView>
	);
}
