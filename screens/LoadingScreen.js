import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoadingScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        let timer;

        const checkTokenValidity = async () => {
            const accessToken = await AsyncStorage.getItem("token");
            if (accessToken) {
                // Token exists, navigate to Main directly
                timer = setTimeout(() => {
                    navigation.replace("Profile");
                }, 3000);
            } else {
                // If no token, add a 3-second timer
                timer = setTimeout(() => {
                    navigation.replace("Login");
                }, 3000);
            }
        };

        checkTokenValidity();

        return () => {
            // Clear the timer if the component unmounts
            clearTimeout(timer);
        };
    }, [navigation]);

    return (
        <View style={styles.coverLoadingpage}>
            <Text style={styles.musicPalette}>
                {`MusicPalette`}
            </Text>
            <Svg style={styles.group1000000754} width="221" height="195" viewBox="0 0 221 195" fill="none">
                
                   <Path d="M211.939 89.5053C215.514 87.1498 220.248 89.9198 219.43 94.1222C206.501 160.578 135.977 206.022 66.5707 191.182C-70.6187 161.851 27.4554 -61.8227 177.192 18.1864C179.687 19.5197 180.589 22.7464 179.145 25.1794C147.508 78.4796 135.469 139.89 211.939 89.5053Z" fill="#926203" stroke="#926203" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                   <Path d="M133.043 37.1398C133.913 41.6166 132.3 46.1745 128.915 49.9324C125.529 53.6906 120.39 56.6221 114.292 57.8073C108.195 58.9925 102.332 58.1998 97.7847 55.9835C93.2382 53.7673 90.0351 50.1457 89.1649 45.6688C88.2947 41.1919 89.9078 36.6341 93.2931 32.8761C96.6786 29.1179 101.818 26.1865 107.915 25.0013C114.013 23.8161 119.876 24.6088 124.423 26.8251C128.97 29.0413 132.173 32.6629 133.043 37.1398Z" fill="#390E10" stroke="#926203"/>
                   <Path d="M166.549 145.541C176.183 167.095 168.744 168.251 153.664 171.182C138.48 167.083 116.606 157.351 130.106 136.851C123.494 119.625 130.294 124.17 145.373 121.239C159.905 135.456 181.829 128.22 166.549 145.541Z" fill="#F26600"/>
                    
                
            </Svg>

            <Svg style={styles.ellipse31} width="48" height="53" viewBox="0 0 48 53" fill="none">
                
                    <Path d="M42.2793 25.641C52.2056 47.9192 44.559 49.1062 29.06 52.1189C13.4454 47.8684 -6.55167 45.4771 2.25767 28.8497C-4.55809 11.0454 4.98566 3.5233 20.4847 0.510592C35.4382 15.2137 57.9698 7.76093 42.2793 25.641Z" fill="#2A185D"/>
                
            </Svg>

            <Svg style={styles.ellipse32} width="39" height="49" viewBox="0 0 39 49" fill="none">
                
                 <Path d="M34.1898 17.2005C42.1898 35.348 23.5774 46.2926 11.1897 48.7005C-1.31024 45.2005 -2.14226 36.8056 4.85774 23.3057C-0.642259 8.80565 6.97009 2.71358 19.3577 0.305665C31.3577 12.3056 46.6898 2.7005 34.1898 17.2005Z" fill="#3D5004"/>   
                
            </Svg>

            <Svg style={styles.ellipse33} width="60" height="53" viewBox="0 0 60 53" fill="none">
<Path d="M55.9956 4.59819C63.9956 22.7457 35.073 50.5851 22.6853 52.993C10.1853 49.4931 -4.50443 44.7925 2.49556 31.2926C-3.00443 16.7926 3.99555 2.2926 30.8533 4.59819C42.8533 16.5982 68.4956 -9.90181 55.9956 4.59819Z" fill="#D5D826"/>

            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    coverLoadingpage: {
        flexShrink: 0,
        height: 860,
        width: 400,
        backgroundColor: "rgba(57, 14, 16, 1)",
        alignItems: "flex-start",
        rowGap: 0,
    },
    musicPalette: {
        position: "absolute",
        flexShrink: 0,
        top: 449,
        left: 20,
        width: 351,
        height: 59,
        textAlign: "center",
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Inter",
        fontSize: 48,
        fontWeight: "700",
        letterSpacing: 0,
    },
    group1000000754: {
        position: "absolute",
        flexShrink: 0,
        top: 247,
        height: 193,
        left: 85,
        width: 220,
    },
    ellipse31: {
        position: "absolute",
        flexShrink: 0,
        top: 370,
        left: 110,
        width: 51,
        height: 52,
        overflow: "visible",
    },
    ellipse32: {
        position: "absolute",
        flexShrink: 0,
        top: 294,
        left: 113,
        width: 43,
        height: 46,
        overflow: "visible",
    },
    ellipse33: {
        position: "absolute",
        flexShrink: 0,
        top: 323,
        left: 152,
        width: 65,
        height: 48,
        overflow: "visible",
    },
});

