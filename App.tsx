import { Loading } from '@/components/Loading';
import { SignIn } from '@/screens/SigIn';
import {
	Roboto_400Regular,
	Roboto_700Bold,
	useFonts,
} from '@expo-google-fonts/roboto';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { config } from './config/gluestack-ui.config';

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
	});

	NavigationBar.setStyle('inverted');

	return (
		<GluestackUIProvider
			globalStyles={{ backgroundColor: '#000' }}
			config={config}
		>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>

			{fontsLoaded ? <SignIn /> : <Loading />}
		</GluestackUIProvider>
	);
}
