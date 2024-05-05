import { Dimensions, ScrollView, StyleSheet, Image,Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

var {width,height}=Dimensions.get('window')
const SearchScreen = () => {
    const navigation=useNavigation();
    const [result,setResult] = useState([1,2,3,4]);
    const movieName="Antman and the wasp: Quantuminia"
  return (
    <SafeAreaView className='bg-neutral-800 flex-1'>
        <View className='mt-6 mx-2 flex-row justify-between items-center border border-neutral-500 rounded-full'>
            <TextInput
                placeholder='Search Movie'
                placeholderTextColor={'lightgray'}
                className='flex-1 p-2 mx-3 text-base font-semibold text-white tracking-wide'
            />
            <TouchableOpacity 
                onPress={()=>navigation.navigate('Home')}
                className='rounded-full p-3 m-1 bg-neutral-500'
            >
                <XMarkIcon size='25' color='white'/>
            </TouchableOpacity>
        </View>
        {/* Result */}
        {
            result.length>0?(
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingHorizontal:15}}
                    className='space-y-3 mt-4'
                >
                    <Text className='text-white font-semibold ml-1'>Result ({result.length})</Text>
                    <View className='flex-row justify-between flex-wrap'>
                        {
                            result.map((item,index)=>{
                                return(
                                    <TouchableWithoutFeedback
                                        key={index}
                                        onPress={()=>navigation.push("Movie",item)}
                                    >
                                        <View className='space-y-2 mb-4'>
                                            <Image className='rounded-3xl'
                                                source={require('../assets/Antman.jpg')}
                                                style={{width:width*0.44, height:height*0.3}}

                                            />
                                            <Text className='text-neutral-300 ml-1'>
                                                {
                                                    movieName.length>22?movieName.slice(0,22)+"...":movieName
                                                }
                                            </Text>
                                        </View>
                                        
                                    </TouchableWithoutFeedback>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            ):(
                <View className='flex-row justify-center mt-8'>
                    <Image
                        source={require('../assets/movie_time.png')}
                        className='w-80 h-80'
                    />
                </View>
            )
        }
        
    </SafeAreaView>
  )
}

export default SearchScreen
