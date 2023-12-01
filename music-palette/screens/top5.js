import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const getTopFiveArtists = async () => {
  const accessToken = await AsyncStorage.getItem('token');
  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/me/top/artists?limit=5',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const artistImages = response.data.items.map(
      (artist) => artist.images[0].url
    ); // Get the first image of each artist
    return artistImages; // Return the artist images data
  } catch (err) {
    console.log(err.message);
    throw err; // Rethrow the error for handling in the component
  }
};
