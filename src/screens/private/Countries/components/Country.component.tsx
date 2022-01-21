import React, {FC} from "react";
import { Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

type Props = {
    countryName: string;
    countryCode: string;
    onPress: ()=> void;
}
export const CountryItem: FC<Props> = ({countryName, countryCode, onPress}) => {
    return(
        <TouchableHighlight onPress={onPress}>
        <View>
            <Text>{countryName}</Text>
            <Text>{countryCode}</Text>
        </View>
        </TouchableHighlight>
    )
}