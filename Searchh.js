import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Homee() {
    return (
        <View>
            <View style={styles.container}>
                <Ionicons name={"search"} size={25} color={'black'} />
                <TextInput style={{ color: 'black' }} placeholder="Search" />
            </View>
            <ScrollView>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 50,
        backgroundColor: 'white',
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,

    },



})