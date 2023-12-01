import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function Sharingpage() {
    return (
    		<View style={styles.sharingpage}>
      			<Text style={styles.chooseanapptoexportto}>
        				{`Choose an app to export to: `}
      			</Text>
      			<View style={styles.letsgobutton}/>
      			<Text style={styles.pleaselogintoSpotifytocontinue}>
        				{`Please log in to Spotify to continue`}
      			</Text>
      			<Text style={styles.gotoSpotify}>
        				{`Go to Spotify`}
      			</Text>
      			<View style={styles.group1000000758}>
        				<View style={styles.rectangle98}/>
        				<Text style={styles.welcometoMusicPalette}>
          					{`MusicPalette`}
        				</Text>
<Svg style={styles.group1000000757} width="30" height="29" viewBox="0 0 30 29" fill="none" >
<Path d="M21.1997 13.1733C20.9135 17.5301 28.0404 19.6086 25.0495 22.7897C21.2319 26.8499 15.566 28.9215 9.95734 27.6058C-6.37044 23.7758 3.43688 -3.74067 20.3419 1.71251C22.8833 2.53231 23.5736 5.57927 22.5729 8.05501C21.8005 9.96586 21.2919 11.769 21.1997 13.1733Z" fill="#926203" stroke="#926203" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18.0066 6.14678C18.1743 7.09365 17.3713 8.22401 15.9671 8.52348C14.5628 8.82296 13.4323 8.10495 13.2645 7.15808C13.0968 6.21121 13.8998 5.08086 15.3041 4.78138C16.7083 4.48191 17.8388 5.19991 18.0066 6.14678Z" fill="#390E10" stroke="#926203"/>
<Path d="M22.7055 21.2208C23.9339 24.236 22.9853 24.3978 21.0625 24.8078C19.1264 24.2344 16.3373 22.8729 18.0586 20.0051C17.2155 17.5952 18.0826 18.2311 20.0054 17.8211C21.8583 19.8099 24.6538 18.7977 22.7055 21.2208Z" fill="#603309"/>
<Path d="M10.3027 21.7944C11.5684 24.911 10.5934 25.077 8.6171 25.4985C6.62609 24.9039 4.07626 24.5693 5.19954 22.2432C4.33046 19.7525 5.54739 18.7002 7.52367 18.2787C9.43039 20.3356 12.3034 19.293 10.3027 21.7944Z" fill="#2A185D"/>
<Path d="M9.78139 9.84151C10.8015 12.3803 8.42821 13.9114 6.84866 14.2482C5.25479 13.7586 5.1487 12.5842 6.04127 10.6956C5.33996 8.6671 6.31061 7.81484 7.89016 7.47799C9.42028 9.15674 11.3753 7.81301 9.78139 9.84151Z" fill="#3D5004"/>
<Path d="M17.4071 11.8557C18.4271 14.3945 14.7392 18.2891 13.1597 18.626C11.5658 18.1363 9.69271 17.4788 10.5853 15.5902C9.88397 13.5617 10.7765 11.5332 14.2012 11.8557C15.7313 13.5345 19.0009 9.82721 17.4071 11.8557Z" fill="#D5D826"/>
</Svg>

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
  	sharingpage: {
    flexShrink: 0,
    height: 844,
    width: 390,
    alignItems: "flex-start",
    rowGap: 0
},
  	chooseanapptoexportto: {
    position: "absolute",
    flexShrink: 0,
    top: 122,
    left: 14,
    width: 362,
    height: 102,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Inter",
    fontSize: 40,
    fontWeight: "700",
    letterSpacing: 0
},
  	letsgobutton: {
    position: "absolute",
    flexShrink: 0,
    top: 436,
    left: 25,
    width: 328,
    height: 66,
    backgroundColor: "rgba(57, 14, 16, 1)",
    borderRadius: 10
},
  	pleaselogintoSpotifytocontinue: {
    position: "absolute",
    flexShrink: 0,
    top: 361,
    left: 60,
    width: 258,
    height: 20,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0
},
  	gotoSpotify: {
    position: "absolute",
    flexShrink: 0,
    top: 461,
    left: 66,
    width: 245,
    height: 32,
    textAlign: "center",
    color: "rgba(255, 248, 248, 1)",
    fontFamily: "Open Sans",
    fontSize: 25,
    fontWeight: "800",
    letterSpacing: 0,
    lineHeight: 15.014217376708984
},
  	group1000000758: {
    position: "absolute",
    flexShrink: 0,
    top: 88,
    height: 34,
    left: 115,
    width: 160
},
  	rectangle98: {
    position: "absolute",
    flexShrink: 0,
    width: 126,
    height: 34,
    backgroundColor: "rgba(0, 0, 0, 1)"
},
  	welcometoMusicPalette: {
    position: "absolute",
    flexShrink: 0,
    left: 32,
    width: 129,
    height: 31,
    transform: [
        {
            rotateZ: "0.28deg"
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
  	group1000000757: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 27,
    left: 4,
    width: 28
},
  	group1000000769: {
    position: "absolute",
    flexShrink: 0,
    top: 739,
    height: 60,
    left: 151,
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