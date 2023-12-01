// In functions.js

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Function to get start date of the time frame
export const getStartDate = (timeFrame) => {
  const now = new Date();
  if (timeFrame === 'daily') {
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  } else if (timeFrame === 'weekly') {
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
  } else if (timeFrame === 'monthly') {
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }
};

// Function to fetch and set top song image for a given time frame
export const fetchAndSetTopSongImage = async (timeFrame) => {
  const accessToken = await AsyncStorage.getItem("token");
  const startDate = getStartDate(timeFrame);

  try {
    const response = await axios.get(`https://api.spotify.com/v1/me/player/recently-played?limit=50`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });
    const tracks = response.data.items.filter(item => new Date(item.played_at) >= startDate);

    const trackCounts = tracks.reduce((acc, item) => {
      const trackId = item.track.id;
      if (!acc[trackId]) {
        acc[trackId] = { count: 0, imageUrl: item.track.album.images[0].url };
      }
      acc[trackId].count += 1;
      return acc;
    }, {});

    const topTrack = Object.values(trackCounts).reduce((max, item) => item.count > max.count ? item : max, { count: 0 });

    return topTrack.imageUrl;
  } catch (err) {
    console.log(err.message);
    return ''; // Return an empty string or handle the error accordingly
  }
};
