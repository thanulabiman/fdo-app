import { View } from "@/components/ui/view";
import { Text } from "@/components/ui/text";
import React, { useState } from "react";
import { Picker } from "@/components/ui/picker";
import { WARE_HOUSES } from "@/constants/mock-data";
import { DatePicker } from "@/components/ui/date-picker";
import { useColor } from "@/hooks/useColor";
import { Button } from "@/components/ui/button";
import { Plus, Save } from "lucide-react-native";
import { Input } from "@/components/ui/input";

const NewRequestMain = () => {
  const [value, setValue] = useState<string>("");
  const options = WARE_HOUSES.map((i) => ({
    label: i.name,
    value: i.id + "",
  }));

  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const border = useColor("border");

  return (
    <View style={{ padding: 20, gap: 15 }}>
      <Text>Warehouse *</Text>
      <Picker
        options={options}
        value={value}
        onValueChange={setValue}
        placeholder="Select a warehouse..."
      />

      <Text>Request Date *</Text>
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        placeholder="Choose a date"
      />
      <Text>Products *</Text>
      <View
        style={{
          borderRadius: 16,
          borderWidth: 1,
          borderColor: border,
          padding: 10,
        }}
      >
        <Text>No items are added</Text>
      </View>
      <Button icon={Plus}>Add</Button>

      <Text>Note *</Text>
      <Input
        type="textarea"
        placeholder="Add any information relevant to this stock request."
      />

      <Button icon={Save} variant="success">Save</Button>
    </View>
  );
};

export default NewRequestMain;
