import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'

const login = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.loginText}>
        <Text style={styles.jobizz}>Jobizz</Text>
        <Text style={styles.welcomeText}>Welcome Back 👋</Text>
        <Text style={styles.loginPhrase}>Let's log in. Apply to jobs!</Text>
      </View>
      <View style={styles.loginView}>
        <TextInput
          textContentType='text'
          placeholder='Name'
          onChangeText={setName}
          value={name}
          style={styles.loginPlaceholders}
          placeholderTextColor={'#AFB0B6'}
        />
        <TextInput
          textContentType='email'
          placeholder='Email'
          onChangeText={setEmail}
          value={email}
          style={styles.loginPlaceholders}
          placeholderTextColor={'#AFB0B6'}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('home',
            {
              name: name,
              email: email
            })}>
          <View style={styles.loginButton} >
            <Text style={styles.login}>Log in</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.continueText}>Or continue with</Text>
        <View style={styles.socials}>
          <View style={styles.social}>
          <Image source={require('../assets/cib_apple.svg')}/>
          </View>
          <View style={styles.social}>
          <Image source={require('../assets/flat-color-icons_google.svg')}/> 
          </View>
          <View style={styles.social}>
          <Image source={require('../assets/ion_logo-facebook.svg')}/>
          </View>

        </View>
        <View style={styles.account}>
          <Text style={styles.accountText}>Haven't an account?</Text>
          <Text style={styles.register}>Register</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '50px',
    backgroundColor:'#FAFAFD',
    padding:'20px'
  },
  loginText: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    gap:'15px'


  },

  loginPlaceholders: {
    border: 'solid 1px #AFB0B6',
    height: '52px',
    width: '327px',
    borderRadius: '10px',
    marginBottom: '15px',
    paddingLeft: '15px'
  },
  loginButton: {
    display: 'flex',
    height: '52px',
    width: '327px',
    backgroundColor: '#356899',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    marginTop: '10px'

  },
  login: {
    color: '#fff',
    fontSize: '15px',
    fontWeight: '500',
  },
  loginView: {
    display:'flex',
    alignSelf:'center'

  },

  jobizz: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#356899'
  },
  welcomeText: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#0D0D26'
  },

  loginPhrase: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#0D0D26'
  },
  bottomView:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'50px'
  },

  socials:{
    display:'flex',
    flexDirection:'row',
     gap:'40px'

  },
  social:{
    backgroundColor:'#fff',
    width:'56px',
    height:'56px',
    borderRadius:'30px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
   

  },
  continueText:{
    fontSize:'13px',
    fontWeight:'400',
    color:'#AFB0B6',
  },
  account:{
    display:'flex',
    flexDirection:'row',
    gap:'10px'

  },
  accountText:{
    fontSize:'14px',
    color:'#AFB0B6',
    fontWeight:'400'
  },
  register:{
    fontSize:'14px',
    color:'#356899',
    fontWeight:'400'
  }

})

export default login
