import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        source={{ uri: "https://www.opovo.com.br/_midias/jpg/2021/09/09/818x460/1_senhor_dos_aneis-17015105.jpg" }}
        style={{ width: 300, height: 200, alignSelf: 'center' }}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>O Senhor dos Anéis</Text>

      <Text style={styles.descricao}>
        O Senhor dos Anéis acompanha a jornada do hobbit Frodo Bolseiro para
        destruir o Um Anel e impedir que o sombrio Sauron domine a Terra-média.
        Com uma história épica, personagens inesquecíveis e efeitos
        impressionantes, a trilogia tornou-se uma das mais premiadas da história
        do cinema, com 17 Oscars, incluindo 11 para O Retorno do Rei.
      </Text>

      <View style={styles.info}>
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
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  descricao: {
    color: '#fff',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },

  info: {
    gap: 10,
  },

  texto: {
    color: '#fff',
  },

  negrito: {
    color: '#fff',
    fontWeight: 'bold',
  },
});