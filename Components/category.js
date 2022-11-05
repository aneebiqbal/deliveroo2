import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './categoryCard'

const Category = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10

    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
        {/* CategoryCard */}
        <CategoryCard 
            imgUrl="https://links.papareact.com/gn7"
            title='Test1' 
        />
        <CategoryCard
            imgUrl="https://links.papareact.com/gn7"
            title='Test2' 
        />
        <CategoryCard 
            imgUrl="https://links.papareact.com/gn7" 
            title='Test3' 
        />
        <CategoryCard 
            imgUrl="https://links.papareact.com/gn7" 
            title='Test4' 
        />

    </ScrollView>
  )
}

export default Category