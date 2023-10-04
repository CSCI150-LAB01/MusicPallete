import { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';

function App() {
  const CLIENT_ID = "8d623741fbee417eaf8d46af9eabf768";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPES = ["user-read-private", "user-read-email"].join(" ");

  const [token, setToken] = useState(window.localStorage.getItem("token") || "");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;

    if (!token && hash) {
      const newToken = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1];

      if (newToken) {
        window.location.hash = "";
        window.localStorage.setItem("token", newToken);
        setToken(newToken);
      }
    }
  }, [token]);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setToken("");
  };

  const searchArtists = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          q: searchKey,
          type: "artist"
        }
      });
      setArtists(data.artists.items);
      setError(null);
    } catch (error) {
      console.error("Error searching artists:", error);
      setError("Failed to fetch artists.");
    }
  }

  const renderArtists = () => artists.map(artist => (
    <div key={artist.id}>
      {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt={artist.name}/> : <div>No Image</div>}
      <div>{artist.name}</div>
    </div>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Palette</h1>
        {!token ? (
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`}>Login to Spotify</a>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}

        {token ? (
          <form onSubmit={searchArtists}>
            <input type="text" onChange={e => setSearchKey(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        ) : (
          <h2>Please Login</h2>
        )}

        {error && <div className="error">{error}</div>}

        {renderArtists()}

      </header>
    </div>
  );
}

export default App;