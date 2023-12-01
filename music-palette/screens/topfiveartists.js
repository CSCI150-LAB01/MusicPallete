

export const getTopFiveArtists = async () => {
    const accessToken = await AsyncStorage.getItem("token");
    try {
      const response = await axios.get(`https://api.spotify.com/v1/me/top/artists?limit=5`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });
      const artistImages = response.data.items.map(artist => artist.images[0].url); // Get first image of each artist
      setTopArtistsImages(artistImages);
    } catch (err) {
      console.log(err.message);
    }
  };

  export const renderTopArtistsImages = () => {
    return topArtistsImages.map((imageUrl, index) => (
      <Image key={index} source={{ uri: imageUrl }} style={styles.artistImage} />
    ));
  };