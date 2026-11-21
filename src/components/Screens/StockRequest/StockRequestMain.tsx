import { StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import OverviewCard from "./OverviewCard";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Container, History, Plus } from "lucide-react-native";
import { useRouter } from "expo-router";

const StockRequestMain = () => {
  const router = useRouter();
  const cardDetails = [
    {
      title: "Active Products",
      value: "6",
      description: "Unique SKU's tracked from last month",
    },
    {
      title: "Remaining Stock",
      value: "9820",
      description: "Units in warehouse from last month",
    },
    {
      title: "With FDOs",
      value: "225",
      description: "Units in progress from last month",
    },
    {
      title: "Variance",
      value: "0",
      description: "Units unaccounted from last month",
    },
  ];

  const goToNewRequest = useCallback(() => {
    router.push("/NewRequest");
  }, []);

  const goToPastRequests = useCallback(() => {
    router.push("/PastRequests");
  }, []);

  return (
    <View style={styles.Container}>
      {/*Card*/}
      <View style={{ gap: 20, flexDirection: "row", flexWrap: "wrap" }}>
        {cardDetails.map((i) => (
          <OverviewCard key={i.title} {...i} />
        ))}
      </View>
      {/*Bottom part*/}
      <View style={{ gap: 10 }}>
        <Text variant="title">Stock Requests</Text>
        <Text variant="caption" style={{ fontSize: 12 }}>
          Request stock from a warehouse and track approval status
        </Text>

        <Button icon={Plus} variant="success" onPress={goToNewRequest}>
          New Request
        </Button>
        <Button icon={History} variant="outline" onPress={goToPastRequests}>
          Past Requests
        </Button>
      </View>
    </View>
  );
};

export default StockRequestMain;

const styles = StyleSheet.create({
  Container: { flex: 1, padding: 20, gap: 20 },
});
