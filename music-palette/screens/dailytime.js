export const calculateDailyListeningTime = async () => {
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
  
 // useEffect(() => {
 //   calculateDailyListeningTime();
 // }, []);