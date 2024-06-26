import { Text, TouchableOpacity, View ,ScrollView} from 'react-native';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { styles } from '../Theme';
import TrendingMovies from '../Components/trendingMovies';
import MovieList from '../Components/movieList';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [trending,setTrending] = useState([1,2,3,4]);
  const [upcoming,setUpcoming] = useState([1,2,3,4]);
  const [topRated,setTopRated] = useState([1,2,3,4]);

  const navigation = useNavigation()

  return (
    <View className="flex-1 bg-neutral-800">
      {/* Search bar */}
      <SafeAreaView className='mb-3'>
        <StatusBar style='light'/>
        <View className='flex-row justify-between items-center mx-4'>
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
          </TouchableOpacity>
        </View>
        
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:10}}
        >
          {/* trending movies coursels*/}
          <TrendingMovies data={trending}/>
          {/* upcoming movie row */}
          <MovieList title="Upcoming" data={upcoming}/>
          {/* Top rated movies */}
          <MovieList title="Top Rated" data={topRated}/>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
