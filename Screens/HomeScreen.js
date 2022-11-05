import { SafeAreaView, StyleSheet,Image,TextInput, Text, View, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline'
import Category from '../Components/category';
import FeaturedRow from '../Components/featuredRow';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
  return (
    <SafeAreaView style={{backgroundColor:'white' ,paddingTop:5}}>
        {/* Header */}
        <View style={tw `flex-row pb-3 items-center mx-4 `}>
            <Image 
                style={tw `h-7 w-7 bg-gray-300 p-4 rounded-full `}
                source={{
                    uri:'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450'
                }}
            />
            <View style={tw `ml-5 flex-1` }>
                <Text style={tw `font-bold text-gray-400 text-xs`}> Order Now!</Text>
                <Text style={tw ` font-bold text-xl`}> 
                    Current Location
                    <ChevronDownIcon size={20} color='#00CCBB'/>
                </Text>
            </View>
            <UserIcon size={35} color='#00CCBB'/>
        </View>
        {/* Search */}
        <View style={tw `flex-row items-center pb-2 mx-4`}>
            <View style={tw `flex-row flex-1 bg-gray-200 p-3`}>
                <MagnifyingGlassIcon color={'gray'} size={20}/>
                <TextInput
                    placeholder='Resturants and cuisines'
                    keyboardType='default'
                />
            </View>
            <AdjustmentsVerticalIcon color='#00CCBB'/>
        </View>
        {/* Body */}
        <>
            <ScrollView 
                style={tw `bg-gray-100`}
                contentContainerStyle={{paddingBottom:100}}
            
            >
                {/* Categories */}
                <Category/>
                {/* Featured */}
                <FeaturedRow
                    id='123'
                    title='Featured'
                    description='Paid placements from our partners'
                />
                {/* Tasty Discounts */}
                 <FeaturedRow
                    id='1234'
                    title='Tasty Discounts'
                    description='Everyone is enjoying our food come and get some.'
                />
                {/* Offers near you */}
                 <FeaturedRow
                    id='12345'
                    title='Offers near you'
                    description='These are offers we have for you. Come grab your meal Now!'
                />
            </ScrollView>
        </>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})