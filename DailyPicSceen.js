import React, {Component} from 'react';
import { Alert, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, Image} from 'react-native';
import axios from axios;
export default class DailyPicScreen extends Component{
    getAPOD= () => {
        .get("https://api.nasa.gov/planetary/apod?api_key=edcAwmduhVCJTfXvaPeZjc0qNOWYwtTnNm1b4LiX")
        .then(response => {
            this.setState ({apod: response.data})
        })
        .catab(error =>{
            Alert.Alert(error.message)
        })
    }
    render(){
     <View style = {StyleSheet.container}>
         <SafeAreaView style = {StyleSheet.droidSafeArea}/>
         <ImageBackground
                source ={require('../assets/stars.gif')}styles={styles.backgroundImage}>
                <Text style={styles.routeText}>Astronomy picture of the day</Text>
                <Text style={styles.titleText}>{this.state.apod.title}</Text>
                <TouchableOpacity style={styles.listContainer}
                onPress= {() => Linking.openURL(this.state.apod.url).catch(err =>console.error("Couldn't load page",err))}>
                <View style = {styles.iconContainer}>
                    <Image source ={require("../assets/play-video.png")} style={{width:50, height:50}}></Image>
                </View>    
                </TouchableOpacity>
                <Text style= {styles.explanationText}>{this.state.apod.explanation}</Text>
         </ImageBackground>
     </View>   
        return(
            <View
                style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Daily Pic Screen</Text>    
            </View>
        )
    }
}