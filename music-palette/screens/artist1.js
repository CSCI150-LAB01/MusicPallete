import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Image, View } from "react-native";

export const getTopArtistImage = async (setTopArtistImage) => {
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
      const artistImage = topArtist.images[0]?.url; // Get the image URL of the top artist
      setTopArtistImage(artistImage);
    } catch (err) {
      console.log(err.message);
    }
  };