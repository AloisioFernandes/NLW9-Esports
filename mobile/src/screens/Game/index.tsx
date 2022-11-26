import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import { Background } from '../../components/Background';
import logoImg from '../../assets/logo-nlw-esports.png'

import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';

import { styles } from './styles';

export function Game() {
  const route = useRoute()
  const game = route.params as GameParams

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo 
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image 
            source={logoImg}
            style={styles.logo}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}