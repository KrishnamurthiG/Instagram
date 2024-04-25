import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Homee() {
    return (
        <View style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
            <View style={{ flexDirection: 'row', alignItems: "flex-end" }}>
                <Text style={styles.heading}>Reels</Text>
                <Ionicons name={"chevron-down-sharp"} size={25} color={'black'} />
                <Feather style={{ marginLeft: 240 }} name={"camera"} size={25} color={'black'} />
            </View>

            <View style={{ marginTop: 20 }}>
                <MaterialCommunityIcons style={{ left: 335, marginTop: 400 }} name={"heart-outline"} size={30} color={'black'} />
            </View>
            <View style={{ marginTop: 20 }}>
                <Feather style={{ left: 335 }} name={"message-circle"} size={30} color={'black'} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                <MaterialCommunityIcons name={"account-circle"} size={40} color={'black'} />
                <Text style={{ color: 'black', fontSize: 20, }}>  Rahul S M...</Text>
                <View>
                    <Feather style={{ left: 175 }} name={"send"} size={30} color={'black'} />
                </View>
            </View>

            <View style={{ marginBottom: 20 }}>
                <MaterialCommunityIcons style={{ marginLeft: 180, left: 150, marginTop: 0, }} name={"dots-vertical"} size={30} color={'black'} />
            </View>
            <View style={{}}>
                <MaterialCommunityIcons style={{ marginLeft: 175, marginTop: 0, left: 150 }} name={"account-box-outline"} size={35} color={'black'} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 10,
        fontSize: 25,
        color: 'black',
        marginLeft: 10,
        fontWeight: '500'
    }

})