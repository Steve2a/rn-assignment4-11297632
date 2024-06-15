import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Profile = ({ route, }) => {
  const {name, email} = route.params;
  return (
    <View style={styles.headerView}>
    <View>
        <Text style={styles.header}>{ name }</Text>
        <Text style={styles.miniheader}>{ email }</Text>
    </View>
    <View style={styles.profileImg}>
      {/*<Image style={styles.img} source={require("../assets/image 8.png")} />*/}
    </View>
</View>
  )
}

export default Profile

const styles = StyleSheet.create({
  headerView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px'

},

header: {
    fontSize: '24px',
    fontWeight: '700',

},

miniheader: {
    fontSize: '20px',
    fontWeight: '400',
    color:'#95969D'

},

profileImg: {
    display: 'flex',
    width: '50px',
    height: '50px',
    borderRadius: '40px',
    backgroundColor: '#fff',
    alignItems: 'center'

},

img: {
    height: '45px',
    width: '46px'
},
})