import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { urlFor } from '../sanity';
import tw from 'twrnc';
import { 
    ArrowLeftIcon ,
    ChevronRightIcon,
    MapPinIcon,
    StarIcon,
} from 'react-native-heroicons/solid';
import { Divider } from 'react-native-paper';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../Components/dishRow';


const ResturantScreen = () => {
    const navigation = useNavigation();
    const { params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
    },
    } = useRoute();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false,

        });
    }, []);
  return (
    <ScrollView>
        <View style={tw `relative`}>
            <Image
                style={tw `w-full h-56 bg-gray-300 p-4`}
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
            />
        
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                style={tw `absolute top-14 left-5 p-2 bg-gray-100 rounded-full`}>
                <ArrowLeftIcon size={20} color='#00CCBB'/>
            </TouchableOpacity>
        </View>
                
        <View style={tw `bg-white`}>
            <View style={tw `px-4 pt-4`}>
                <Text style={tw ` text-3xl font-bold`}>{title}</Text>
            </View>
            <View style={tw `flex-row ml-8px my-1`}>
                <View style={tw `flex-row items-center ml-4px`}>
                    <StarIcon color='green' opacity={0.5} size={22}/>
                    <Text style={tw `text-xs text-gray-500`}>
                        <Text style={tw `text-green-500`}>{rating}</Text> . {genre}
                    </Text>
                </View>

                <View style={tw `flex-row items-center ml-4px`}>
                    <MapPinIcon color='gray' opacity={0.4} size={22}/>
                <Text style={tw `text-xs text-gray-500`}>Nearby · {address}</Text>
                </View>
             </View>
             <Text style={tw `text-gray-500 mt-2 pb-4 ml-2`}>{short_description}</Text>

            <Divider/>
             <TouchableOpacity style={[tw `flex-row items-center ml-8px p-4`]}>
                <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20}/>
                <Text style={tw `pl-2 flex-1 text-md font-bold`}>
                    Have a food allergy?
                </Text>
                <ChevronRightIcon color='#00CCBB'/>
            </TouchableOpacity>
            <Divider/>
        </View>

        <View>
            <Text style={tw `px-4 pt-6 mb-3 font-bold text-xl`}>
                Menu
            </Text>
            {/* DishRows */}
            {dishes?.map((dish) => (
                <DishRow
                    id={dish._id}
                    key={dish._id}
                    name={dish.name}
                    description={dish.short_description}
                    price={dish.price}
                    image={dish.image}
                />
            ))}
        </View>
    </ScrollView>
  )
}

export default ResturantScreen