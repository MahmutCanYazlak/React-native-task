import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Badge, Surface, Text, Title } from 'react-native-paper';
import Icon from './Icons';
import { colors, dHeight, dWidth } from '../../constants';

interface AppHeaderProps {
	style?: object;
	menu?: boolean;
	onPressMenu?: () => void;
	back?: boolean;
	onPressBack?: () => void;
	title?: number | string;
	right?: string;
	rightComponent?: React.ReactNode;
	onRightPress?: () => void;
	optionalBtn?: string;
	optionalBtnPress?: () => void;
	headerBg?: string;
	iconColor?: string;
	titleAlign?: 'left' | 'center' | 'right';
	optionalBadge?: string;
}

const IconSize = 24;




const AppHeader: React.FC<AppHeaderProps> = ({
	style,
	menu,
	onPressMenu,
	back,
	onPressBack,
	title,
	right,
	rightComponent,
	onRightPress,
	optionalBtn,
	optionalBtnPress,
	headerBg = colors.primary,
	iconColor = colors.white,
	titleAlign = 'center',
	optionalBadge,
}) => {

	const LeftView = () => (
		<View style={styles.view} >
			{menu && (
				<TouchableOpacity onPress={onPressMenu}>
					<Icon name="menu" size={IconSize} color={iconColor} />
				</TouchableOpacity>
			)}
			{back && (
				<TouchableOpacity onPress={onPressBack} style={{ width: 150, height: 26 }} >
					<Icon name="arrow-left" size={IconSize} color={iconColor} />
				</TouchableOpacity>
			)}
		</View>
	);

	const RightView = () => (
		rightComponent ?
			<>
				{rightComponent}
			</>
			:
			(
				<View style={[styles.view, styles.rightView]}>
					{optionalBtn && (
						<TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
							<Icon name={optionalBtn} size={IconSize} color={iconColor} />
							{optionalBadge && (
								<Badge style={{ position: 'absolute', top: -5, right: -10 }}>
									{optionalBadge}
								</Badge>
							)}
						</TouchableOpacity>
					)}
					{right && (
						<TouchableOpacity onPress={onRightPress} style={{ width: 40, height: 26 }}>
							<Icon name={right} size={IconSize} color={iconColor} />
						</TouchableOpacity>
					)}
				</View>
			)
	);

	const TitleView = () => (
		<View style={styles.titleView}>
			<Title style={[{ color: iconColor, textAlign: titleAlign }]} numberOfLines={1}>{title}</Title>
		</View>
	);

	return (
		<Surface style={[styles.header, style, { backgroundColor: headerBg }]}>
			<LeftView />
			<TitleView />
			<RightView />
		</Surface>
	);
};

export default AppHeader;

const styles = StyleSheet.create({
	header: {
		height: dHeight * 0.06,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: dWidth * 0.02,
	},
	view: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',

	},
	titleView: {
		flex: 2,
	},
	rightView: {
		justifyContent: 'flex-end',
	},
	rowView: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});