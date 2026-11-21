import { View, Text, FlatList } from "react-native";
import React from "react";

const PastRequestsMain = () => {
  return (
    <View>
      <FlatList
        data={[
          "apple",
          "banana",
          "pineapple",
          "Mango",
          "Strawberry",
          "Melon",
          "Cucumber",
        ]}
        renderItem={({index, item}) => {
          return <Text style={{
            fontSize : 20,
            color: "white",
            padding:20,
            paddingHorizontal:20,
            borderRadius:16,
            borderColor: "#0735de",
            borderWidth:2,
            gap:10
          }}>
            {item}
          </Text>;
        }}
      />
    </View>
  );
};

export default PastRequestsMain;
