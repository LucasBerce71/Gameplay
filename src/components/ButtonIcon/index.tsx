import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import IButtonIcon from '../../models/components/IButtonIconProps';
import { styles } from './styles';

export const ButtonIcon: React.FC<IButtonIcon> = ({ icon, label, ...rest }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={icon} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}