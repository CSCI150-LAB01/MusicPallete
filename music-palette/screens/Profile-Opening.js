import { React, useState, useEffect } from "react";
import { Share, View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import LinearGradient from "react-native-linear-gradient";
import { shareProfileLink } from "./sharefunction";


export default function ProfileOpeningpage({ navigation }) {

  const navigateToPage = (screenName) => {
    navigation.navigate(screenName);
  };
  const shareProfileLink = async (userProfile) => {
    const uniqueLink = `musicpalette://profile/${userProfile?.id}`; // Use backticks
    try {
      await Share.share({
        message: `${uniqueLink}`, // Use backticks for template literal
      });
    } catch (error) {
      console.error('Error sharing profile link:', error);
    }
  };
  const handleShareButtonPress = async () => {
    shareProfileLink(); // Set the state back to indicate that sharing is complete
  };
  const [sharingProfile, setSharingProfile] = useState('');
  const [userProfile, setUserProfile] = useState(null);

  const [spotifyProfilePicUrl, setSpotifyProfilePicUrl] = useState(null);
  useEffect(() => {
    
    const fetchSpotifyProfile = async () => {
      const accessToken = await AsyncStorage.getItem("token");

      try {
        const response = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Replace with your access token
          },
        });

        const profilePicUrl = response.data.images[1]?.url;
        if (profilePicUrl) {
          setSpotifyProfilePicUrl(profilePicUrl);
        }
      } catch (error) {
        console.error("Error fetching Spotify profile:", error);
      }
    };
   // console.log(shareProfileLink())
    fetchSpotifyProfile();
  }, []);

  return (
    <LinearGradient colors={["#000000", "#8A0303"]} style={styles.container}>
      <View style={styles.profileOpeningpage}>
        <View style={styles.LogoContainer}>
          <Text style={styles.welcometoMusicPalette}>{`MusicPalette`}</Text>
          <Svg
            style={styles.logo}
            width="31"
            height="23"
            viewBox="0 0 31 23"
            fill="none"
          >
            <Path
              d="M21.8801 11.6261C22.9439 15.5808 28.7966 15.8018 25.4782 18.2016C21.486 21.0887 15.7317 22.5315 10.0338 21.5666C-6.57523 18.7538 2.61505 -0.93953 19.3674 1.66994C22.5672 2.16835 23.3247 5.93664 22.2226 8.98164C21.8419 10.0333 21.6993 10.954 21.8801 11.6261Z"
              fill="#926203"
              stroke="#926203"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M18.4896 5.32444C18.5532 5.58358 18.4522 5.9258 18.0578 6.27262C17.671 6.61272 17.0583 6.89696 16.3056 7.01284C15.553 7.12872 14.8505 7.04697 14.331 6.84641C13.8013 6.64188 13.5458 6.35456 13.4822 6.09542C13.4186 5.83628 13.5196 5.49406 13.914 5.14724C14.3008 4.80714 14.9135 4.5229 15.6662 4.40701C16.4188 4.29113 17.1213 4.37288 17.6408 4.57345C18.1705 4.77798 18.4261 5.0653 18.4896 5.32444Z"
              fill="#390E10"
              stroke="#926203"
            />
            <Path
              d="M23.3966 16.7347C24.6842 19.0164 23.6899 19.1389 21.6744 19.4492C19.6449 19.0153 16.7213 17.9849 18.5257 15.8146C17.6419 13.991 18.5508 14.4722 20.5663 14.1619C22.5085 15.6669 25.4388 14.9009 23.3966 16.7347Z"
              fill="#603309"
            />
            <Path
              d="M10.3958 17.1687C11.7225 19.5272 10.7005 19.6529 8.62891 19.9718C6.5419 19.5218 3.86914 19.2687 5.04657 17.5084C4.13559 15.6235 5.41119 14.8271 7.48275 14.5082C9.48141 16.0648 12.4929 15.2758 10.3958 17.1687Z"
              fill="#2A185D"
            />
            <Path
              d="M9.84921 8.12329C10.9185 10.0445 8.43079 11.2032 6.77508 11.4581C5.10436 11.0876 4.99316 10.1988 5.92876 8.76963C5.19364 7.23455 6.21109 6.5896 7.8668 6.33468C9.47069 7.60509 11.5199 6.58822 9.84921 8.12329Z"
              fill="#3D5004"
            />
            <Path
              d="M17.8427 9.64753C18.912 11.5688 15.0462 14.516 13.3905 14.771C11.7198 14.4004 9.75642 13.9028 10.692 12.4736C9.95691 10.9385 10.8925 9.40344 14.4823 9.64752C16.0862 10.9179 19.5134 8.11245 17.8427 9.64753Z"
              fill="#D5D826"
            />
          </Svg>
        </View>
        <TouchableOpacity style={styles.ShareButton} onPress={handleShareButtonPress}>
  <Text style={styles.buttonText}>{'Share'}</Text>
</TouchableOpacity>
        <View style={styles.group1000000767}>
          <TouchableOpacity
            style={styles.NavigationButton}
            onPress={() => navigateToPage("Daily")}
          >
            <Text style={styles.topPicksoftheDay}>
              {`Top Picks of the Day`}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.group1000000768}>
          <TouchableOpacity
            style={styles.NavigationButton}
            onPress={() => navigateToPage("Weekly")}
          >
            <Text style={styles.topPicksoftheWeek}>
              {`Top Picks of the Week`}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.group1000000771}>
          <TouchableOpacity
            style={styles.NavigationButton}
            onPress={() => navigateToPage("Yearly")}
          >
            <Text style={styles.topPicksoftheYear}>
              {`Top Picks of the Year`}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.group1000000770}>
          <TouchableOpacity
            style={styles.NavigationButton}
            onPress={() => navigateToPage("Monthly")}
          >
            <Text style={styles.topPicksoftheMonth}>
              {`Top Picks of the Month`}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.group1000000769}>
          {spotifyProfilePicUrl && (
            <Image
              style={styles.spotifyProfilePic}
              source={{ uri: spotifyProfilePicUrl }}
            />
          )}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  profileOpeningpage: {
    flexShrink: 0,
    height: 844,
    width: 390,
    alignItems: "flex-start",
    rowGap: 0,
  },
  group1000000767: {
    position: "absolute",

    flexShrink: 0,
    top: 330,
    height: 66,
    left: 25,
    width: 328,
  },
  NavigationButton: {
    position: "absolute",

    flexShrink: 0,
    width: 328,
    height: 66,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderRadius: 10,
  },
  ShareButton:{
      position: 'absolute',
      flexShrink: 0,
      top: 60,
      height: 30,
      left: 25,
      width: 50,
      color: "rgba(255, 255, 2, 1)", // Change the background color as needed
      justifyContent: 'center',
      alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Change the text color as needed
    fontSize: 16,
    fontWeight: 'bold',
  },
  topPicksoftheDay: {
    position: "absolute",

    flexShrink: 0,
    top: 27,
    left: 25,
    width: 301,
    height: 35,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Open Sans",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 28.014217376708984,
  },
  group1000000768: {
    position: "absolute",

    flexShrink: 0,
    top: 417,
    height: 66,
    left: 25,
    width: 328,
  },
  topPicksoftheWeek: {
    position: "absolute",

    flexShrink: 0,
    top: 27,
    left: 15,
    width: 320,
    height: 35,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Open Sans",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 28.014217376708984,
  },
  group1000000771: {
    position: "absolute",

    flexShrink: 0,
    top: 591,
    height: 66,
    left: 23,
    width: 328,
  },
  topPicksoftheYear: {
    position: "absolute",

    flexShrink: 0,
    top: 27,
    left: 15,
    width: 309,
    height: 31,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Open Sans",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 28.014217376708984,
  },
  group1000000770: {
    position: "absolute",

    flexShrink: 0,
    top: 504,
    height: 66,
    left: 25,
    width: 341,
  },
  topPicksoftheMonth: {
    position: "absolute",

    flexShrink: 0,
    top: 27,
    left: 15,
    width: 337,
    height: 34,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Open Sans",
    fontSize: 29,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 28.014217376708984,
  },
  group1000000769: {
    position: "absolute",

    flexShrink: 0,
    top: 82,
    height: 120,
    left: 135,
    width: 120,
  },
  usernamebox: {
    position: "absolute",

    flexShrink: 0,
    width: 120,
    height: 120,
    backgroundColor: "rgba(254, 253, 253, 1)",
    borderRadius: 20,
  },
  spotifyProfilepic: {
    position: "absolute",

    flexShrink: 0,
    top: 18,
    left: 10,
    width: 100,
    height: 83,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Open Sans",
    fontSize: 21,
    fontWeight: "800",
    letterSpacing: 0,
    lineHeight: 15.014217376708984,
  },
  LogoContainer: {
    position: "absolute",

    flexShrink: 0,
    top: 50,
    height: 50,
    right: 250,
    width: 160,
  },

  welcometoMusicPalette: {
    position: "absolute",
    flexShrink: 0,
    top: 9,
    left: 139,
    width: 260,
    height: 30,
    transform: [
      {
        rotateZ: "0.20deg",
      },
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
      height: 4,
    },
    textShadowRadius: 4,
  },
  group1000000757: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 27,
    left: 4,
    width: 28,
  },
  logo: {
    position: "absolute",
    flexShrink: 0,
    top: 15,
    height: 20,
    left: 109,
    width: 29,
  },
  group1000000769: {
    position: "absolute",
    flexShrink: 0,
    top: 100,
    height: 150,
    left: 100,
    width: 150,
  },
  spotifyProfilePic: {
    position: "absolute",
    flexShrink: 0,
    top: 18,
    left: 10,
    width: 150,
    height: 150,
    borderRadius: 45,
  },
});