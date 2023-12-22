import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';


export enum Icons {
    AntDesign = 'AntDesign',
    FontAwesome = 'FontAwesome',
    FontAwesome5 = 'FontAwesome5',
    Ionicons = 'Ionicons',
    Feather = 'Feather',
    MaterialCommunityIcons = 'MaterialCommunityIcons',
    Entypo = 'Entypo',
    MaterialIcons = 'MaterialIcons',
    SimpleLineIcons = 'SimpleLineIcons',
    Octicons = 'Octicons',
    Foundation = 'Foundation',
    EvilIcons = 'EvilIcons',
    Fontisto = 'Fontisto',
}

type IconType =
    | 'AntDesign'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Ionicons'
    | 'Feather'
    | 'MaterialCommunityIcons'
    | 'Entypo'
    | 'MaterialIcons'
    | 'SimpleLineIcons'
    | 'Octicons'
    | 'Foundation'
    | 'Fontisto'
    | 'EvilIcons';

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    type?: IconType;
    style?: any;
    onPress?: () => void;
}

const Icon: React.FC<IconProps> = ({
    name,
    size = 24,
    color = '#000000',
    type = 'MaterialCommunityIcons',
    style,
    onPress,
}) => {
    const fontSize = 24;

    const getIconComponent = () => {
        switch (type) {
            case 'AntDesign':
                return AntDesign;
            case 'FontAwesome':
                return FontAwesome;
            case 'FontAwesome5':
                return FontAwesome5;
            case 'Ionicons':
                return Ionicons;
            case 'Feather':
                return Feather;
            case 'MaterialCommunityIcons':
                return MaterialCommunityIcons;
            case 'Entypo':
                return Entypo;
            case 'MaterialIcons':
                return MaterialIcons;
            case 'SimpleLineIcons':
                return SimpleLineIcons;
            case 'Octicons':
                return Octicons;
            case 'Foundation':
                return Foundation;
            case 'EvilIcons':
                return EvilIcons;
            case 'Fontisto':
                return Fontisto;
            default:
                return MaterialCommunityIcons;
        }
    };

    const IconComponent = getIconComponent();

    return <IconComponent name={name} size={size || fontSize} color={color} style={style} />;
};

export default Icon;