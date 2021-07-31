import { ImageSourcePropType, TouchableOpacityProps } from "react-native";

type IButtonIcon =TouchableOpacityProps & {
  icon: ImageSourcePropType;
  label: string;
}

export default IButtonIcon;