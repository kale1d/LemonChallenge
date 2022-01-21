import { Platform, StyleSheet } from "react-native";

export const listItemStyles = StyleSheet.create({
    container: {
        backgroundColor: "#e2e2e2",
        marginHorizontal: 4,
        marginVertical: 2,
        padding:12,
        borderRadius: 8,
    },
    titleStyle: {
        fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
        fontWeight: "bold",
        fontSize: 16
    },
    subtitleStyle: {
        fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
        fontWeight:"300",
        fontSize: 12 
    }
})