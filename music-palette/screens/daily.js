import { React, useState, useEffect } from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {Svg, Ellipse,Path} from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import LinearGradient from "react-native-linear-gradient";
import { fetchAndSetTopSongImage } from './functions1'
import { fetchTopGenres } from "./genre1.js"; 
import { getTopArtistImage } from "./artist1";
import { calculateDailyListeningTime } from "./dailytime";
import { getTopArtistName } from "./name";

export default function HomeDailyscreen({ navigation }) {
  const [spotifyProfilePicUrl, setSpotifyProfilePicUrl] = useState(null);
  const [topDailySongImage, setTopDailySongImage] = useState(null); // State to hold the top daily song image
  const [topDailyGenre, setTopDailyGenre] = useState('');
  const [topArtistImage, setTopArtistImage] = useState('');
  const [listeningTimes, setListeningTimes] = useState({
    daily: '...',
    // ... other time properties
  });
  const [topArtistName, setTopArtistName] = useState("");
  const calculateDailyListeningTime = async () => {
    const accessToken = await AsyncStorage.getItem("token");
  
    const fetchTracks = async (url) => {
      try {
        const response = await axios({
          method: "GET",
          url: url,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return response.data;
      } catch (err) {
        console.log("Error fetching data:", err.message);
        return { items: [], next: null };
      }
    };
  
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let url = "https://api.spotify.com/v1/me/player/recently-played?limit=50";
    let allTracks = [];
  
    while (url) {
      const data = await fetchTracks(url);
      const newTracks = data.items.filter(track => new Date(track.played_at) > startOfDay);
  
      allTracks = allTracks.concat(newTracks);
      if (newTracks.length < 50) break; // Break if we received less than 50 tracks (end of today's tracks)
      url = data.next;
    }
  
    // Now allTracks contains all the tracks played today
    console.log("Tracks played today:");
    allTracks.forEach(track => {
      console.log("Played at:", track.played_at, "Duration:", track.track.duration_ms / 60000);
    });
  
    const todaysListeningTime = allTracks.reduce((sum, track) => sum + track.track.duration_ms, 0) / 60000;
    const roundedTime = Math.round(todaysListeningTime);
    console.log("Total calculated time:", roundedTime);
  
    setListeningTimes(prevState => ({
      ...prevState,
      daily: roundedTime
    }));
  };
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
    const fetchTopArtistName = async () => {
      const artistName = await getTopArtistName();
      setTopArtistName(artistName);
    };
    fetchTopArtistName();
    calculateDailyListeningTime(setListeningTimes);
    getTopArtistImage(setTopArtistImage);
    fetchTopGenres("short_term", setTopDailyGenre);
    fetchAndSetTopSongImage('daily')
    .then(imageUrl => {
      // Set the image URL in the state variable
      setTopDailySongImage(imageUrl);
    })
    .catch(error => {
      // Handle any errors that may occur during the fetchAndSetTopSongImage function
      console.error(error);
    });
  }, []);
  console.log(topDailySongImage);
  console.log(topDailyGenre);
  console.log(topArtistImage);
  console.log(listeningTimes.daily);
  //console.log('topDailySongImage:', topDailySongImage);

  return (
    <LinearGradient colors={["#000000", "#8A0303"]} style={styles.container}>
      <View style={styles.homeDailyscreen}>
      <View style={styles.AlbumCoverContainer}>
      {topDailySongImage ? (
        <Image
        source={{ uri: topDailySongImage }}
       // style={styles.albumCoverImage}
        onLoad={() => console.log('Image loaded')}
        />
        ) : (
        <Text>No image available</Text>
        )}
        </View>
        <Text style={styles.insertimagetext}>
  {topDailySongImage && (
    <Image
      source={{ uri: topDailySongImage }}
      style={{ width: 200, height: 200 }} // Set the width and height as needed
    />
  )}
       </Text>
       <Text style={styles.topGenre}>{`Top Genre: ${topDailyGenre}`}</Text>
       <Text style={styles.topSong}>{`Top Song:`}</Text>
        <Text style={styles.totalminuteslistened}>
          {`Total minutes listened:\n${listeningTimes.daily} minutes`}
        </Text>
        <Svg
        style={styles.TopArtistFrame}
        width="118"
        height="120"
        viewBox="0 0 118 120"
        fill="none"
      >
        <Ellipse cx="59" cy="60" rx="59" ry="60" fill="#5B4545" />
        {topArtistImage && (
          <Image
            source={{ uri: topArtistImage }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 118,
              height: 120,
              borderRadius: 75,
            }}
          />
        )}
      </Svg>

        <Text style={styles.yourtopartist}>{`Your top artist: ${topArtistName}`}</Text>
        <Text style={styles.welcometoMusicPalette}>{`MusicPalette`}</Text>
        <Svg
          style={styles.logo}
          width="40"
          height="29"
          viewBox="0 0 40 29"
          fill="none"
        >
          <Path
            d="M30.8608 16.0015C34.9524 15.912 38.4555 18.2138 35.5511 21.0972C30.3609 26.25 21.4415 29.0936 12.6239 27.6058C-10.0609 23.7783 3.54046 -3.70382 27.014 1.7016C30.1761 2.42977 31.0495 6.21203 29.5997 9.11502C27.6907 12.9375 27.4978 16.0751 30.8608 16.0015Z"
            fill="#926203"
            stroke="#926203"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M24.0004 6.11828C24.1031 6.5354 23.9293 7.03797 23.3835 7.51615C22.8455 7.98745 22.0041 8.37336 20.981 8.53029C19.9579 8.68723 18.9945 8.57818 18.272 8.30024C17.5389 8.01824 17.1392 7.60365 17.0364 7.18653C16.9337 6.7694 17.1075 6.26684 17.6533 5.78865C18.1913 5.31735 19.0328 4.93145 20.0559 4.77451C21.079 4.61757 22.0423 4.72663 22.7648 5.00457C23.4979 5.28656 23.8976 5.70115 24.0004 6.11828Z"
            fill="#390E10"
            stroke="#926203"
          />
          <Path
            d="M30.3473 21.2208C32.0551 24.236 30.7363 24.3978 28.0632 24.8078C25.3714 24.2344 21.4938 22.8729 23.887 20.0051C22.7148 17.5952 23.9203 18.2311 26.5934 17.8211C29.1694 19.8099 33.056 18.7976 30.3473 21.2208Z"
            fill="#603309"
          />
          <Path
            d="M13.1041 21.7943C14.8637 24.911 13.5082 25.077 10.7606 25.4985C7.99262 24.9039 4.44768 24.5693 6.00933 22.2432C4.80108 19.7525 6.49293 18.7001 9.24048 18.2787C11.8913 20.3356 15.8856 19.293 13.1041 21.7943Z"
            fill="#2A185D"
          />
          <Path
            d="M12.3791 9.84151C13.7972 12.3803 10.4978 13.9114 8.30179 14.2482C6.08588 13.7586 5.93839 12.5842 7.1793 10.6956C6.2043 8.6671 7.55376 7.81484 9.74975 7.47799C11.877 9.15674 14.595 7.81301 12.3791 9.84151Z"
            fill="#3D5004"
          />
          <Path
            d="M22.981 11.8557C24.3992 14.3945 19.272 18.2891 17.076 18.6259C14.8601 18.1363 12.256 17.4787 13.4969 15.5901C12.5219 13.5616 13.7628 11.5331 18.524 11.8557C20.6512 13.5344 25.1969 9.82718 22.981 11.8557Z"
            fill="#D5D826"
          />
        </Svg>
        <View style={styles.homelogowillgohere}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <AntDesign name="home" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.DailyStats}>{`DAILY STATS`}</Text>
        <View style={styles.ShareButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Sharing")}>
        <Text style={styles.shareyourpalette}>{``}</Text>        
          </TouchableOpacity>         
        </View>
        <View style={styles.ProfilePicContainer}>
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
  
  homeDailyscreen: {
    flexShrink: 0,
    height: 844,
    width: 390,
    alignItems: "flex-start",
    rowGap: 0,
  },

  AlbumCoverContainer: {
    position: "absolute",

    flexShrink: 0,
    top: 175,
    left: 100,
    width: 200,
    height: 200,
    backgroundColor: "rgba(146, 29, 3, 1)",
    borderRadius: 10,
  },
  insertimagetext: {
    position: "absolute",
    flexShrink: 0,
    top: 178,
    left: 100,
    width: 164,
    height: 119,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Abhaya Libre SemiBold",
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0,
  },
  topGenre: {
    position: "absolute",

    flexShrink: 0,
    top: 385,
    left: 130,
    width: 305,
    height: 25,
    textAlign: "left",
    color: "rgba(225, 108, 58, 1)",
    fontFamily: "Goblin One",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0,
  },
  topSong: {
    position: "absolute",

    flexShrink: 0,
    top: 150,
    left: 150,
    width: 305,
    height: 25,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Goblin One",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0,
  },
  totalminuteslistened: {
    position: "absolute",

    flexShrink: 0,
    top: 100,
    left: 16,
    width: 352,
    height: 69,
    textAlign: "left",
    color: "rgba(229, 163, 35, 1)",
    fontFamily: "Finger Paint",
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 0,
  },
  TopArtistFrame: {
    position: "absolute",
    flexShrink: 0,
    top: 425,
    left: 139,
    width: 118,
    height: 120,
    overflow: "visible",
  },
  yourtopartist: {
    position: "absolute",
    flexShrink: 0,
    top: 465,
    left: 15,
    width: 107,
    height: 61,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Fontdiner Swanky",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0,
  },
    welcometoMusicPalette: {
    position: "absolute",
    flexShrink: 0,
    top: 13,
    left: 120,
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
  logo: {
    position: "absolute",

    flexShrink: 0,
    top: 15,
    height: 27,
    left: 75,
    width: 39,
  },
  DailyStats: {
    position: "absolute",

    flexShrink: 0,
    top: 50,
    left: 85,
    width: 232,
    height: 48,
    transform: [
      {
        rotateZ: "0.10deg",
      },
    ],
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Fugaz One",
    fontSize: 35,
    fontWeight: "400",
    letterSpacing: 0,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  ShareButtonContainer: {
    position: "absolute",

    flexShrink: 0,
    top: 600,
    height: 35,
    left: 86,
    width: 223,
  },
  letsgobutton: {
    position: "absolute",

    flexShrink: 0,
    width: 223,
    height: 35,
    borderRadius: 10,
  },
  shareyourpalette: {
    position: "absolute",

    flexShrink: 0,
    left: 3,
    width: 216,
    height: 35,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Droid Sans",
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 0,
  },
  ProfilePicContainer: {
    position: "absolute",

    flexShrink: 0,
    top: 7,
    height: 60,
    left: 326,
    width: 60,
  },
  usernamebox: {
    position: "absolute",

    flexShrink: 0,
    width: 60,
    height: 60,
    backgroundColor: "rgba(254, 253, 253, 1)",
    borderRadius: 6,
  },
  spotifyProfilePic: {
    position: "absolute",

    flexShrink: 0,
    top: 9,
    left: 5,
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  homelogowillgohere: {
    position: "absolute",
    flexShrink: 0,
    top: 15,
    left: 0,
    width: 40,
    height: 40,
  },
});
