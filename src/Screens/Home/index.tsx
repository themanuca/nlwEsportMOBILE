import React from "react";
import { View, Image } from "react-native";
import logoImg from "../../../assets/icon.png";
import { Heading } from "../../Components/Heading";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar"
      />
    </View>
  );
}
