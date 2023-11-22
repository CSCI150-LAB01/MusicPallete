import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import ArtistCard from '../components/ArtistCard';
import RecentlyPlayedCard from '../components/RecentlyPlayedCard';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [userProfile, setUserProfile] = useState();
  const navigation = useNavigation();
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [topGenres, setTopGenres] = useState([]);
  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [listeningTimes, setListeningTimes] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0,
    yearly: 0
  });
  const greetingMessage = () => {
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
      return "Goodmorning";
    }
    else if (currentTime < 16) {
      return 'Good Afternoon'
    }
    else {
      return "Good Evening"
    }
  }
  const message = greetingMessage();
  const getProfile = async () => {
    const accessToken = await AsyncStorage.getItem("token");

    try {
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer  ${accessToken}`
        }
      })
      const data = await response.json();
      setUserProfile(data);
      return data;
    }
    catch (err) {
      console.log(err.message)
    }
  }
  useEffect(() => {
    getProfile()
  }, []);
  console.log(userProfile)
  const getRecentlyPlayedSongs = async () => {
    const accessToken = await AsyncStorage.getItem("token");

    try {
      const response = await axios({
        method: "GET",
        url: "https://api.spotify.com/v1/me/player/recently-played?limit=4",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const tracks = response.data.items;
      setRecentlyPlayed(tracks);
    }
    catch (err) {
      console.log(err.message)
    }
  }
  useEffect(() => {
    getRecentlyPlayedSongs();
  }, [])
  console.log(recentlyPlayed)
  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginVertical: 8,
          backgroundColor: "#282828",
          borderRadius: 4,
          elevation: 3
        }}
      >
        <Image style={{ height: 55, width: 55 }} source={{ uri: item.track.album.images[0].url }} />
        <View style={{ flex: 1, marginHorizontal: 8, justifyContent: "center" }}>
          <Text numberOfLines={2} style={{ fontSize: 13, fontWeight: "bold", color: "white" }}>{item.track.name}</Text>
        </View>
      </Pressable>
    )
  }
  useEffect(() => {
    const getTopItems = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("token");

        if (!accessToken) {
          console.log("Access token not found");
          return;
        }
        const type = "artists";
        const response = await axios.get(`https://api.spotify.com/v1/me/top/${type}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        })
        setTopArtists(response.data.items)
      }
      catch (err) {
        console.log(err.message);
      }
    }
    getTopItems();
  }, [])
  console.log(topArtists);

  useEffect(() => {
    const getTopGenres = async () => {
      const accessToken = await AsyncStorage.getItem("token");

      // Fetch top artists
      const response = await axios({
        method: "GET",
        url: "https://api.spotify.com/v1/me/top/artists?limit=20",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const artists = response.data.items;

      // Extract and aggregate genres
      let genreCounts = {};
      artists.forEach(artist => {
        artist.genres.forEach(genre => {
          genreCounts[genre] = (genreCounts[genre] || 0) + 1;
        });
      });

      // Convert genreCounts object to array and sort by count
      const genresSorted = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]).map(entry => entry[0]);

      setTopGenres(genresSorted);
    };

    getTopGenres(); // Call the function inside the useEffect
  }, []);
  console.log(topGenres);

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
    const timezoneOffset = now.getTimezoneOffset() * 60000; // Convert offset to milliseconds
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfDayUTC = new Date(startOfDay.getTime() - timezoneOffset);
  
    let url = "https://api.spotify.com/v1/me/player/recently-played?limit=50";
    let allTracks = [];
  
    while (url) {
      const data = await fetchTracks(url);
      const newTracks = data.items.filter(track => {
        const trackTimeUTC = new Date(track.played_at).getTime();
        return trackTimeUTC > startOfDayUTC.getTime();
      });
  
      allTracks = allTracks.concat(newTracks);
      if (newTracks.length < 50) break; // Break if we received less than 50 tracks
      url = data.next;
    }
  
    console.log("Tracks played today:");
    allTracks.forEach(track => {
      const trackTimeLocal = new Date(new Date(track.played_at).getTime() - timezoneOffset);
      console.log("Played at:", trackTimeLocal, "Duration:", track.track.duration_ms / 60000);
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
    calculateDailyListeningTime();
  }, []);
  
  const calculateWeeklyListeningTime = async () => {
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
  const timezoneOffset = now.getTimezoneOffset() * 60000; // Convert offset to milliseconds
  const startOfWeek = new Date(new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay()).getTime() - timezoneOffset);

  let url = "https://api.spotify.com/v1/me/player/recently-played?limit=50";
  let allTracks = [];

  while (url) {
    const data = await fetchTracks(url);
    const newTracks = data.items.filter(track => {
      const trackTimeUTC = new Date(track.played_at).getTime();
      const trackTimeLocal = new Date(trackTimeUTC - timezoneOffset);
      return trackTimeLocal >= startOfWeek;
    });

    allTracks = allTracks.concat(newTracks);
    if (newTracks.length < 50) break; // Break if we received less than 50 tracks
    url = data.next;
  }
    // Now allTracks contains all the tracks played this week
    console.log("Tracks played this week:");
    allTracks.forEach(track => {
      console.log("Played at:", track.played_at, "Duration:", track.track.duration_ms / 60000);
    });
  
    const weeklyListeningTime = allTracks.reduce((sum, track) => sum + track.track.duration_ms, 0) / 60000;
    const roundedTime = Math.round(weeklyListeningTime);
    console.log("Total calculated time for the week:", roundedTime);
  
    setListeningTimes(prevState => ({
      ...prevState,
      weekly: roundedTime
    }));
  };
  
  useEffect(() => {
    calculateWeeklyListeningTime();
  }, []);

  const calculateMonthlyListeningTime = async () => {
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
    const timezoneOffset = now.getTimezoneOffset() * 60000;
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfMonthUTC = new Date(startOfMonth.getTime() - timezoneOffset);
  
    let url = "https://api.spotify.com/v1/me/player/recently-played?limit=50";
    let allTracks = [];
  
    while (url) {
      const data = await fetchTracks(url);
      const newTracks = data.items.filter(track => {
        const trackTimeUTC = new Date(track.played_at).getTime();
        return trackTimeUTC >= startOfMonthUTC.getTime();
      });
  
      allTracks = allTracks.concat(newTracks);
      if (newTracks.length < 50) break; // Break if we received less than 50 tracks
      url = data.next;
    }
  
    // Calculate the total listening time for the month
    const monthlyListeningTime = allTracks.reduce((sum, track) => sum + track.track.duration_ms, 0) / 60000;
    const roundedTime = Math.round(monthlyListeningTime);
    console.log("Total calculated time for the month:", roundedTime);
  
    setListeningTimes(prevState => ({
      ...prevState,
      monthly: roundedTime
    }));
  };
  
  useEffect(() => {
    calculateMonthlyListeningTime();
  }, []);

  const calculateYearlyListeningTime = async () => {
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
    const timezoneOffset = now.getTimezoneOffset() * 60000;
    const startOfYear = new Date(now.getFullYear(), 0, 1); // January 1st of current year
    const startOfYearUTC = new Date(startOfYear.getTime() - timezoneOffset);
  
    let url = "https://api.spotify.com/v1/me/player/recently-played?limit=50";
    let allTracks = [];
  
    while (url) {
      const data = await fetchTracks(url);
      const newTracks = data.items.filter(track => {
        const trackTimeUTC = new Date(track.played_at).getTime();
        return trackTimeUTC >= startOfYearUTC.getTime();
      });
  
      allTracks = allTracks.concat(newTracks);
      if (newTracks.length < 50) break; // Break if we received less than 50 tracks
      url = data.next;
    }
  
    // Calculate the total listening time for the year
    const yearlyListeningTime = allTracks.reduce((sum, track) => sum + track.track.duration_ms, 0) / 60000;
    const roundedTime = Math.round(yearlyListeningTime);
    console.log("Total calculated time for the year:", roundedTime);
  
    setListeningTimes(prevState => ({
      ...prevState,
      yearly: roundedTime
    }));
  };
  
  useEffect(() => {
    calculateYearlyListeningTime();
  }, []);  

  return (
    <LinearGradient colors={["#040306", "#1c0505"]} style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                resizeMode: "cover",
              }}
              source={{ url: userProfile?.images[0].url }} />
            <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold", color: "white" }}> {message} </Text>
          </View>

          <MaterialCommunityIcons name="lightning-bolt-outline" size={24} color="white" />
        </View>

        <View style={{ marginHorizontal: 12, marginVertical: 5, flexDirection: "row", gap: 10 }}>
          <Pressable style={{ backgroundColor: "#282828", padding: 10, borderRadius: 30 }}>
            <Text style={{ FontSize: 15, color: "white" }}>Music</Text>
          </Pressable>

          <Pressable style={{ backgroundColor: "#282828", padding: 10, borderRadius: 30 }}>
            <Text style={{ FontSize: 15, color: "white" }}>Podcasts & Shows</Text>
          </Pressable>
        </View>

        <View style={{ height: 10 }} />

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Pressable
            onPress={() => navigation.navigate("Liked")}
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3,
            }}
          >
            <LinearGradient colors={["#341058", "#FFFFFF"]}>
              <Pressable style={{ width: 55, height: 55, justifyContent: "center", alignItems: "center" }}>
                <AntDesign name="heart" size={24} color="white" />
              </Pressable>
            </LinearGradient>

            <Text style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>Liked Songs</Text>
          </Pressable>

          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3,
            }}>
            <Image style={{ width: 55, height: 55 }} source={{ url: "https://i.pravatar.cc/100" }} />
            <View style={styles.randomArtist}>
              <Text style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>Hiphop</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={recentlyPlayed}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />

        <Text style={{ color: "white", fontSize: 19, fontWeight: "bold", marginHorizontal: 10, marginTop: 10 }}>Your Top Artists</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {topArtists.map((item, index) => (
            <ArtistCard item={item} key={index} />
          ))}
        </ScrollView>


        <View style={{ height: 10 }} />
        <Text style={{ color: "white", fontSize: 19, fontWeight: "bold", marginHorizontal: 10, marginTop: 10 }}>Recently Played</Text>
        <FlatList
          data={recentlyPlayed}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <RecentlyPlayedCard item={item} key={index} />
          )}
        />
      </ScrollView>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})