import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Card, Divider } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
import MapView, { Marker } from "react-native-maps";

type Params = {
  order: Order;
  fullWidth?: boolean;
};

export const DeliveryCard = ({ order, fullWidth }: Params) => {
  const tw = useTailwind();

  return (
    <Card
      style={[
        tw(`${fullWidth ? "rounded-none m-0" : "rounded-lg"}`),
        {
          padding: 0,
          paddingTop: 16,
          marginTop:10,
          paddingHorizontal: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          backgroundColor: fullWidth ? "#EB6A7C" : "#59c1cc",
        },
      ]}
    >
      <View style={fullWidth && { height: "100%" }}>
        <Entypo name="box" size={50} color={"#fff"} />
        <View style={tw("-mt-3 p-5 items-start")}>
          <View style={tw("mx-auto")}>
            <Text
              style={tw("text-xs text-center uppercase text-white font-bold")}
            >
              {order.carrier}-{order.trackingId}
            </Text>
            <Text style={tw("text-lg text-center text-white font-bold")}>
              Expected delivery date:
              {new Date(order.createdAt).toLocaleDateString()} @
              {new Date(order.createdAt).toTimeString()}
            </Text>
            <Divider style={{ backgroundColor: "#fff" }} />
          </View>

          <View style={tw("mx-auto pb-5")}>
            <Text style={tw("text-base text-white font-bold text-center mt-5")}>
              Adress
            </Text>
            <Text style={tw("text-sm text-white text-center")}>
              {order.Address} {order.City}
            </Text>
            <Text style={tw("text-base text-white font-bold text-center mt-5")}>
              Shipping cost
            </Text>
            <Text style={tw("text-sm text-white text-center")}>
              curr convert lib {order.shippingCost}
            </Text>
          </View>
        </View>

        <Divider style={{ backgroundColor: "#fff" }} />
        <View style={tw("p-5")}>
          {order.trackingItems.items.map((item) => (
            <View
              style={tw("flex-row justify-between items-center")}
              key={item.item_id}
            >
              <Text style={tw("italic text-sm text-white")}>{item?.name}</Text>
              <Text style={tw(" text-xl text-white")}>
                X {item.quantity.toString()}
              </Text>
            </View>
          ))}
        </View>
        <MapView
          initialRegion={{
            latitude: order.Lat,
            longitude: order.Lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          style={[tw("w-full"), { flexGrow: 1, height: 200 }]}
          showsBuildings
          showsTraffic
        >
          {/* {order.Lat && order.Lng && (
            <Marker
              coordinate={{ longitude: order.Lng, latitude: order.Lat }}
              title="Delivery Location"
              description={order.Address}
              pinColor="red"
              identifier="Delivery address"
            />
          )} */}
        </MapView>
      </View>
    </Card>
  );
};
