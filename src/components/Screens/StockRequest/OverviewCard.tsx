import { View} from "react-native";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { windowWidth } from "@/constants/dimensions";

type Props = {
  title: string;
  value: string;
  description: string;
};

const OverviewCard = ({ title, value, description }: Props) => {
  return (
    <Card style={{ width: (windowWidth-60)/2 }}>
      <CardHeader>
        <CardTitle style={{ fontSize: 16 }}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 4 }}>
          {value}
        </Text>
        <Text style={{ color: "#888484", fontSize: 12 }}>
          {description} from last month
        </Text>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
