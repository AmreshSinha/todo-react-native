import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { Layout } from "react-native-reanimated";

export type Props = {
    text: string;
}

export default function Tasks(props: Props) {
    return (
        <Animated.View style={styles.item} layout={Layout.springify()}>
            <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#F1FAEE",
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
    },
    itemLeft: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    itemText: {
        maxWidth: "80%",
    },
});