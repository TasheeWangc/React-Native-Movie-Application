import {
    Dimensions,
    Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon} from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";

import { SafeAreaView } from "react-native-safe-area-context";
import { styles, theme } from "../Theme";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../Components/cast";
import MovieList from "../Components/movieList";


var {width,height}=Dimensions.get('window');
const ios = Platform.OS =='ios';
const topMargin=ios? '':'mt-2'


const MovieScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const [isFavourite,toggleFavourite] = useState(false);
  const [cast,setCast] = useState([1,2,3,4,5])
  const [similarMovies, setSimilarMovies] =useState([1,2,3,4,5])
  
  useEffect(() => {}, [item]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom:20 }}
      className="flex-1 bg-neutral-900"
    >
      {/* back button and movie posture */}
      <View className="w-full">
        <SafeAreaView className={'z-100 w-full flex-row justify-between items-center px-4 mx-2'+topMargin}>
          <TouchableOpacity onPress={()=>navigation.goBack('Home')} style={styles.background} className='rounded-xl p-1'>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>toggleFavourite(!isFavourite)}>
            <HeartIcon size='35' color={isFavourite? styles.background:"white"}/>
          </TouchableOpacity>
        </SafeAreaView>
        <View>
            <Image 
                source={require('../assets/Antman.jpg')}
                style={{width, height:height*0.55}}
            />
            <LinearGradient
              colors={['transparent','rgba(23,23,23,0.8)', 'rgba(23,23,23,2)']}
              style={{width,height:height*0.40}}
              start={{x:0.5, y:0}}
              end={{x:0.5, y:1}}
              className="absolute bottom-0"
            />
        </View>
      </View>
       {/* Movie Detail */}
      <View style={{marginTop:-(height*0.09)}} className='space-y-2'>
        <Text className='text-white text-center text-3xl font-bold tracking-wider'>
          Ant-Man and the Wasp: Quantumania
        </Text>
      </View>

      {/* status, release, runtime */}
      <Text className='text-neutral-400 font-semibold text-base text-center'>
        Release - 2020 - 170 min 
      </Text>

      {/* Genre */}
      <View className='flex-row justify-center space-x-2'>
        <Text className='text-neutral-400 font-semibold text-base text-center'>Action -</Text>
        <Text className='text-neutral-400 font-semibold text-base text-center'>Thrill -</Text>
        <Text className='text-neutral-400 font-semibold text-base text-center'>Comdey</Text>
      </View>

      {/* description */}
      <Text className='text-neutral-400 mx-4 tracking-wide'>
        Ant-Man and the Wasp is a 2018 American superhero film based on Marvel Comics featuring the characters Scott Lang / Ant-Man and Hope Pym / Wasp. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Ant-Man (2015) and the 20th film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed and written by the writing teams of Chris McKenna and Erik Sommers, and Paul Rudd, Andrew Barrer and Gabriel Ferrari.
      </Text>
      {/* Cast */}
      <Cast navigation={navigation} cast={cast}/>

      {/* Similar Movies */}
      <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}/>
      
      
    </ScrollView>
  );
};

export default MovieScreen;
