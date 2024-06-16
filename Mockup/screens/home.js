import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import Search from './search';
import FeaturedJobs from './featuredJobs';
import PopularJobs from './popularJobs';

const home = ({ route, }) => {
  const { name, email } = route.params;
  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>

      <View style={styles.headerView}>
        <View >
          <Text style={styles.header}>{name}</Text>
          <Text style={styles.miniheader}>{email}</Text>
        </View>

        <View style={styles.notification}></View>
        <Image style={styles.profileImg} source={require('../assets/Ellipse.svg')} />
      </View>

      <Search />

      <View style={styles.titleView}>
        <Text style={styles.title}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FeaturedJobs backgroundImg={require('../assets/card1.svg')} imgsrc={require('../assets/facebook-svgrepo-com.svg')} position={'Sofware Engineer'} company={'Facebook'} pay={'$180,00'} location={'Accra, Ghana'} />

        <FeaturedJobs backgroundImg={require('../assets/card2.svg')} imgsrc={require('../assets/flat-color-icons_google.svg')} position={'Backend Developer'} company={'Google'} pay={'$160,00'} location={'Accra, Ghana'} />

        <FeaturedJobs backgroundImg={require('../assets/card3.svg')} imgsrc={require('../assets/hubtel-logo.png')} position={'System Administrator'} company={'Hubtel'} pay={'$120,00'} location={'Accra, Ghana'} />

        <FeaturedJobs backgroundImg={require('../assets/card4.svg')} imgsrc={require('../assets/netflix-svgrepo-com.svg')} position={'Frontend Developer'} company={'Netflix'} pay={'$190,00'} location={'Accra, Ghana'} />

        <FeaturedJobs backgroundImg={require('../assets/card5.svg')} imgsrc={require('../assets/microsoft-svgrepo-com.svg')} position={'Database Administrator'} company={'Microsoft'} pay={'$150,00'} location={'Accra, Ghana'} />

        <FeaturedJobs backgroundImg={require('../assets/card6.svg')} imgsrc={require('../assets/twitter-3-svgrepo-com.svg')} position={'Project Manager'} company={'Twitter'} pay={'$200,00'} location={'Accra, Ghana'} />

        <FeaturedJobs backgroundImg={require('../assets/card7.svg')} imgsrc={require('../assets/amazon-svgrepo-com.svg')} position={'Dev Ops'} company={'Amazon'} pay={'$250,00'} location={'Accra, Ghana'} />

        <FeaturedJobs backgroundImg={require('../assets/card8.svg')} imgsrc={require('../assets/ubuntu-svgrepo-com.svg')} position={'UI/UX Designer'} company={'Ubuntu'} pay={'$250,00'} location={'Accra, Ghana'} />

      </ScrollView>

      <View style={styles.titleView}>
        <Text style={styles.title}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <PopularJobs companyLogo={require('../assets/burger-king-4 1.svg')} availablePostion={'Jr Executive'} companyName={'Burger King'} salary={'$96,000/y'} address={'Los Angeles, US'} />

      <PopularJobs companyLogo={require('../assets/beats.svg')} availablePostion={'Product Manager'} companyName={'Beats'} salary={'$84,000/y'} address={'Florida, US'} />

      <PopularJobs companyLogo={require('../assets/facebook-svgrepo-com.svg')} availablePostion={'Product Manager'} companyName={'Facebook'} salary={'$86,000/y'} address={'Florida, US'} />

      <PopularJobs companyLogo={require('../assets/snapchat-svgrepo-com.svg')} availablePostion={'Backend Developer'} companyName={'Snapchat'} salary={'$100,000/y'} address={'Accra, Ghana'} />

      <PopularJobs companyLogo={require('../assets/twitter-svgrepo-com1.svg')} availablePostion={'Frontend Developer'} companyName={'Twitter'} salary={'$120,000/y'} address={'London, UK'} />

      <PopularJobs companyLogo={require('../assets/adidas-svgrepo-com.svg')} availablePostion={'Sales Officer'} companyName={'Adidas'} salary={'$80,000/y'} address={'Birmingham, UK'} />

      <PopularJobs companyLogo={require('../assets/brand-nike-svgrepo-com.svg')} availablePostion={'IT Manager'} companyName={'Nike'} salary={'$90,000/y'} address={'Lisbon, Portugal'} />

      <PopularJobs companyLogo={require('../assets/tesla-svgrepo-com.svg')} availablePostion={'Sys Admin'} companyName={'Tesla'} salary={'$400,000/y'} address={'Accra, Ghana'} />

    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFD',
    padding: '20px'
  },

  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px'

  },

  header: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#0D0D26'

  },

  miniheader: {
    fontSize: '20px',
    fontWeight: '400',
    color: '#95969D'

  },

  profileView: {
    display: 'flex',
    width: '60px',
    height: '60px',
    borderRadius: '40px',
    backgroundColor: '#fff',
    alignItems: 'center'

  },

  notification: {
    height: '12px',
    width: '12px',
    backgroundColor: 'red',
    borderRadius: '25px',
    zIndex: 1,
    border: '2px solid #FAFAFD',
    left: '111px',
    top: '-18px'

  },

  profileImg: {
    display: 'flex',
    width: '60px',
    height: '60px',
    borderRadius: '40px',
    backgroundColor: '#fff',
    alignItems: 'center',
    zIndex: 0

  },

  img: {
    height: '45px',
    width: '46px'
  },

  titleView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '30px',
    paddingRight: '30px'
  },

  title: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#0D0D26'
  },

  seeAll: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#95969D'
  }

})