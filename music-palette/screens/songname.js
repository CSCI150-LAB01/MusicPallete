import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getTopDailySongName = async () => {
  const accessToken = await AsyncStorage.getItem("token");
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const topDailySong = response.data.items[0]; // Get the top daily song
    const songName = topDailySong.name; // Get the song's name

    return songName;
  } catch (err) {
    console.log(err.message);
    return null; // Return null in case of an error
  }
};
