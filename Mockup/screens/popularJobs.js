import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const PopularJobs = (props) => {
  return (
    <View style={styles.popularCard}>
      <View style={styles.popularView1}>
        <Image style={styles.popularIcon} source={props.companyLogo} />
        <View style={styles.popularText1}>
          <Text style={styles.job}>{props.availablePostion}</Text>
          <Text style={styles.company}>{props.companyName}</Text>
        </View>
      </View>
      <View style={styles.popularText2}>
        <Text style={styles.yearSalary}>{props.salary}</Text>
        <Text style={styles.point}>{props.address}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  popularCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '15px',
    paddingRight: '25px',
    paddingBottom: '15px',
    paddingLeft: '25px',
    backgroundColor: '#fff',
    height: '80px',
    width: '350px',
    borderRadius: '20px',
    marginBottom: '20px'
  },

  popularIcon: {
    height: '49px',
    width: '49px',
    alignSelf: 'center'

  },

  popularView1: {
    flexDirection: 'row',
    gap: '20px',
  },
  popularText1: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: '3px',
    paddingBottom: '3px'
  },

  job: {
    fontSize: '16px',
    fontWeight: '600',
  },

  company: {
    fontWeight: '400',
    fontSize: '15px',
    color: '#ODOD26',
  },

  popularText2: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingTop: '3px',
    paddingBottom: '3px'
  },

  yearSalary: {
    fontSize: '15px',
    fontWeight: '500',
  },

  point: {
    fontWeight: '400',
    fontSize: '15px',
    color: '#ODOD26',
  },




})


export default PopularJobs