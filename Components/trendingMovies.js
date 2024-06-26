import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View,Image} from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'

var {width,height}=Dimensions.get('window')

const TrendingMovies = ({data}) => {
  const navigation = useNavigation();
  const handleClick=({item})=>{
    navigation.navigate('Movie',item)
  }
  return (
    <View className='md-8'>
      <Text className='text-white text-lg mx-4 mb-5'>Trending</Text>
      <Carousel
        data ={data}
        renderItem={({item})=> <MovieCard item={item} handleClick={()=>handleClick(item)}/>}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width*0.62}
        slideStyle={{display:'flex',alignItems:'center'}}
        />
    </View>
  )
}

export default TrendingMovies

const styles = StyleSheet.create({})

const MovieCard=({item, handleClick})=>{
  return(
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
          source={require('../assets/Antman.jpg')}
          style={{
            width:width*0.6,
            height:height*0.4
          }}
          className='rounded-3xl'/>
    </TouchableWithoutFeedback>
  )
}