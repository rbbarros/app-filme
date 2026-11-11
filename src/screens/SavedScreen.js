import React, { useState, useEffect } from 'react';
import { View, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { Button, Card, Text } from 'react-native-paper';
import styles from '../styles/theme';

export default function SavedScreen() {
  const [salvos, setSalvos] = useState([]);
  const isFocused = useIsFocused(); 

  // Carrega os dados sempre que o usuário entra nesta aba
  useEffect(() => {
    if (isFocused) {
      AsyncStorage.getItem("@personagens_salvos").then((dados) => {
        if (dados) setSalvos(JSON.parse(dados));
      });
    }
  }, [isFocused]);

  async function removerPersonagem(id) {
    // Filtra a lista mantendo apenas os que são diferentes do ID clicado
    const novaLista = salvos.filter(item => item.id !== id);
    setSalvos(novaLista);
    
    // Atualiza o banco de dados
    await AsyncStorage.setItem(
      "@personagens_salvos", 
      JSON.stringify(novaLista)
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Personagens Salvos</Text>

      {salvos.length === 0 ? (
        <Text style={styles.centerMessage}>Nenhum personagem salvo ainda.</Text>
      ) : (
        <FlatList
          data={salvos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Image source={item.imagem} style={styles.imagem} />
                <View style={styles.infoContainer}>
                  <Text style={styles.nome}>{item.name}</Text>
                  <Text style={styles.descricao}>Raça: {item.race}</Text>
                  <Text style={styles.ator}>Reino: {item.realm}</Text>

                  <Button
                    mode="contained"
                    buttonColor="#DC2626"
                    style={styles.deleteButton}
                    onPress={() => removerPersonagem(item.id)}
                  >
                    Remover
                  </Button>
                </View>
              </Card.Content>
            </Card>
          )}
        />
      )}
    </View>
  );
}
