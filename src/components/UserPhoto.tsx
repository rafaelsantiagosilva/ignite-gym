import {
	Avatar,
	AvatarFallbackText,
	AvatarImage,
	Image,
} from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Avatar> & {
	uri: string;
	fallbackText: string;
};

export function UserPhoto({ fallbackText, uri, ...rest }: Props) {
	return (
		<Avatar
			borderWidth="$2"
			borderColor="$gray400"
			backgroundColor="$green500"
			{...rest}
		>
			<AvatarFallbackText>{fallbackText}</AvatarFallbackText>
			<AvatarImage source={{ uri }} alt="User image" />
		</Avatar>
	);
}
