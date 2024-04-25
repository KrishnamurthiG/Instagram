import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function Homee() {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <Octicons style={{ marginLeft: 10 }} name={"lock"} size={20} color={'black'} />
                <Text style={styles.header}>Krishna_kitty44</Text>
                <View>
                    <Ionicons style={{ marginTop: 9 }} name={"chevron-down-sharp"} size={20} color={'black'} />
                </View>
                <Feather style={{ left: 50 }} name={"at-sign"} size={25} color={'black'} />

                <Feather style={{ left: 70 }} name={"plus-square"} size={25} color={'black'} />
                <MaterialCommunityIcons style={{ left: 90 }} name={"reorder-horizontal"} size={25} color={'black'} />
            </View>

            <View style={{ marginTop: 30, marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name={"account-circle"} size={90} color={'black'} />
                <View style={{ left: 50, }}>
                    <Text style={styles.text}>   1</Text>
                    <Text style={styles.text}>posts</Text>
                </View>
                <View style={{ left: 80 }}>
                    <Text style={styles.text}>    466</Text>
                    <Text style={styles.text}>followers</Text>
                </View>
                <View style={{ left: 100 }}>
                    <Text style={styles.text}>   524</Text>
                    <Text style={styles.text}>following</Text>
                </View>
            </View>

            <View>
                <Text style={{ fontSize: 15, fontWeight: '500', color: 'black', marginBottom: 20, marginLeft: 10 }}>@Krishna_kitty44</Text>
                <View>
                    <Text style={styles.textData}>Krishna</Text>
                    <Text style={styles.textData}>Date of Birth</Text>
                    <Text style={styles.textData}>My DATA is NON of YOU r Business</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.botton}>
                    <Text style={{ fontSize: 15, color: 'black' }}>Edit profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botton}>
                    <Text style={{ fontSize: 15, color: 'black' }}>Share profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#D3D3D3', marginLeft: 10, justifyContent: 'center', width: 40, height: 30, alignItems: 'center', marginTop: 10, borderRadius: 10 }}>
                    <MaterialCommunityIcons name={"account-plus-outline"} size={25} color={'black'} />
                </TouchableOpacity>
            </View>
            <View>
                <EvilIcons style={{ marginLeft: 10, marginTop: 20, }} name={"plus"} size={100} color={'black'} />
                <Text style={{ color: 'black', left: 50 }}>New</Text>
            </View>

            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <MaterialCommunityIcons style={{ marginLeft: 40 }} name={"post-outline"} size={35} color={'black'} />
                <MaterialCommunityIcons style={{ marginLeft: 100 }} name={"movie-open-play-outline"} size={35} color={'black'} />
                <MaterialCommunityIcons style={{ marginLeft: 90 }} name={"briefcase-account-outline"} size={35} color={'black'} />
            </View>
            <Text style={{ backgroundColor: 'silver', fontSize: 0 }}></Text>
            <Image source={require('D:/Krishna/ReactNative/Native1/Practice1/src/Image/images2.jpg')} style={styles.postImage} />

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        color: 'black',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '500'
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black'
    },
    textData: {
        marginLeft: 10,
        color: 'black'
    },
    botton: {
        backgroundColor: '#D3D3D3',
        width: 150,
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10
    },
    postImage: {
        width: 130,
        height: 150,
    }

})