import { View, Image, FlatList } from "react-native";
import logoImg from "../../../assets/icon.png";
import { GameCard } from "../../Components/GameCard";
import { Heading } from "../../Components/Heading";
import { styles } from "./styles";
import { GAMES } from "../../utils/games";
export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar"
      />
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
