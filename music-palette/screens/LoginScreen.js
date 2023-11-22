import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';
import * as AppAuth from 'expo-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const checkTokenValidity = async () => {
            const accessToken = await AsyncStorage.getItem("token");
            const expirationDate = await AsyncStorage.getItem("expirationDate");
            console.log("access token", accessToken);
            console.log("expiration date", expirationDate);

            if (accessToken && expirationDate) {
                const currentTime = Date.now();

                if (currentTime < parseInt(expirationDate)) {
                    // token is still valid
                    navigation.replace("Main");
                }
                else {
                    // token is expired
                    AsyncStorage.removeItem("token");
                    AsyncStorage.removeItem("expirationDate");
                }
            }
        }

        checkTokenValidity();
    }, [])
    async function authenticate() {
        const config = {
            issuer: "https://accounts.spotify.com",
            clientId: "8d623741fbee417eaf8d46af9eabf768",
            scopes: [
                "user-read-email",
                "user-library-read",
                "user-read-recently-played",
                "user-top-read",
                "playlist-read-private",
                "playlist-read-collaborative",
                "playlist-modify-public" // or "playlist-modify-private"
            ],
            redirectUrl: "exp://localhost:19002/--/spotify-auth-callback"
        }
        const result = await AppAuth.authAsync(config);
        console.log(result);

        if (result.accessToken) {
            const expirationDate = new Date(result.accessTokenExpirationDate).getTime();
            AsyncStorage.setItem("token", result.accessToken);
            AsyncStorage.setItem("expirationDate", expirationDate.toString());
            navigation.navigate("Main");
        }
    }
    return (
        <LinearGradient colors={["#040306", "#1c0505"]} style={{ flex: 1 }}>
            <SafeAreaView>
                <View style={{ height: 80 }} />
                <Ionicons
                    style={{ textAlign: "center" }}
                    name="color-palette" size={80}
                    color="white" />
                <Text
                    style={{
                        color: "white",
                        fontSize: 40,
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: 40
                    }}
                >
                    Music Palette
                </Text>

                <View style={{ height: 80 }} />
                <Pressable
                    style={{
                        backgroundColor: "#282828",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={authenticate}
                >
                    <Text style = {{color: "white"}}>Sign In With Spotify</Text>
                </Pressable>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default LoginScreen

const styles = StyleSheet.create({})