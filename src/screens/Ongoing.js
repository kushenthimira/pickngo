import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import Screen from "../components/Screen";

export default function ({ navigation }) {
  return (
    <Screen
      backAction={() => {
        navigation.goBack();
      }}
      headerTitle={"Ongoing Request"}
    >
      <Layout
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>This is the Ongoing Request tab</Text>
      </Layout>
    </Screen>
  );
}
