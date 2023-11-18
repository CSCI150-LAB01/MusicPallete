import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';
import * as AppAuth from 'expo-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Svg, Path } from 'react-native-svg';


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
                    navigation.replace("Profile");
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
            navigation.navigate("Profile");
        }
    }
    return (
        <SafeAreaView>
                <Text style={styles.welcome}>
        				{`Welcome`}
      			</Text>
                
                  <View style={styles.prompttoSpotify}>
                <Text style={styles.welcome}>
        				{`Welcome`}
      			</Text>
      			<Text style={styles.pleaselogintoSpotifytocontinue}>
        				{`Please log in to Spotify to continue`}
      			</Text>
      			
      			<View style={styles.group1000000758}>
        				<View style={styles.rectangle98}/>
        				<Text style={styles.welcometoMusicPalette}>
          					{`MusicPalette`}
        				</Text>
                        

<Svg style={styles.group1000000757} width="40" height="29" viewBox="0 0 40 29" fill="none" >
<Path d="M30.8608 16.0015C34.9524 15.912 38.4555 18.2138 35.5511 21.0972C30.3609 26.25 21.4415 29.0936 12.6239 27.6058C-10.0609 23.7783 3.54046 -3.70382 27.014 1.7016C30.1761 2.42977 31.0495 6.21203 29.5997 9.11502C27.6907 12.9375 27.4978 16.0751 30.8608 16.0015Z" fill="#926203" stroke="#926203" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M24.0004 6.11829C24.1031 6.53541 23.9293 7.03798 23.3835 7.51617C22.8455 7.98747 22.0041 8.37337 20.981 8.53031C19.9579 8.68725 18.9945 8.57819 18.272 8.30025C17.5389 8.01826 17.1392 7.60366 17.0364 7.18654C16.9337 6.76942 17.1075 6.26685 17.6533 5.78867C18.1913 5.31737 19.0328 4.93146 20.0559 4.77452C21.079 4.61759 22.0423 4.72664 22.7648 5.00458C23.4979 5.28658 23.8976 5.70117 24.0004 6.11829Z" fill="#390E10" stroke="#926203"/>
<Path d="M30.3473 21.2208C32.0551 24.236 30.7364 24.3978 28.0632 24.8078C25.3714 24.2345 21.4938 22.8729 23.887 20.0051C22.7148 17.5952 23.9203 18.2311 26.5935 17.8211C29.1695 19.8099 33.056 18.7977 30.3473 21.2208Z" fill="#603309"/>
<Path d="M13.104 21.7943C14.8637 24.911 13.5082 25.077 10.7606 25.4985C7.99259 24.9039 4.44764 24.5693 6.0093 22.2432C4.80105 19.7525 6.4929 18.7002 9.24045 18.2787C11.8913 20.3356 15.8855 19.293 13.104 21.7943Z" fill="#2A185D"/>
<Path d="M12.3791 9.84153C13.7973 12.3803 10.4978 13.9114 8.30182 14.2483C6.08591 13.7586 5.93842 12.5842 7.17933 10.6956C6.20433 8.66712 7.55379 7.81486 9.74978 7.478C11.8771 9.15675 14.595 7.81303 12.3791 9.84153Z" fill="#3D5004"/>
<Path d="M22.981 11.8557C24.3992 14.3945 19.272 18.2891 17.076 18.626C14.8601 18.1363 12.256 17.4787 13.4969 15.5901C12.5219 13.5616 13.7628 11.5331 18.524 11.8557C20.6513 13.5344 25.1969 9.8272 22.981 11.8557Z" fill="#D5D826"/>
</Svg>

</View>
    		</View>


               <View style={{ height: 80 }} />
               <Pressable
  style={{
    position: "absolute",
    top: 453,
    left: 66,
    width: 245,
    height: 32,
    backgroundColor: "rgba(57, 14, 16, 1)",
    borderRadius: 10,
    justifyContent: "center", // Center the text vertically
    alignItems: "center", // Center the text horizontally
  }}
  onPress={authenticate}
>
  <Text
    style={{
      color: "rgba(255, 248, 248, 1)",
      fontSize: 25,
      fontWeight: "800",
      letterSpacing: 0,
      lineHeight: 30.014217376708984,
    }}
  >
    Go to Spotify
  </Text>
</Pressable>

                
            </SafeAreaView>
        
    );
};

export default LoginScreen

const styles = StyleSheet.create({
    prompttoSpotify: {
  flexShrink: 0,
  height: 1000,
  width: 400,
  backgroundColor: "rgba(28, 5, 5, 1)",
  alignItems: "flex-start",
  rowGap: 0
},
    welcome: {
  position: "absolute",
  flexShrink: 0,
  top: 300,
  left: 66,
  width: 246,
  height: 56,
  textAlign: "center",
  color: "rgba(255, 255, 255, 1)",
  fontFamily: "Inter",
  fontSize: 48,
  fontWeight: "700",
  letterSpacing: 0
},
                 
letsgobutton: {
  position: "absolute",
  flexShrink: 0,
  top: 436,
  left: 25,
  width: 328,	
  height: 66,
  backgroundColor: "rgba(57, 14, 16, 1)",
  borderRadius: 10
},
    pleaselogintoSpotifytocontinue: {
  position: "absolute",
  flexShrink: 0,
  top: 361,
  left: 60,
  width: 258,
  height: 20,
  textAlign: "center",
  color: "rgba(255, 255, 255, 1)",
  fontFamily: "Inter",
  fontSize: 15,
  fontWeight: "500",
  letterSpacing: 0
},
    gotoSpotify: {
  position: "absolute",
  flexShrink: 0,
  top: 453,
  left: 66,
  width: 245,
  height: 32,
  textAlign: "center",
  color: "rgba(255, 248, 248, 1)",
  //fontFamily: "Open Sans",
  fontSize: 25,
  fontWeight: "800",
  letterSpacing: 0,
  lineHeight: 30.014217376708984
},
    group1000000758: {
  position: "absolute",
  flexShrink: 0,
  top: 230,
  height: 34,
  left: 75,
  width: 389
},
    rectangle98: {
  position: "absolute",
  flexShrink: 0,
  width: 175,
  height: 34,
  backgroundColor: "rgba(0, 0, 0, 1)"
},
    welcometoMusicPalette: {
  position: "absolute",
  flexShrink: 0,
  top: 1,
  left: 44,
  width: 345,
  height: 31,
  transform: [
      {
          rotateZ: "0.20deg"
      }
  ],
  textAlign: "left",
  color: "rgba(255, 255, 255, 1)",
  fontFamily: "Euphoria Script",
  fontSize: 30,
  fontWeight: "400",
  letterSpacing: 0,
  textShadowColor: "rgba(0, 0, 0, 0.25)",
  textShadowOffset: {
      width: 0,
      height: 4
  },
  textShadowRadius: 4
},
    group1000000757: {
  position: "absolute",
  flexShrink: 0,
  top: 3,
  height: 27,
  left: 5,
  width: 39
}})
