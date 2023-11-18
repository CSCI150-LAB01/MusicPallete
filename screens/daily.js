import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Ellipse, G, Defs, Filter, FeFlood, FeBlend, FeGaussianBlur, Path } from 'react-native-svg';

export default function HomeDailyscreen() {
    return (
    		<View style={styles.homeDailyscreen}>
      			<View style={styles.rectangle95}/>
      			<View style={styles.rectangle96}/>
      			<View style={styles.rectangle97}/>
      			<Text style={styles.clicktoseemorestats}>
        				{`Click to see more stats:`}
      			</Text>
      			<Text style={styles.month}>
        				{`Month`}
      			</Text>
      			<Text style={styles.year}>
        				{`Year`}
      			</Text>
      			<Text style={styles.weekly}>
        				{`Week`}
      			</Text>
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
<Svg style={styles.ellipse2} width="118" height="120" viewBox="0 0 118 120" fill="none" >
<Ellipse cx="59" cy="60" rx="59" ry="60" fill="#5B4545"/>
</Svg>

      			<Text style={styles.yourtopartist}>
        				{`Your top artist:`}
      			</Text>
      			<Text style={styles.welcometoMusicPalette}>
        				{`MusicPalette`}
      			</Text>
<Svg style={styles.logo} width="40" height="29" viewBox="0 0 40 29" fill="none" >
<Path d="M30.8608 16.0015C34.9524 15.912 38.4555 18.2138 35.5511 21.0972C30.3609 26.25 21.4415 29.0936 12.6239 27.6058C-10.0609 23.7783 3.54046 -3.70382 27.014 1.7016C30.1761 2.42977 31.0495 6.21203 29.5997 9.11502C27.6907 12.9375 27.4978 16.0751 30.8608 16.0015Z" fill="#926203" stroke="#926203" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M24.0004 6.11828C24.1031 6.5354 23.9293 7.03797 23.3835 7.51615C22.8455 7.98745 22.0041 8.37336 20.981 8.53029C19.9579 8.68723 18.9945 8.57818 18.272 8.30024C17.5389 8.01824 17.1392 7.60365 17.0364 7.18653C16.9337 6.7694 17.1075 6.26684 17.6533 5.78865C18.1913 5.31735 19.0328 4.93145 20.0559 4.77451C21.079 4.61757 22.0423 4.72663 22.7648 5.00457C23.4979 5.28656 23.8976 5.70115 24.0004 6.11828Z" fill="#390E10" stroke="#926203"/>
<Path d="M30.3473 21.2208C32.0551 24.236 30.7363 24.3978 28.0632 24.8078C25.3714 24.2344 21.4938 22.8729 23.887 20.0051C22.7148 17.5952 23.9203 18.2311 26.5934 17.8211C29.1694 19.8099 33.056 18.7976 30.3473 21.2208Z" fill="#603309"/>
<Path d="M13.1041 21.7943C14.8637 24.911 13.5082 25.077 10.7606 25.4985C7.99262 24.9039 4.44768 24.5693 6.00933 22.2432C4.80108 19.7525 6.49293 18.7001 9.24048 18.2787C11.8913 20.3356 15.8856 19.293 13.1041 21.7943Z" fill="#2A185D"/>
<Path d="M12.3791 9.84151C13.7972 12.3803 10.4978 13.9114 8.30179 14.2482C6.08588 13.7586 5.93839 12.5842 7.1793 10.6956C6.2043 8.6671 7.55376 7.81484 9.74975 7.47799C11.877 9.15674 14.595 7.81301 12.3791 9.84151Z" fill="#3D5004"/>
<Path d="M22.981 11.8557C24.3992 14.3945 19.272 18.2891 17.076 18.6259C14.8601 18.1363 12.256 17.4787 13.4969 15.5901C12.5219 13.5616 13.7628 11.5331 18.524 11.8557C20.6512 13.5344 25.1969 9.82718 22.981 11.8557Z" fill="#D5D826"/>
</Svg>

      			<Text style={styles.dAILYSTATS}>
        				{`DAILY STATS`}
      			</Text>
      			<View style={styles.group1000000756}>
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
  	homeDailyscreen: {
    flexShrink: 0,
    height: 844,
    width: 390,
    alignItems: "flex-start",
    rowGap: 0
},
  	rectangle95: {
    position: "absolute",
    flexShrink: 0,
    top: 763,
    left: 18,
    width: 92,
    height: 34,
    backgroundColor: "rgba(182, 0, 0, 1)",
    borderRadius: 15
},
  	rectangle96: {
    position: "absolute",
    flexShrink: 0,
    top: 763,
    left: 270,
    width: 92,
    height: 34,
    backgroundColor: "rgba(182, 0, 0, 1)",
    borderRadius: 15
},
  	rectangle97: {
    position: "absolute",
    flexShrink: 0,
    top: 763,
    left: 141,
    width: 92,
    height: 34,
    backgroundColor: "rgba(182, 0, 0, 1)",
    borderRadius: 15
},
  	clicktoseemorestats: {
    position: "absolute",
    flexShrink: 0,
    top: 733,
    left: 174,
    width: 243,
    height: 19,
    textAlign: "left",
    color: "rgba(165, 165, 165, 1)",
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 10.009478569030762
},
  	month: {
    position: "absolute",
    flexShrink: 0,
    top: 770,
    left: 137,
    width: 101,
    height: 26,
    transform: [
        {
            rotateZ: "0.01deg"
        }
    ],
    textAlign: "center",
    color: "rgba(10, 0, 0, 1)",
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 15.014217376708984
},
  	year: {
    position: "absolute",
    flexShrink: 0,
    top: 770,
    left: 283,
    width: 66,
    height: 20,
    textAlign: "center",
    color: "rgba(13, 0, 0, 1)",
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 15.014217376708984
},
  	weekly: {
    position: "absolute",
    flexShrink: 0,
    top: 770,
    left: 22,
    width: 83,
    height: 24,
    transform: [
        {
            rotateZ: "0.01deg"
        }
    ],
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 15.014217376708984
},
  	rectangle94: {
    position: "absolute",
    flexShrink: 0,
    top: 264,
    left: 51,
    width: 285,
    height: 158,
    backgroundColor: "rgba(146, 29, 3, 1)",
    borderRadius: 50
},
  	insertimageofalbumcoverfortopsonglistenedto: {
    position: "absolute",
    flexShrink: 0,
    top: 291,
    left: 119,
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
    top: 462,
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
    top: 169,
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
  	ellipse2: {
    position: "absolute",
    flexShrink: 0,
    top: 502,
    left: 139,
    width: 118,
    height: 120,
    overflow: "visible"
},
  	yourtopartist: {
    position: "absolute",
    flexShrink: 0,
    top: 541,
    left: 32,
    width: 107,
    height: 61,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Fontdiner Swanky",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0
},
  	welcometoMusicPalette: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    left: 139,
    width: 345,
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
  	logo: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 27,
    left: 100,
    width: 39
},
  	dAILYSTATS: {
    position: "absolute",
    flexShrink: 0,
    top: 81,
    left: 85,
    width: 232,
    height: 48,
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
  	group1000000756: {
    position: "absolute",
    flexShrink: 0,
    top: 652,
    height: 35,
    left: 86,
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
    top: 7,
    height: 60,
    left: 326,
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