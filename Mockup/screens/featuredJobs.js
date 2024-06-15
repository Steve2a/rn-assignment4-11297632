import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'

const FeaturedJobs = ( props ) => {
  return (
    <View>
      <ImageBackground source={props.backgroundImg} resizeMode="cover" style={styles.card}>
        <View style={styles.companyView}>
        <View style={styles.companyIconBackground}> <Image style={styles.companyIcon} source={props.imgsrc} /> </View>
            <View style={styles.companyTexts}>
              <Text style={styles.positionText}>{props.position}</Text>
              <Text style={styles.companyText}>{props.company}</Text>
            </View>
        </View>
        <View style={styles.bottomText}>
            <Text style={styles.payText}> { props.pay } </Text>
            <Text style={styles.locationText}> { props.location } </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    padding: '20px',
    width:'280px',
    height:'186px',
    display:'flex',
    justifyContent:'space-between',
    marginRight:'15px',
    marginBottom:'50px'
  }, 

  companyView: {
    display: 'flex',
    flexDirection:'row',
    gap:'20px',
  },

  companyIconBackground: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    height:'50px',
    width:'50px',
    borderRadius: '12px',
  },

  companyIcon:{
    height:'24px',
    width:'24px',
  },

  companyTexts: {
    display:'flex',
    gap:'8px',
  },

  positionText: {
    fontSize:'16px',
    fontWeight:'600',
    color:'#fff'
  },

  companyText:{
    fontSize:'14px',
    fontWeight:'400',
    color:'#fff'
  },

  bottomText: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',

  },

  payText: {
    fontSize:'15px',
    fontWeight:'500',
    color:'#fff',
  },

  locationText: {
    fontSize:'15px',
    fontWeight:'500',
    color:'#fff',
  },



})

export default FeaturedJobs