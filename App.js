import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { PaperProvider, Text, Card } from 'react-native-paper';
import styles from './styles';

export default function App() {
  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Card do React Native Paper envelopando o conteúdo */}
        <Card style={styles.card}>
          <Card.Cover 
            source={{ uri: "https://www.opovo.com.br/_midias/jpg/2021/09/09/818x460/1_senhor_dos_aneis-17015105.jpg" }} 
          />
          <Card.Content>
            <Text style={styles.titulo}>O Senhor dos Anéis</Text>

            <Text style={styles.descricao}>
              O Senhor dos Anéis acompanha a jornada do hobbit Frodo Bolseiro para
              destruir o Um Anel e impedir que o sombrio Sauron domine a Terra-média.
              Com uma história épica, personagens inesquecíveis e efeitos
              impressionantes, a trilogia tornou-se uma das mais premiadas da história
              do cinema, com 17 Oscars, incluindo 11 para O Retorno do Rei.
            </Text>

            <Text style={styles.texto}>
              <Text style={styles.negrito}>Ano de lançamento:</Text> 2001 a 2003
            </Text>

            <Text style={styles.texto}>
              <Text style={styles.negrito}>Atores principais:</Text> Elijah Wood,
              Ian McKellen, Viggo Mortensen, Sean Astin e Orlando Bloom
            </Text>

            <Text style={styles.texto}>
              <Text style={styles.negrito}>Bilheteria:</Text> Mais de US$ 5,8 bilhões
            </Text>

            <Text style={styles.texto}>
              <Text style={styles.negrito}>Filmes:</Text> A Sociedade do Anel,
              As Duas Torres e O Retorno do Rei
            </Text>
          </Card.Content>
        </Card>

        <StatusBar style="light" />
      </ScrollView>
    </PaperProvider>
  );
}