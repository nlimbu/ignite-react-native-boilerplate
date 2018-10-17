import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
// import { Images } from '../Themes'
import FontAwesome5, { FA5Style } from 'react-native-vector-icons/FontAwesome5';

// Styles

import styles from '../Containers/Styles/LaunchScreenStyles'

export default class AboutUs extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     grinIcon: null
  //   }
  // }

  // componentWillMount() {
  //   FontAwesome5.getImageSource("comments", 30, '#000', FA5Style.solid).then(grinIcon => this.setState({ grinIcon }));
  // }
  render() {
    return (
      <View style={[styles.section, {
        backgroundColor: '#fff', borderRadius: 5, elevation: 20, padding: 0
      }]}
      >
        <View style={{
          backgroundColor: '#303030', borderRadius: 5, padding: 10, margin: 2, alignItems: 'center', justifyContent: 'center'
        }}
        >
          <Text style={styles.sectionText}>
            This is just a dummy screen to test the navigation flow.
          </Text>
          <FontAwesome5 name="grin" size={30} color="#fff" solid />
          {/* {this.state.grinIcon && <Image source={this.state.grinIcon} />} */}
        </View>
      </View>
    )
  }
}
