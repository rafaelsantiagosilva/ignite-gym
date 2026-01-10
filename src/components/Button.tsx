import {
	ButtonSpinner,
	Button as GluestackButton,
	Text,
} from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof GluestackButton> & {
	title: string;
	isLoading?: boolean;
	variant?: 'solid' | 'outline';
};

export function Button({
	title,
	variant = 'solid',
	isLoading = false,
	...rest
}: Props) {
	return (
		<GluestackButton
			w="$full"
			h="$14"
			bg={
				isLoading ? '$green500' : variant === 'solid' ? '$green700' : 'transparent'
			}
			borderWidth={variant === 'solid' ? '$0' : '$1'}
			borderColor="$green500"
			rounded="$sm"
			$active-bg={variant === 'solid' ? '$green500' : '$gray400'}
			disabled={isLoading}
			gap={'$1'}
			{...rest}
		>
			<Text
				color={variant === 'solid' ? '$white' : '$green500'}
				fontFamily="$heading"
				fontSize="$sm"
			>
				{title}
			</Text>
			{isLoading && <ButtonSpinner size={15} />}
		</GluestackButton>
	);
}
