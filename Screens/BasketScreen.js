import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import tw from 'twrnc';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import {
    XCircleIcon
} from 'react-native-heroicons/solid'
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter'
import { Divider } from 'react-native-paper';



const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const [groupedItemsInBasket, SetGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const groupedItems = items.reduce((results, item) =>{
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {})
        SetGroupedItemsInBasket(groupedItems)
    },[items])
  return (
    <SafeAreaView style={tw `flex-1 bg-white`}>
        <View style={tw ` flex-1 bg-gray-100`}>
            <View style={tw `p-5 border-b border-[#00CCBB] bg-white shadow-xs`}>
                <View>
                    <Text style={tw `text-lg font-bold text-center`}>Basket</Text>
                    <Text style={tw `text-center text-gray-400`}>
                        {restaurant.title}
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() =>navigation.goBack()}
                    style={tw `rounded-full bg-gray-100 absolute top-3 right-5`}
                >
                    <XCircleIcon color='#00CCBB' height={50} width={50}/>
                </TouchableOpacity>
            </View>

            <View style={tw `flex-row items-center px-4 py-3 bg-white my-5`}>
                <Image source={{
                    uri: 'https://links.papareact.com/wru',
                }}
                style={tw `h-7 mr-5 w-7 bg-gray-300 p-4 rounded-full`}
                />
                <Text style={tw `flex-1`}>Deliver in 50-60 min</Text>
                <TouchableOpacity>
                    <Text style={tw `text-[#00BBCC]`}>Change</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <Divider/>
                {Object.entries(groupedItemsInBasket).map(([key, items]) =>(
                    <View 
                        key={key}
                        style={tw `flex-row items-center pl-5 bg-white py-2 px-5`}
                    >
                        <Text style={tw `text-[#00BBCC]`}>{items.length} x</Text>
                        <Image
                            source={{uri: urlFor(items[0]?.image).url() }}
                            style={tw ` h-12 w-12 rounded-full ml-2`}
                        />
                        <Text style={tw `flex-1 ml-3`}>{items[0].name}</Text>

                        <Text style={tw `text-gray-600`}>
                            <Currency quantity={items[0]?.price} currency='PKR'/>
                        </Text>
                        <TouchableOpacity>
                            <Text
                                style={tw `text-[#00CCBB] text-xs ml-3`}
                                onPress={() => dispatch(removeFromBasket({id: key}) )}
                            >
                                Remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <View style={tw `p-5 bg-white mt-5 `}>
                <View style={tw `flex-row justify-between`}>
                    <Text style={tw `text-gray-400`}>Subtotal</Text>
                    <Text style={tw `text-gray-400`}>
                        <Currency quantity={basketTotal} currency='PKR'/>
                    </Text>
                </View>

                <View style={tw `flex-row justify-between`}>
                    <Text style={tw `text-gray-400`}>Delivery Fee</Text>
                    <Text style={tw `text-gray-400`}>
                        <Currency quantity={48.49} currency='PKR'/>
                    </Text>
                </View>

                <View style={tw `flex-row justify-between`}>
                    <Text>OrderTotal</Text>
                    <Text style={tw `font-extrabold`}>
                        <Currency quantity={basketTotal + 48.49} currency='PKR'/>
                    </Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('PreparingOrderScreen')} style={tw `rounded-lg mt-5 pt-2 pb-2 bg-[#00CCBB]`}>
                    <Text style={tw `text-center text-white text-lg font-bold`}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen