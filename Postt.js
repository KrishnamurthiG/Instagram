import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


export default function Homee() {
    return (
        <View>
            <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.postImage} />
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={styles.header}>Recents</Text>
                <Ionicons name={"chevron-down-sharp"} size={25} color={'black'} />
                <Feather style={{ marginLeft: 230 }} name={"camera"} size={25} color={'black'} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        color: 'black',
        fontSize: 25,
        fontWeight: '500',
        marginTop: 10
    },
    postImage: {
        width: '100%',
        height: 300,
    },


})