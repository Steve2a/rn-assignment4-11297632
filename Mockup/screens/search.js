import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native'
import React from 'react'

const Search = () => {
  return (
       <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search a job or person"
                placeholderTextColor={'#95969D'}
            />
            <Image
                source={require("../assets/search.1 1.svg")}
                style={styles.searchIcon}
            />
            <TouchableOpacity style={styles.settingsbutton}>
               <Image
                    source={require("../assets/filter.5.svg")}
                    style={styles.settings}
                />
            </TouchableOpacity>
        </View>
  )
}

export default Search

const styles = StyleSheet.create({
  settingsbutton: {
    height: '48px',
    width: '50px',
    backgroundColor:'#F2F2F3',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'12px'
},

settings:{
  height:'26px',
  width:'26px',
  backgroundColor:'#F2F2F3',

},

searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: '0',
    marginBottom:'50px',

},

searchIcon: {
    position: 'relative',
    height: '20px',
    width: '20px',
    left: '-250px',
    zIndex: '1',

},

searchInput: {
    height: '48px',
    width: '263px',
    backgroundColor: '#F2F2F3',
    border: 'none',
    borderRadius: '12px',
    paddingHorizontal: 10,
    position: 'relative',
    paddingLeft: '45px'
},
})