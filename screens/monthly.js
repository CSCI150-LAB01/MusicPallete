import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Svg, Ellipse, G, Defs, Filter, FeFlood, FeBlend, FeGaussianBlur, Path } from 'react-native-svg';

export default function Monthly() {
    return (
    		<View style={styles.monthly}>
      			<View style={styles.frame1000000755}/>
      			<View style={styles.rectangle94}/>
      			<Text style={styles.insertimageofalbumcoverfortopsonglistenedto}>
        				{`Insert image of album cover for top song listened to`}
      			</Text>
      			<Text style={styles.topGenrexxxxxxxx}>
        				{`Top Genre: xxxxxxxx`}
      			</Text>
      			<Text style={styles.totalminuteslistenedxxxxxxxxminutes}>
        				{`Total minutes listened:\n xxxxxxxx minutes`}
      			</Text>
      			<View style={styles.group1000000755}>
        				<View style={styles.letsgobutton}/>
        				<Text style={styles.shareyourpalette}>
          					{`share your palette`}
        				</Text>
      			</View>
      			<View style={styles.group1000000756}>
<Svg style={styles.ellipse2} width="155" height="160" viewBox="0 0 155 160" fill="none" >
<Ellipse cx="77.5" cy="80" rx="77.5" ry="80" fill="#5B4545"/>
</Svg>

        				<Text style={styles.topartistxxxxxxxxxxxxxx}>
          					{`Top artist: xxxxxxxxxxxxxx  `}
        				</Text>
      			</View>
      			<Text style={styles.mONTHLYSTATS}>
        				{`MONTHLY STATS`}
      			</Text>
<Svg style={styles._ellipse2} width="390" height="109" viewBox="0 0 390 109" fill="none" >
<G style={{mixBlendMode: "lighten" }} filter="url(#filter0_f_89_9)">
<Ellipse cx="166.682" cy="-147" rx="129.682" ry="56" fill="#C10404"/>
</G>
<Defs>
<Filter id="filter0_f_89_9" x="-163" y="-403" width="659.365" height="512" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<FeFlood floodOpacity="0" result="BackgroundImageFix"/>
<FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<FeGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_89_9"/>
</Filter>
</Defs>
</Svg>

      			<Text style={styles.welcometoMusicPalette}>
        				{`MusicPalette`}
      			</Text>
<Svg style={styles.logo} width="31" height="23" viewBox="0 0 31 23" fill="none" >
<Path d="M21.8801 11.6261C22.9439 15.5808 28.7966 15.8018 25.4782 18.2016C21.486 21.0887 15.7317 22.5315 10.0338 21.5666C-6.57523 18.7538 2.61505 -0.93953 19.3674 1.66994C22.5672 2.16835 23.3247 5.93664 22.2226 8.98164C21.8419 10.0333 21.6993 10.954 21.8801 11.6261Z" fill="#926203" stroke="#926203" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18.4898 5.32444C18.5534 5.58358 18.4523 5.9258 18.0579 6.27262C17.6711 6.61272 17.0584 6.89696 16.3058 7.01284C15.5531 7.12872 14.8506 7.04697 14.3311 6.84641C13.8014 6.64188 13.5459 6.35456 13.4823 6.09542C13.4187 5.83628 13.5197 5.49406 13.9141 5.14724C14.3009 4.80714 14.9136 4.5229 15.6663 4.40701C16.4189 4.29113 17.1214 4.37288 17.6409 4.57345C18.1707 4.77798 18.4262 5.0653 18.4898 5.32444Z" fill="#390E10" stroke="#926203"/>
<Path d="M23.3966 16.7347C24.6842 19.0164 23.6899 19.1389 21.6744 19.4492C19.6449 19.0153 16.7213 17.9849 18.5257 15.8146C17.6419 13.991 18.5508 14.4722 20.5663 14.1619C22.5085 15.6669 25.4388 14.9009 23.3966 16.7347Z" fill="#603309"/>
<Path d="M10.3958 17.1687C11.7225 19.5272 10.7005 19.6529 8.62891 19.9718C6.5419 19.5218 3.86914 19.2687 5.04657 17.5084C4.13559 15.6235 5.41119 14.8271 7.48275 14.5082C9.48141 16.0648 12.4929 15.2758 10.3958 17.1687Z" fill="#2A185D"/>
<Path d="M9.84921 8.12329C10.9185 10.0445 8.43079 11.2032 6.77508 11.4581C5.10436 11.0876 4.99316 10.1988 5.92876 8.76963C5.19364 7.23455 6.21109 6.5896 7.8668 6.33468C9.47069 7.60509 11.5199 6.58822 9.84921 8.12329Z" fill="#3D5004"/>
<Path d="M17.8427 9.64753C18.912 11.5688 15.0462 14.516 13.3905 14.771C11.7198 14.4004 9.75642 13.9028 10.692 12.4736C9.95691 10.9385 10.8925 9.40344 14.4823 9.64752C16.0862 10.9179 19.5134 8.11245 17.8427 9.64753Z" fill="#D5D826"/>
</Svg>

      			<View style={styles.group1000000770}>
        				<View style={styles.usernamebox}/>
        				<Text style={styles.spotifyprofilepic}>
          					{`Spotify \nprofile \npic`}
        				</Text>
      			</View>
    		</View>
    )
}

const styles = StyleSheet.create({
  	monthly: {
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
  	rectangle94: {
    position: "absolute",
    flexShrink: 0,
    top: 262,
    left: 23,
    width: 181,
    height: 160,
    backgroundColor: "rgba(146, 29, 3, 1)",
    borderRadius: 50
},
  	insertimageofalbumcoverfortopsonglistenedto: {
    position: "absolute",
    flexShrink: 0,
    top: 293,
    left: 35,
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
    top: 460,
    left: 77,
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
    top: 167,
    left: 16,
    width: 352,
    height: 69,
    textAlign: "left",
    color: "rgba(229, 163, 35, 1)",
    fontFamily: "Finger Paint",
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 0
},
  	group1000000755: {
    position: "absolute",
    flexShrink: 0,
    top: 777,
    height: 35,
    left: 92,
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
  	group1000000756: {
    position: "absolute",
    flexShrink: 0,
    top: 262,
    height: 160,
    left: 213,
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
  	mONTHLYSTATS: {
    position: "absolute",
    flexShrink: 0,
    top: 88,
    left: 58,
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
  	_ellipse2: {
    position: "absolute",
    flexShrink: 0,
    top: -203,
    left: 37,
    width: 259,
    height: 112,
    overflow: "visible"
},
  	welcometoMusicPalette: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    left: 139,
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
    top: 4,
    height: 20,
    left: 109,
    width: 29
},
  	group1000000770: {
    position: "absolute",
    flexShrink: 0,
    top: 9,
    height: 60,
    left: 322,
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