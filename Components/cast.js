import {Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Cast = ({ cast,navigation}) => {
    let personName='keanu Reevs';
    let characterName='John Wick'



  return (
    <View className="my-6">
      <Text className="text-white text-lg ml-3">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                className="mr-4 items-center"
                onPress={()=>navigation.navigate('Person',person)}
              >

                <View 
                    className='overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500'>
                        <Image
                            className="rounded-2xl h-24 w-20"
                            source={require('../assets/Antman.jpg')}
                        />
                </View>
                <Text className='text-white text-xs mt-3'>
                    {
                        characterName.length>10? characterName.slice(0,10)+'...' :characterName
                    }
                </Text>
                <Text className='text-neutral-400 text-xs mt-3'>
                    {
                         personName.length>10?personName.slice(0,10)+'...':personName
                    }
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;

const styles = StyleSheet.create({});
