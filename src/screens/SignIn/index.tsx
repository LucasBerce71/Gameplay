import React from 'react';
import { 
  View,
  Text,
  Image,
  StatusBar 
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import IllustrationImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

export const SignIn: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />

      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`} 
          suas jogatinas {`\n`}
          facilmente!
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        
        <ButtonIcon 
          icon={DiscordImg} 
          label="Entre com o Discord" 
          activeOpacity={.7}
        />
      </View>
    </View>
  );
}