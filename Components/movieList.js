import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { styles } from '../Theme'
import { useNavigation } from '@react-navigation/native'


var {width,height}=Dimensions.get('window')
const MovieList = ({title,data,hideSeeAll}) => {
    const navigation=useNavigation();
    const movieName='The ant man and Wraps in the jungle playing'
  return (
    <View className="mb-8 space-y-4">
        <View className='mx-4 flex-row justify-between items-center'>
            <Text className='text-white text-lg'>{title}</Text>
            {
                !hideSeeAll && (
                    <TouchableOpacity>
                         <Text style={styles.text} className='text-sm'>See All</Text>
                    </TouchableOpacity>
                )
            }
        </View>
        {/* movie row */}
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:15}}
        >
            {
            data.map((item,index)=>{
                return(
                    <TouchableWithoutFeedback
                        key={index}
                        //passing seriesofitem to Movie
                        onPress={()=>navigation.navigate('Movie',item)}
                    >
                        <View className='space-y-1 mr-1'>
                            <Image
                                source={require('../assets/Antman.jpg')}
                                className='rounded-3xl'
                                style={{width:width*0.33, height:height*0.22}}
                
                            />
                            <Text className='text-neutral-300 ml-1'>
                                {
                                    movieName.length>14?movieName.slice(0,14)+'...':movieName
                                }
                            </Text>
                        </View>
                        
                    </TouchableWithoutFeedback>
                )
            })
            }
        </ScrollView>
    </View>
  )
}

export default MovieList
