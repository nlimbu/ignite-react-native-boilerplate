import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
// import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles

import styles from '../Containers/Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor() {
    super();
    this.navigateToAboutUs = this.navigateToAboutUs.bind(this);
  }

  navigateToAboutUs() {
    this.props.navigation.navigate('AboutUs');
  }

  render() {
    return (
      <View style={[styles.section, {
        backgroundColor: '#fff', borderRadius: 5, elevation: 20, padding: 0
      }]}
      >
        <View style={{
          backgroundColor: '#303030', borderRadius: 5, padding: 10, margin: 2
        }}
        >
          <Text style={styles.sectionText}>
            This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
          </Text>
          <TouchableOpacity
            onPress={this.navigateToAboutUs}
          >
            <Icon name="thumbs-up" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
