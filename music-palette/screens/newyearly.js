import { React, useState, useEffect } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity,} from 'react-native';
import { Svg, Circle, Ellipse, Path ,Defs, Clip} from 'react-native-svg';
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { fetchAndSetTopSongImage } from "./functions1.js";
import { fetchTopGenres } from "./genre1.js"; 
import {getTopDailySongName } from "./songname"
import { AntDesign } from "@expo/vector-icons";



        export default function Yearly({ navigation }) {
            const [ProfilePicUrl, setSpotifyProfilePicUrl] = useState(null);
            const [topDailySongImage, setTopDailySongImage] = useState(null); // State to hold the top daily song image
            const [topDailyGenre, setTopDailyGenres] = useState('');
            const [songName, setTopDailySongName] = useState('');

//change to daily
            useEffect(() => {
              const fetchSpotifyProfile = async () => {
                const accessToken = await AsyncStorage.getItem("token");
          
                try {
                  const response = await axios.get("https://api.spotify.com/v1/me", {
                    headers: {
                      Authorization: `Bearer ${accessToken}`, // Replace with your access token
                    },
                  });
          
                  const profilePicUrl = response.data.images[1]?.url;
                  if (profilePicUrl) {
                    setSpotifyProfilePicUrl(profilePicUrl);
                  }
                } catch (error) {
                  console.error("Error fetching Spotify profile:", error);
                }
              };
          
              fetchSpotifyProfile();

            }, []);
          
            const getTopFiveArtists = async () => {
              const accessToken = await AsyncStorage.getItem("token");
              try {
                const response = await axios.get(`https://api.spotify.com/v1/me/top/artists?limit=5`, {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  }
                });
                const artistImages = response.data.items.map(
                  (artist) => artist.images[0].url
                );     
                const urls = [];
                // Push the URLs to the 'urls' array sequentially
                urls.push(artistImages[0]);
                urls.push(artistImages[1]);
                urls.push(artistImages[2]);
                urls.push(artistImages[3]);
                urls.push(artistImages[4]);
              // Log the URLs (optional)
              //console.log("URL 1:", urls[0]);
              //console.log("URL 2:", urls[1]);
              //console.log("URL 3:", urls[2]);
              //console.log("URL 4:", urls[3]);
              //console.log("URL 5:", url5);
              setTopArtistsImages(artistImages);
              setUrls(artistImages);
              } catch (err) {
                console.log(err.message);
              }
            };
          const [topArtistsImages, setTopArtistsImages] = useState([]);
          const [urls, setUrls] = useState([]);
          const getTopDailySongName = async () => {
            const artistName = await getTopDailySongName();
            getTopDailySongName(artistName);
          };

          const [totalMinutesListened, setTotalMinutesListened] = useState('Calculating...');

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
            setTotalMinutesListened(roundedTime);
        
            setListeningTimes(prevState => ({
              ...prevState,
              yearly: roundedTime
            }));
          };

          useEffect(() => {
            console.log('PROFILE LINK')
            console.log(ProfilePicUrl)
            calculateYearlyListeningTime();
            getTopDailySongName();
            fetchTopGenres('short_term', setTopDailyGenres);
            console.log('Weekly');
            console.log(songName); // Move this inside the useEffect
            getTopFiveArtists();
            fetchAndSetTopSongImage('monthly')
    .then(imageUrl => {
      // Set the image URL in the state variable
      setTopDailySongImage(imageUrl);
    })
    .catch(error => {
      // Handle any errors that may occur during the fetchAndSetTopSongImage function
      console.error(error);
    });

          }, []); // Make 
            //console.log(urls[0])
            console.log(topDailySongImage)
            const topSongs = ['song1.png', 'song2.png', 'song3.png', 'song4.png'];
            const topArtists = [urls[1], urls[2], urls[3], urls[4]];          
    
    return (
        <LinearGradient colors={["#000000", "#8A0303"]} style={styles.yearly}>
    		<View style={styles.yearly}>
      			
      			<View style={styles.group1000000779}>
        				<View style={styles.__rectangle94}/>
        				<View style={styles.__rectangle98}/>
                         {/* You can conditionally render the image if the URL is available */}
  {topDailySongImage && (
    <Image source={{ uri: topDailySongImage }} style={styles.__rectangle98} />
  )}
  <Text style={styles.__songTitle}>
 {'Top Song: '}
</Text>
      			</View>
      			<View style={styles.group1000000782}>
      			</View>
      			
      			<Text style={styles.topFiveGenresxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}>
        				{`Top Genre: ${topDailyGenre}`}
      			</Text>
      			<Text style={styles.lISTENINGMINUTESGRANDTOTALxxxxxxxxminutes}>
                  {`Estimated Yearly Listening Time: \n${totalMinutesListened * (30.5*12)} minutes`}
      			</Text>
                  <View>
  <Image
    style={styles.group1000000756}
    source={{ uri: urls[1]  }} // Replace with your photo's URI
  />
</View>
<View>
  <Image
    style={styles._group1000000756}
    source={{ uri: urls[0] }} // Replace with your photo's URI
  />
</View>
<View>
  <Image
    style={styles.__group1000000756}
    source={{ uri: urls[2] }} // Replace with your photo's URI
  />
</View>
<View>
  <Image
    style={styles.group1000000766}
    source={{ uri: urls[3] }} // Replace with your photo's URI
  />
</View>
<View>
  <Image
    style={styles.___group1000000756}
    source={{ uri: urls[4] }} // Replace with your photo's URI
  />
</View>
      			<Text style={styles.yEARLYSTATS}>
        				{`YEARLY STATS`}
      			</Text>
      			<View style={styles.group1000000791}>
        				<Text style={styles.welcometoMusicPalette}>
          					{``}
        				</Text>
<Svg style={styles.group1000000790} width="46" height="31" viewBox="0 0 46 31" fill="none" >
<Path d="M37.1013 16.9171C41.0683 16.1287 44.5099 18.8574 41.7021 21.7685C35.8703 27.8151 25.0768 31.2516 14.4122 29.5766C-11.9237 25.4403 4.12607 -4.41657 31.5175 1.8648C34.8044 2.61855 35.7201 6.57441 34.0996 9.53176C31.5226 14.2348 31.4759 18.0352 37.1013 16.9171Z" fill="black" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M30.7203 7.02822C30.8521 7.52601 30.6991 8.05965 30.2561 8.52439C29.8135 8.98869 29.1034 9.35359 28.2227 9.47936C27.3419 9.60512 26.4975 9.46218 25.8504 9.15349C25.2026 8.8445 24.7886 8.39181 24.6569 7.89402C24.5252 7.39624 24.6782 6.86259 25.1212 6.39785C25.5638 5.93355 26.2738 5.56865 27.1546 5.44289C28.0353 5.31712 28.8798 5.46006 29.5269 5.76876C30.1746 6.07774 30.5886 6.53043 30.7203 7.02822Z" fill="#3C0D0F" stroke="black"/>
<Path d="M21.6394 5.84781C23.2121 8.43151 21.9973 8.57023 19.5351 8.92182C17.0558 8.43066 13.4844 7.26423 15.689 4.80646C14.6097 2.74148 15.72 3.2863 18.1822 2.93471C20.5547 4.63879 24.1347 3.7711 21.6394 5.84781Z" fill="#AA4903"/>
<Path d="M21.3206 25.1198C23.1664 28.03 21.7445 28.185 18.8624 28.5786C15.9589 28.0233 12.2404 27.711 13.8785 25.5389C12.6111 23.2131 14.3858 22.2305 17.2679 21.837C20.0485 23.7576 24.2382 22.7841 21.3206 25.1198Z" fill="#2A185D"/>
<Path d="M11.8205 19.0532C13.3081 21.4238 9.8471 22.8535 7.54361 23.1681C5.21923 22.7109 5.06452 21.6142 6.36617 19.8507C5.34344 17.9566 6.75896 17.1608 9.06245 16.8462C11.2939 18.4138 14.1449 17.1591 11.8205 19.0532Z" fill="#3D5004"/>
<Path d="M14.6824 9.74938C16.0344 11.9342 11.2173 15.2639 9.14685 15.5466C7.05314 15.1194 4.59221 14.5468 5.75295 12.9284C4.82187 11.1832 5.98185 9.4446 10.4765 9.73596C12.493 11.1843 16.7624 8.01375 14.6824 9.74938Z" fill="#D5D826"/>
<Path d="M25.5188 23.4221C26.848 20.8709 32.9524 19.7874 34.4559 20.3729C35.2809 21.6177 36.1817 23.1454 33.9148 24.1535C32.7647 26.1306 30.3811 27.249 27.9999 25.1495C28.2167 23.0015 22.5924 24.1626 25.5188 23.4221Z" fill="#4E013D"/>
<Ellipse cx="22.7335" cy="16.0878" rx="5.67149" ry="3.98423" fill="#B90101"/>
<Path d="M23.9202 12.8396C24.7616 13.1196 25.4768 13.5562 25.9896 14.0958C25.7891 14.2614 25.748 14.5563 25.9013 14.7714C26.1933 15.1809 26.3471 15.6269 26.3471 16.0878C26.3471 16.5488 26.1933 16.9948 25.9013 17.4043C25.748 17.6193 25.7891 17.9142 25.9896 18.0798C25.4768 18.6195 24.7616 19.0561 23.9202 19.3361C23.8459 19.0792 23.581 18.925 23.3193 18.9901C22.8257 19.1128 22.2919 19.1802 21.7335 19.1802C21.1752 19.1802 20.6413 19.1128 20.1477 18.9901C19.886 18.925 19.6211 19.0792 19.5468 19.3361C18.7054 19.0561 17.9902 18.6195 17.4774 18.0798C17.6779 17.9142 17.7191 17.6193 17.5657 17.4043C17.2737 16.9948 17.1199 16.5488 17.1199 16.0878C17.1199 15.6269 17.2737 15.1809 17.5657 14.7714C17.7191 14.5563 17.6779 14.2614 17.4774 14.0958C17.9902 13.5562 18.7054 13.1196 19.5468 12.8396C19.6211 13.0965 19.886 13.2507 20.1477 13.1856C20.6413 13.0629 21.1752 12.9955 21.7335 12.9955C22.2919 12.9955 22.8257 13.0629 23.3193 13.1856C23.581 13.2507 23.8459 13.0965 23.9202 12.8396Z" fill="#B90101" stroke="#FFD27C" strokeLinecap="round" strokeDasharray="4 4"/>
</Svg>
<View style={styles.homelogowillgohere}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <AntDesign name="home" size={40} color="white" />
        </TouchableOpacity>
      </View>

      			</View>
      			<View style={styles.profilelogowillgohere}/>
      			<Text style={styles.yOURTOPFIVESONGSOFTHEYEAR}>
        				{}
      			</Text>
      			<Text style={styles.yOURTOPFIVEARTISTSOFTHEYEAR}>
        				{`YOUR TOP FIVE ARTISTS OF THE YEAR: `}
      			</Text>
      			<View style={styles.group1000000784}>
        				<View style={styles.letsgobutton}/>
        				<Text style={styles.sHAREYOURPALETTE}>
          					{`SHARE YOUR PALETTE`}
        				</Text>
                        </View>
            <View style={styles.profilelogowillgohere}>
             {ProfilePicUrl && (
          <Image
            style={styles.profilelogowillgohere}
            source={{ uri: ProfilePicUrl }}
          />
        )}
        </View>  
      </View>
            </LinearGradient>
    )
}

const styles = StyleSheet.create({
  	yearly: {
    flexShrink: 0,
    height: 844,
    width: 390,
    alignItems: "flex-start",
    rowGap: 0
},
  	frame1000000755: {
    position: "absolute",
    flexShrink: 0,
    top: 74,
    left: 66,
    transform: [
        {
            rotateZ: "0.10deg"
        }
    ],
    shadowOffset: {
        width: 0,
        height: 4
    },
    shadowRadius: 4,
    shadowColor: "rgb(0, 0, 0)",
    shadowOpacity: 0.25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10
},
  	group1000000780: {
    position: "absolute",
    flexShrink: 0,
    top: 310,
    height: 68,
    left: 13,
    width: 83
},
  	rectangle94: {
    position: "absolute",
    flexShrink: 0,
    width: 83,
    height: 68,
    backgroundColor: "rgba(255, 249, 247, 1)"
},
  	rectangle98: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    left: 0,
    width: 83,
    height: 100,
    backgroundColor: "rgba(146, 29, 3, 1)",
    borderRadius: 1
},
  	songTitle: {
    position: "absolute",
    flexShrink: 0,
    top: 50,
    left: 3,
    width: 48,
    height: 15,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "DM Serif Display",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	xxxxxxxtotalplays: {
    position: "absolute",
    flexShrink: 0,
    top: 49,
    left: 52,
    width: 30,
    height: 16,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "DM Serif Display",
    fontSize: 6,
    fontWeight: "400",
    letterSpacing: 0
},
  	group1000000783: {
    position: "absolute",
    flexShrink: 0,
    top: 310,
    height: 68,
    left: 294,
    width: 83
},
  	_rectangle94: {
    position: "absolute",
    flexShrink: 0,
    width: 83,
    height: 68,
    backgroundColor: "rgba(255, 249, 247, 1)"
},
  	_rectangle98: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    left: 5,
    width: 73,
    height: 45,
    backgroundColor: "rgba(146, 29, 3, 1)",
    borderRadius: 1
},
  	_songTitle: {
    position: "absolute",
    flexShrink: 0,
    top: 50,
    left: 3,
    width: 48,
    height: 15,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "DM Serif Display",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	_xxxxxxxtotalplays: {
    position: "absolute",
    flexShrink: 0,
    top: 49,
    left: 52,
    width: 30,
    height: 16,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "DM Serif Display",
    fontSize: 6,
    fontWeight: "400",
    letterSpacing: 0
},
  	group1000000779: {
    position: "absolute",
    flexShrink: 0,
    top: 174,
    height: 118,
    left: 107,
    width: 176
},
  	__rectangle98: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    left: 12,
    width: 154,
    height: 154,
    backgroundColor: "rgba(146, 29, 3, 1)",
    borderRadius: 1
},
  	__songTitle: {
    position: "absolute",
    flexShrink: 0,
    top: -20,
    left: 53,
    width: 161,
    height: 20,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "DM Serif Display",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0
},
  	__xxxxxxxtotalplays: {
    position: "absolute",
    flexShrink: 0,
    top: 87,
    left: 111,
    width: 64,
    height: 28,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "DM Serif Display",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0
},
  	group1000000782: {
    position: "absolute",
    flexShrink: 0,
    top: 310,
    height: 68,
    left: 200,
    width: 83
},
  	___rectangle94: {
    position: "absolute",
    flexShrink: 0,
    width: 83,
    height: 68,
    backgroundColor: "rgba(255, 249, 247, 1)"
},
  	___rectangle98: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    left: 5,
    width: 73,
    height: 45,
    backgroundColor: "rgba(146, 29, 3, 1)",
    borderRadius: 1
},
  	___songTitle: {
    position: "absolute",
    flexShrink: 0,
    top: 50,
    left: 3,
    width: 48,
    height: 15,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "DM Serif Display",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	___xxxxxxxtotalplays: {
    position: "absolute",
    flexShrink: 0,
    top: 49,
    left: 52,
    width: 30,
    height: 16,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "DM Serif Display",
    fontSize: 6,
    fontWeight: "400",
    letterSpacing: 0
},
  	group1000000781: {
    position: "absolute",
    flexShrink: 0,
    top: 310,
    height: 68,
    left: 107,
    width: 83
},
  	____rectangle94: {
    position: "absolute",
    flexShrink: 0,
    width: 83,
    height: 68,
    backgroundColor: "rgba(255, 249, 247, 1)"
},
  	____rectangle98: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    left: 5,
    width: 73,
    height: 45,
    backgroundColor: "rgba(146, 29, 3, 1)",
    borderRadius: 1
},
  	____songTitle: {
    position: "absolute",
    flexShrink: 0,
    top: 50,
    left: 3,
    width: 48,
    height: 15,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "DM Serif Display",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	____xxxxxxxtotalplays: {
    position: "absolute",
    flexShrink: 0,
    top: 49,
    left: 52,
    width: 30,
    height: 16,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "DM Serif Display",
    fontSize: 6,
    fontWeight: "400",
    letterSpacing: 0
},
  	topFiveGenresxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx: {
    position: "absolute",
    flexShrink: 0,
    top: 614,
    left: 24,
    width: 315,
    height: 156,
    textAlign: "left",
    color: "rgba(225, 108, 58, 1)",
    fontFamily: "Goblin One",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0
},
  	lISTENINGMINUTESGRANDTOTALxxxxxxxxminutes: {
    position: "absolute",
    flexShrink: 0,
    top: 92,
    left: 11,
    width: 370,
    height: 70,
    textAlign: "center",
    color: "rgba(229, 163, 35, 1)",
    fontFamily: "Goblin One",
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 0
},
  	group1000000756: {
    position: "absolute",
    flexShrink: 0,
    top: 394,
    height: 68,
    left: 22,
    width: 68,
    borderRadius: 75,
},
  	_group1000000756: {
    position: "absolute",
    flexShrink: 0,
    top: 471,
    height: 124,
    left: 135,
    width: 124,
    borderRadius: 75,
},
  	__group1000000756: {
    position: "absolute",
    flexShrink: 0,
    top: 394,
    height: 68,
    left: 114,
    width: 68, 
    borderRadius: 75,
},
  	group1000000766: {
    position: "absolute",
    flexShrink: 0,
    top: 394,
    height: 66,
    left: 203,
    width: 68,
    borderRadius: 75,
},
  	___group1000000756: {
    position: "absolute",
    flexShrink: 0,
    top: 394,
    height: 68,
    left: 292,
    width: 68,
    borderRadius: 75
},
  	yEARLYSTATS: {
    position: "absolute",
    flexShrink: 0,
    top: 37,
    left: 77,
    width: 358,
    height: 57,
    transform: [
        {
            rotateZ: "0.10deg"
        }
    ],
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Fugaz One",
    fontSize: 35,
    fontWeight: "400",
    letterSpacing: 0,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
        width: 0,
        height: 4
    },
    textShadowRadius: 4
},
  	group1000000791: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 32,
    left: 109,
    width: 184
},
  	welcometoMusicPalette: {
    position: "absolute",
    flexShrink: 0,
    left: 47,
    width: 137,
    height: 31,
    transform: [
        {
            rotateZ: "0.20deg"
        }
    ],
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Euphoria Script",
    fontSize: 30,
    fontWeight: "400",
    letterSpacing: 0,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
        width: 0,
        height: 4
    },
    textShadowRadius: 4
},
  	group1000000790: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 29,
    width: 45
},
  	//profilelogowillgohere: {
   // position: "absolute",
    //flexShrink: 0,
   // top: 35,
    //left: 326,
    //width: 53,
    //height: 45,
    //backgroundColor: "rgba(217, 217, 217, 1)"
//},
  	yOURTOPFIVESONGSOFTHEYEAR: {
    position: "absolute",
    flexShrink: 0,
    top: 195,
    left: 9,
    width: 91,
    height: 86,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Fugaz One",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0
},
  	yOURTOPFIVEARTISTSOFTHEYEAR: {
    position: "absolute",
    flexShrink: 0,
    top: 513,
    left: 10,
    width: 95,
    height: 99,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Fugaz One",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0
},
  	group1000000784: {
    position: "absolute",
    flexShrink: 0,
    top: 786,
    height: 46,
    left: 63,
    width: 268
},
  	letsgobutton: {
    position: "absolute",
    flexShrink: 0,
    left: 20,
    width: 231,
    height: 35,
    borderRadius: 10
},
homelogowillgohere: {
    position: "absolute",
    flexShrink: 0,
    top: 35,
    left: -100,
    width: 40,
    height: 40,
  },
  	sHAREYOURPALETTE: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    width: 268,
    height: 41,
    textAlign: "center",
    color: "rgba(29, 0, 0, 1)",
    fontFamily: "Fugaz One",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0
}
})