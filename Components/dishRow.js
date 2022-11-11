import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
import {
    MinusCircleIcon,
    PlusCircleIcon,
} from 'react-native-heroicons/solid'
import { Divider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, removeItemsFromBasket, selectBasketItemsById } from '../features/basketSlice';


const DishRow = ({id, name, description, price, image}) => {
    const [isPressed, setIsPressed] = useState(false);
    const items = useSelector((state) => selectBasketItemsById(state,id))
    const dispatch = useDispatch();

    const addItemsToBasket = () =>{
        dispatch(addToBasket({id,name,description,price,image}))
    };

    const removeItemFromBasket = () =>{
        if (!items.length > 0) return;
        dispatch(removeFromBasket({id}))
    };

  return (
    <>
    <Divider/>
    <TouchableOpacity 
        onPress={() => setIsPressed(!isPressed)}
        style={tw ` bg-white p-4 `}
    >
        
       <View style={tw `flex-row`}>
            <View style={tw `flex-1 pr-2`}>
                <Text style={tw `text-lg mb-1`}>{name}</Text>
                <Text style={tw `text-gray-400`}>{description}</Text>
                <Text style={tw `text-gray-400 mt-2`}>
                <Currency quantity={price} currency='pkr'/>
                </Text>
            </View>
            <View>
                <Image
                    style={[tw `h-20 w-20 bg-gray-300 p-4`, {borderWidth:1, borderColor:'#F3F3F4'}]}
                    source={{uri:urlFor(image).url()}}
                />
            </View>
        </View>
    </TouchableOpacity>
    {isPressed && (
        <View style={tw ` bg-white px-4`}>
            <View style={tw `flex-row items-center ml-8px pb-3 `}>
                <TouchableOpacity disabled={!items.length} style={{marginRight:5}} onPress={removeItemFromBasket}>
                    <MinusCircleIcon size={40} color={items.length>0 ? '#00CCBB' :'gray'} />
                </TouchableOpacity>

                <Text>{items.length}</Text>
                        
                <TouchableOpacity style={{marginLeft:5}} onPress={addItemsToBasket}>
                    <PlusCircleIcon color='#00CCBB' size={40} />
                </TouchableOpacity>

            </View>
        </View>
    )}
    </>
  )
}

export default DishRow