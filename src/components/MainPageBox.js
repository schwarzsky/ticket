import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function MainPageBox() {


        return(
            <View style={styles.MainPageBox}>
                <Text style={styles.MainPageBoxTitle}>Twitter</Text>
            </View>
        )


}

const styles = StyleSheet.create({
    MainPageBox: {
      flex: 1,
      maxHeight: '10vh',
      marginRight: '50px',
      marginLeft: '50px',
      marginTop: '20px',
      textAlign: 'left',
      backgroundColor: '#ededed',
      paddingTop: '20px',
      paddingBottom: '20px'
    },
    MainPageBoxTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      paddingLeft: '20px'
    }
  });