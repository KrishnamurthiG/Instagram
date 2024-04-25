import React from "react";
import { StatusBar, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { ScrollView } from "react-native-gesture-handler";
// import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
export default function Homee() {
    return (

        <View style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
            <StatusBar backgroundColor={'silver'} />
            <ScrollView>
                <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'flex-end', marginLeft: 10, }}>
                    <Text style={styles.container}>Instagram </Text>
                    <Ionicons name={"chevron-down-sharp"} size={25} color={'black'} />
                    <View style={{ flexDirection: 'row', marginLeft: 120, }}>
                        <MaterialCommunityIcons name={"heart-outline"} size={35} color={'black'} />
                        <View style={{ flexDirection: 'row', marginLeft: 20, }}>
                            <AntDesign name={"message1"} size={30} color={'black'} />
                        </View>
                    </View>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginTop: 20, marginLeft: 10, marginBottom: 10, flexDirection: 'row', }}>
                        <View style={{ alignItems: 'center', }}>
                            <MaterialCommunityIcons name={"account-circle"} size={80} color={'black'} />
                            <Text style={{ color: 'black' }}>Your Story</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginLeft: 20 }}>
                            <MaterialCommunityIcons name={"account-circle"} size={80} color={'black'} />
                            <Text style={{ color: 'black' }}>Rahul S M</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginLeft: 20 }}>
                            <MaterialCommunityIcons name={"account-circle"} size={80} color={'black'} />
                            <Text style={{ color: 'black' }}>Subhash G</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginLeft: 20 }}>
                            <MaterialCommunityIcons name={"account-circle"} size={80} color={'black'} />
                            <Text style={{ color: 'black' }}>Yeshmith H</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginLeft: 20 }}>
                            <MaterialCommunityIcons name={"account-circle"} size={80} color={'black'} />
                            <Text style={{ color: 'black' }}>Manoj Kumar</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginLeft: 20 }}>
                            <MaterialCommunityIcons name={"account-circle"} size={80} color={'black'} />
                            <Text style={{ color: 'black' }}>Vishnu Prakash</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginLeft: 20 }}>
                            <MaterialCommunityIcons name={"account-circle"} size={80} color={'black'} />
                            <Text style={{ color: 'black' }}>Pramodh</Text>
                        </View>
                    </View>
                </ScrollView>



                <View style={{ marginTop: 30, marginLeft: 15, marginRight: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name={"account-circle"} size={50} color={'black'} />
                        <Text style={{ color: 'black', fontSize: 20 }}>  Rahul S M</Text>
                        <MaterialCommunityIcons style={{ marginLeft: 180 }} name={"dots-vertical"} size={30} color={'black'} />
                    </View>
                    <Image source={require('D:/Krishna/ReactNative/Native1/Practice1/src/Image/images1.jpg')} style={styles.postImage} />
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <MaterialCommunityIcons name={"heart-outline"} size={30} color={'black'} />
                        <Feather style={{ left: 15 }} name={"message-circle"} size={30} color={'black'} />
                        <Feather style={{ left: 30 }} name={"send"} size={30} color={'black'} />
                        <Feather style={{ left: 240 }} name={"bookmark"} size={30} color={'black'} />
                    </View>
                </View>

                <View style={{ marginTop: 40, marginLeft: 15, marginRight: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name={"account-circle"} size={50} color={'black'} />
                        <Text style={{ color: 'black', fontSize: 20 }}>  Subhash</Text>
                        <MaterialCommunityIcons style={{ marginLeft: 190 }} name={"dots-vertical"} size={30} color={'black'} />
                    </View>
                    <Image source={require('D:/Krishna/ReactNative/Native1/Practice1/src/Image/images2.jpg')} style={styles.postImage} />
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <MaterialCommunityIcons name={"heart-outline"} size={30} color={'black'} />
                        <Feather style={{ left: 15 }} name={"message-circle"} size={30} color={'black'} />
                        <Feather style={{ left: 30 }} name={"send"} size={30} color={'black'} />
                        <Feather style={{ left: 240 }} name={"bookmark"} size={30} color={'black'} />
                    </View>
                </View>

                <View style={{ marginTop: 40, marginLeft: 15, marginRight: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name={"account-circle"} size={50} color={'black'} />
                        <Text style={{ color: 'black', fontSize: 20 }}>  Krishna</Text>
                        <MaterialCommunityIcons style={{ marginLeft: 200 }} name={"dots-vertical"} size={30} color={'black'} />
                    </View>
                    <Image source={require('D:/Krishna/ReactNative/Native1/Practice1/src/Image/images3.jpg')} style={styles.postImage} />
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <MaterialCommunityIcons name={"heart-outline"} size={30} color={'black'} />
                        <Feather style={{ left: 15 }} name={"message-circle"} size={30} color={'black'} />
                        <Feather style={{ left: 30 }} name={"send"} size={30} color={'black'} />
                        <Feather style={{ left: 240 }} name={"bookmark"} size={30} color={'black'} />
                    </View>
                </View>

                <View style={{ marginTop: 40, marginLeft: 15, marginRight: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name={"account-circle"} size={50} color={'black'} />
                        <Text style={{ color: 'black', fontSize: 20 }}>  Yeshmith</Text>
                        <MaterialCommunityIcons style={{ marginLeft: 180 }} name={"dots-vertical"} size={30} color={'black'} />
                    </View>
                    <Image source={require('D:/Krishna/ReactNative/Native1/Practice1/src/Image/download1.jpg')} style={styles.postImage} />
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <MaterialCommunityIcons name={"heart-outline"} size={30} color={'black'} />
                        <Feather style={{ left: 15 }} name={"message-circle"} size={30} color={'black'} />
                        <Feather style={{ left: 30 }} name={"send"} size={30} color={'black'} />
                        <Feather style={{ left: 240 }} name={"bookmark"} size={30} color={'black'} />
                    </View>
                </View>

                <View style={{ marginTop: 40, marginLeft: 15, marginRight: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name={"account-circle"} size={50} color={'black'} />
                        <Text style={{ color: 'black', fontSize: 20 }}>  Vishnu</Text>
                        <MaterialCommunityIcons style={{ marginLeft: 210 }} name={"dots-vertical"} size={30} color={'black'} />
                    </View>
                    <Image source={require('D:/Krishna/ReactNative/Native1/Practice1/src/Image/download2.jpg')} style={styles.postImage} />
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <MaterialCommunityIcons name={"heart-outline"} size={30} color={'black'} />
                        <Feather style={{ left: 15 }} name={"message-circle"} size={30} color={'black'} />
                        <Feather style={{ left: 30 }} name={"send"} size={30} color={'black'} />
                        <Feather style={{ left: 240 }} name={"bookmark"} size={30} color={'black'} />
                    </View>
                </View>

                <View style={{ marginTop: 40, marginLeft: 15, marginRight: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name={"account-circle"} size={50} color={'black'} />
                        <Text style={{ color: 'black', fontSize: 20 }}>  Manoj Kumar</Text>
                        <MaterialCommunityIcons style={{ marginLeft: 150 }} name={"dots-vertical"} size={30} color={'black'} />
                    </View>
                    <Image source={require('D:/Krishna/ReactNative/Native1/Practice1/src/Image/download3.jpg')} style={styles.postImage} />
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <MaterialCommunityIcons name={"heart-outline"} size={30} color={'black'} />
                        <Feather style={{ left: 15 }} name={"message-circle"} size={30} color={'black'} />
                        <Feather style={{ left: 30 }} name={"send"} size={30} color={'black'} />
                        <Feather style={{ left: 240 }} name={"bookmark"} size={30} color={'black'} />
                    </View>
                </View>
            </ScrollView>



        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        color: 'black',
        fontSize: 30,
        fontStyle: "italic"

    },
    postImage: {
        width: '100%',
        height: 350,

    },
})