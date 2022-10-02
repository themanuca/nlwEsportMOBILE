import { ImageBackground } from "react-native";
import backgorundImg from "../../assets/games/Fundo.png";
import { styles } from "./styles";

interface Props {
  children: React.ReactNode;
}
export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgorundImg}
      style={styles.container}
      defaultSource={backgorundImg}
    >
      {children}
    </ImageBackground>
  );
}
