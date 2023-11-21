import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Share } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const ProfileScreen = ({ route }) => {
  const [userProfile, setUserProfile] = useState();
  const [playLists, setPlayLists] = useState([]);

  const userId = route.params?.userId;

  const getProfile = async (id) => {
    const accessToken = await AsyncStorage.getItem("token");
    try {
      const url = id ? `https://api.spotify.com/v1/users/${id}` : "https://api.spotify.com/v1/me";
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const data = await response.json();
      setUserProfile(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProfile(userId);
  }, [userId]);

  useEffect(() => {
    const getPlaylists = async () => {
      const accessToken = await AsyncStorage.getItem("token");
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/playlists", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setPlayLists(response.data.items);
      } catch (err) {
        console.log(err.message);
      }
    };
    if (!userId) {
      getPlaylists();
    }
  }, [userId]);

  const shareProfileLink = async () => {
    const uniqueLink = `musicpalette://profile/${userProfile?.id}`;
    try {
      await Share.share({
        message: `${uniqueLink}`,
      });
    } catch (error) {
      console.error('Error sharing profile link:', error);
    }
  };

  return (
    <LinearGradient colors={["#040306", "#1c0505"]} style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={{ padding: 12, flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              resizeMode: "cover",
            }}
            source={{ uri: userProfile?.images[0]?.url }} />
          <View>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>{userProfile?.display_name}</Text>
            <Text style={{ color: "gray", fontSize: 16, fontWeight: "bold" }}>{userProfile?.email}</Text>
          </View>
        </View>
        
        {/* QR Code */}
        {userProfile && (
          <View style={styles.qrCodeContainer}>
            <QRCode
              value={`musicpalette://profile/${userProfile.id}`}
              size={200}
              color="black"
              backgroundColor="white"
            />
          </View>
        )}

        {/* Button to Share Profile Link */}
        <View style={styles.shareButtonContainer}>
          <Button title="Share My Profile" onPress={shareProfileLink} color="#ff1900" />
        </View>

        <Text style={{ color: "white", fontSize: 20, fontWeight: "500", marginHorizontal: 12 }}>Your Playlists</Text>
        <View style={{ padding: 15 }}>
          {playLists.map((item, index) => (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginVertical: 8}} key={index}>
              <Image
                source={{
                  uri:
                    item?.images[0]?.url ||
                    "https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=800",
                }}
                style={{ width: 50, height: 50, borderRadius: 4 }}
              />
              <View>
                <Text style={{ color: "white" }}>{item?.name}</Text>
                <Text style={{ color: "gray", marginTop: 7 }}>0 Followers</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default ProfileScreen
const styles = StyleSheet.create({
  shareButtonContainer: {
    margin: 20,
    // Additional styles for the share button container can be added
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginVertical: 20,
    // Additional styles for the QR code container can be added
  },
});
