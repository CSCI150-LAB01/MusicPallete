import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getTopArtistName = async () => {
  const accessToken = await AsyncStorage.getItem("token");
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/me/top/artists?limit=1`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const topArtist = response.data.items[0]; // Get the top artist
    const artistName = topArtist.name; // Get the artist's name

    return artistName;
  } catch (err) {
    console.log(err.message);
    return null; // Return null in case of an error
  }
};
