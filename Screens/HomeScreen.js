import { SafeAreaView, StyleSheet,Image,TextInput, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
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
import sanityClient from '../sanity';

const HomeScreen = () => {
    const [featuredCategories, setFeaturedCategories] = useState([])
    const navigation = useNavigation();
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    useEffect(() => {
        sanityClient.fetch(
            `
            *[_type == 'featured'] {
                ...,
                resturants[]->{
                ...,
                dishes[]->
                }
            }
            `
        ).then((data) => {
            setFeaturedCategories(data);
        });
    },[]);
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

                {featuredCategories?.map(category => (
                    <FeaturedRow
                    key={category._id}
                    id={category._id}
                    title={category.name}
                    description={category.short_description}
                    />
                ))}
            </ScrollView>
        </>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})