import React from 'react';
import { View, Modal, Text, ModalProps, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles';

import { THEME } from '../../theme';

interface Props extends ModalProps {
  discord: string;
}

export function DuoMatch({ discord, ...rest }: Props) {
  return (
    <Modal 
      transparent 
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity>
            <MaterialIcons 
              name='close'
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <Text style={styles.discord}>
            {discord}
          </Text>
        </View>
      </View>
    </Modal>
  );
}