import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.View 
        animation="flipInY" 
        easing="ease-out" 
        duration={1500} 
        style={styles.logoContainer}
      >
        <MaterialCommunityIcons name='bus-marker' size={160} color='#fff'/>
      </Animatable.View>
      <Animatable.Text 
        animation="fadeInUp" 
        easing="ease-out" 
        duration={1500} 
        style={styles.logoText}
      >TUNI</Animatable.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4051B2'
  },
  logoContainer: {},
  logoText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '800',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: -5, height: 5},
    textShadowRadius: 10
  },
});
