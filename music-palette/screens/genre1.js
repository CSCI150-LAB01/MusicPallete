import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState, useEffect } from "react"; // Import useState and useEffect

export const fetchTopGenres = async (timeFrame, setTopDailyGenre, setTopWeeklyGenre, setTopMonthlyGenre, setTopYearlyGenres) => {
  const accessToken = await AsyncStorage.getItem("token");
  try {
    const response = await axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=${timeFrame}&limit=50`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });
    const artists = response.data.items;

    // Aggregate genres
    let genreCounts = {};
    artists.forEach(artist => {
      artist.genres.forEach(genre => {
        genreCounts[genre] = (genreCounts[genre] || 0) + 1;
      });
    });

    // Find the top genre(s)
    let sortedGenres = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]);
    if (timeFrame === 'short_term') { // Daily
      setTopDailyGenre(sortedGenres[0][0]);
    } 
    else if (timeFrame === 'medium_term') { // Weekly
      setTopWeeklyGenre(sortedGenres[0][0]);
    } 
    else if (timeFrame === 'long_term') { // Monthly
      setTopMonthlyGenre(sortedGenres[0][0]);
    } 
    else if (timeFrame === 'yearly') { // Yearly (Top 5)
      setTopYearlyGenres(sortedGenres.slice(0, 5).map(item => item[0]));
    }
  } 
  catch (err) {
    console.log(err.message);
  }
};

// You can use useEffect to fetch and set the genres when needed
// Example:
// useEffect(() => {
//   fetchTopGenres('short_term', setTopDailyGenre, setTopWeeklyGenre, setTopMonthlyGenre, setTopYearlyGenres);
// }, []);
