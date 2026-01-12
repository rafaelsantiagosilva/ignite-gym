import { Box } from '@gluestack-ui/themed';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { gluestackUIConfig } from '../../config/gluestack-ui.config';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
	const theme = DefaultTheme;
	theme.colors.background = gluestackUIConfig.tokens.colors.gray700;

	return (
		// double check
		<Box flex={1} bg={theme.colors.background}>
			<NavigationContainer theme={theme}>
				{/* <AuthRoutes /> */}
				<AppRoutes />
			</NavigationContainer>
		</Box>
	);
}
