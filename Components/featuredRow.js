import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantsCards from './resturantsCards';

const FeaturedRow = ({id,title, description}) => {
  return (
    <View>
        <View style={tw `mt-4 flex-row items-center justify-between px-4`}>
            <Text style={tw `font-bold text-lg`}>
                {title}
            </Text>
            <ArrowRightIcon color='#00CCBB'/>
        </View>
        <Text style={tw `text-xs text-gray-500 px-4`}>
            {description}
        </Text>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal:15
            }}
            style={tw `pt-4`}
        >
            <ResturantsCards
                id= {123}
                imgUrl='https://links.papareact.com/gn7'
                title='yo! Sushi'
                rating= {4.5}
                genre= 'Japanese'
                address= '123 main road Japan'
                short_description= 'Test Description'
                dishes= {[]}
                long={20}
                lat= {0}
            />
            <ResturantsCards
                id= {123}
                imgUrl='https://links.papareact.com/gn7'
                title='yo! Sushi'
                rating= {4.5}
                genre= 'Japanese'
                address= '123 main road Japan'
                short_description= 'Test Description'
                dishes= {[]}
                long={20}
                lat= {0}
            />
            <ResturantsCards
            id= {123}
            imgUrl='https://links.papareact.com/gn7'
            title='yo! Sushi'
            rating= {4.5}
            genre= 'Japanese'
            address= '123 main road Japan'
            short_description= 'Test Description'
            dishes= {[]}
            long={20}
            lat= {0}
        />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow