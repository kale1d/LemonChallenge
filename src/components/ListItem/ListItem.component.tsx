import React, { FC } from "react";
import { Text, View } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import {listItemStyles as styles} from './ListItem.styles';


type Props = {
  title: string;
  subtitle: string;
  onPress?: () => void;
  disabled?: boolean;
};

export const ListItem: FC<Props> = ({
  title,
  subtitle,
  onPress = () => null,
  disabled = false,
}) => {
    const {container, titleStyle, subtitleStyle} = styles;
    return (
    <TouchableOpacity style={container} onPress={onPress} disabled={disabled}>
      <View>
        <Text style={titleStyle}>{title}</Text>
        <Text style={subtitleStyle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
