import { Dimensions, Text,Image, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { styles, theme } from "../Theme";
import MovieList from "../Components/movieList";


var { width, height } = Dimensions.get("window");
const PersonScreen = () => {
  const navigation = useNavigation();
  const [isFavourite,toggleFavourite] = useState(false) 
  const [personMovie,setPersonMovie]=useState([1,2,3,4,5])
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView
        className='
          "z-100 w-full flex-row justify-between items-center px-4 mx-2" 
        '
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.background}
          className="rounded-xl p-1"
        >
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
          <HeartIcon
            size="35"
            color={isFavourite ? 'red' : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {/* Person Details */}
      <View>
        <View className='flex-row justify-center'
          style={{
            shadowColor:'gray',
            shadowOffset:{width:0, height:5},
            shadowRadius:10,
            shadowOpacity:1
          }}
        >
          <View className='items-center rounded-full overflow-hidden w-50 h-72 border-neutral-400'>
            <Image
              source={require('../assets/image.png')}
              style={{height:height*0.4,width:width*0.7}}
              />
          </View>
        </View>
        <View className='mt-6'>
          <Text className='text-white text-3xl font-bold text-center'>
            Keanu Reeves
          </Text>
          <Text className='text-base text-neutral-400 text-center'>
            London, United Kingdom
          </Text>
        </View>
        <View className='mx-3  mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full p-3'>
          <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
            <Text className='text-white font-semibold'>Gender</Text>
            <Text className='text-neutral-300  font-semibold'>Male</Text>
          </View>
          <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
            <Text className='text-white font-semibold'>Birthday</Text>
            <Text className='text-neutral-300  font-semibold'>1964-3-11</Text>
          </View>
          <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
            <Text className='text-white font-semibold'>Known for</Text>
            <Text className='text-neutral-300  font-semibold'>Acting</Text>
          </View>
          <View className='px-2 items-center'>
            <Text className='text-white font-semibold'>Popularity</Text>
            <Text className='text-neutral-300  font-semibold'>64.23</Text>
          </View>
        </View>
        <View className='mx-4 my-9 space-y-2'>
          <Text className='text-white text-lg'>Biography</Text>
          <Text className='text-neutral-400 tracking-wide'>
          Keanu Charles Reeves (/kiˈɑːnuː/ kee-AH-noo;[4][5][6] born September 2, 1964) is a Canadian[c] actor. Known for his phlegmatic disposition in roles spanning numerous genres, he has established himself as a leading man in action cinema. In 2020, The New York Times called him one of the greatest actors of the 21st century,[9] and Time named him one of the 100 most influential people in the world in 2022.[10
          </Text>
        </View>

        {/* Movies */}
        <MovieList title='Movie' hideSeeAll={true} data={personMovie}/>
      </View>



    </ScrollView>
  );
};

export default PersonScreen;

