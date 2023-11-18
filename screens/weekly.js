import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Ellipse, Path } from 'react-native-svg';

export default function Weekly() {
    return (
    		<View style={styles.weekly}>
      			<View style={styles.frame1000000755}>
        				<Text style={styles.wEELKYSTATS}>
          					{`WEELKY STATS`}
        				</Text>
      			</View>
      			<View style={styles.rectangle94}/>
      			<Text style={styles.insertimageofalbumcoverfortopsonglistenedto}>
        				{`Insert image of album cover for top song listened to`}
      			</Text>
      			<Text style={styles.topGenrexxxxxxxx}>
        				{`Top Genre: xxxxxxxx`}
      			</Text>
      			<Text style={styles.totalminuteslistenedxxxxxxxxminutes}>
        				{`Total minutes listened:\nxxxxxxxx minutes`}
      			</Text>
      			<View style={styles.group1000000756}>
<Svg style={styles.ellipse2} width="155" height="160" viewBox="0 0 155 160" fill="none" >
<Ellipse cx="77.5" cy="80" rx="77.5" ry="80" fill="#5B4545"/>
</Svg>

        				<Text style={styles.topartistxxxxxxxxxxxxxx}>
          					{`Top artist: xxxxxxxxxxxxxx  `}
        				</Text>
      			</View>
      			<Text style={styles.welcometoMusicPalette}>
        				{`MusicPalette`}
      			</Text>
<Svg style={styles.logo} width="31" height="23" viewBox="0 0 31 23" fill="none" >
<Path d="M21.6103 11.1937C22.6741 15.1483 28.5269 15.3694 25.2084 17.7692C21.2162 20.6563 15.462 22.0991 9.76403 21.1341C-6.84501 18.3214 2.34528 -1.37196 19.0977 1.2375C22.2974 1.73592 23.0549 5.50421 21.9528 8.54921C21.5721 9.60085 21.4295 10.5216 21.6103 11.1937Z" fill="#926203" stroke="#926203" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18.22 4.89201C18.2836 5.15115 18.1826 5.49336 17.7881 5.84018C17.4013 6.18028 16.7886 6.46453 16.036 6.58041C15.2833 6.69629 14.5808 6.61454 14.0614 6.41397C13.5316 6.20944 13.2761 5.92212 13.2125 5.66298C13.1489 5.40384 13.2499 5.06162 13.6444 4.7148C14.0312 4.3747 14.6439 4.09046 15.3965 3.97458C16.1492 3.8587 16.8517 3.94045 17.3711 4.14101C17.9009 4.34554 18.1564 4.63287 18.22 4.89201Z" fill="#390E10" stroke="#926203"/>
<Path d="M23.1268 16.3022C24.4144 18.584 23.4201 18.7064 21.4047 19.0167C19.3751 18.5828 16.4515 17.5525 18.2559 15.3822C17.3721 13.5585 18.2811 14.0397 20.2965 13.7294C22.2387 15.2345 25.1691 14.4685 23.1268 16.3022Z" fill="#603309"/>
<Path d="M10.126 16.7362C11.4527 19.0948 10.4307 19.2204 8.35913 19.5394C6.27213 19.0894 3.59936 18.8362 4.7768 17.0759C3.86582 15.191 5.14141 14.3947 7.21298 14.0757C9.21164 15.6323 12.2232 14.8433 10.126 16.7362Z" fill="#2A185D"/>
<Path d="M9.57944 7.69086C10.6487 9.6121 8.16101 10.7708 6.50531 11.0257C4.83459 10.6552 4.72338 9.76641 5.65898 8.3372C4.92387 6.80212 5.94132 6.15717 7.59702 5.90225C9.20092 7.17265 11.2502 6.15578 9.57944 7.69086Z" fill="#3D5004"/>
<Path d="M17.5729 9.21509C18.6422 11.1363 14.7765 14.0836 13.1208 14.3385C11.45 13.968 9.48665 13.4704 10.4223 12.0412C9.68713 10.5061 10.6227 8.971 14.2125 9.21509C15.8164 10.4855 19.2437 7.68001 17.5729 9.21509Z" fill="#D5D826"/>
</Svg>

      			<View style={styles.group1000000757}>
        				<View style={styles.letsgobutton}/>
        				<Text style={styles.shareyourpalette}>
          					{`share your palette`}
        				</Text>
      			</View>
      			<View style={styles.group1000000769}>
        				<View style={styles.usernamebox}/>
        				<Text style={styles.spotifyprofilepic}>
          					{`Spotify \nprofile \npic`}
        				</Text>
      			</View>
    		</View>
    )
}

const styles = StyleSheet.create({
  	weekly: {
    flexShrink: 0,
    height: 844,
    width: 390,
    alignItems: "flex-start",
    rowGap: 0
},
  	frame1000000755: {
    position: "absolute",
    flexShrink: 0,
    top: 82,
    left: 58,
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
  	wEELKYSTATS: {
    flexShrink: 0,
    width: 367,
    height: 57,
    transform: [
        {
            rotateZ: "-0.00deg"
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
  	rectangle94: {
    position: "absolute",
    flexShrink: 0,
    top: 382,
    left: 110,
    width: 192,
    height: 294,
    backgroundColor: "rgba(146, 29, 3, 1)",
    borderRadius: 50
},
  	insertimageofalbumcoverfortopsonglistenedto: {
    position: "absolute",
    flexShrink: 0,
    top: 469,
    left: 124,
    width: 164,
    height: 119,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Abhaya Libre SemiBold",
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0
},
  	topGenrexxxxxxxx: {
    position: "absolute",
    flexShrink: 0,
    top: 716,
    width: 305,
    height: 25,
    textAlign: "right",
    color: "rgba(225, 108, 58, 1)",
    fontFamily: "Goblin One",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0
},
  	totalminuteslistenedxxxxxxxxminutes: {
    position: "absolute",
    flexShrink: 0,
    top: 131,
    left: 21,
    width: 211,
    height: 160,
    textAlign: "left",
    color: "rgba(157, 111, 24, 1)",
    fontFamily: "Finger Paint",
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 0
},
  	group1000000756: {
    position: "absolute",
    flexShrink: 0,
    top: 182,
    height: 160,
    left: 228,
    width: 155
},
  	ellipse2: {
    position: "absolute",
    flexShrink: 0,
    width: 155,
    height: 160,
    overflow: "visible"
},
  	topartistxxxxxxxxxxxxxx: {
    position: "absolute",
    flexShrink: 0,
    top: 35,
    left: 34,
    width: 87,
    height: 100,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Droid Sans",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0
},
  	welcometoMusicPalette: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    left: 147,
    width: 260,
    height: 23,
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
  	logo: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    height: 20,
    left: 118,
    width: 29
},
  	group1000000757: {
    position: "absolute",
    flexShrink: 0,
    top: 781,
    height: 35,
    left: 83,
    width: 223
},
  	letsgobutton: {
    position: "absolute",
    flexShrink: 0,
    width: 223,
    height: 35,
    borderRadius: 10
},
  	shareyourpalette: {
    position: "absolute",
    flexShrink: 0,
    left: 3,
    width: 216,
    height: 35,
    textAlign: "center",
    color: "rgba(29, 0, 0, 1)",
    fontFamily: "Droid Sans",
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 0
},
  	group1000000769: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    height: 60,
    left: 323,
    width: 60
},
  	usernamebox: {
    position: "absolute",
    flexShrink: 0,
    width: 60,
    height: 60,
    backgroundColor: "rgba(254, 253, 253, 1)",
    borderRadius: 6
},
  	spotifyprofilepic: {
    position: "absolute",
    flexShrink: 0,
    top: 9,
    left: 5,
    width: 46,
    height: 46,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Open Sans",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0,
    lineHeight: 15.014217376708984
}
})