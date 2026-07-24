import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchCharacters } from '../api/api';
import styles from '../styles/theme';

export default function HomeScreen({ navigation }) {
  const [personagens, setPersonagens] = useState([]);
  const [salvos, setSalvos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carrega os personagens da API e a lista de salvos do Storage ao iniciar a tela
  useEffect(() => {
    fetchCharacters().then(dados => {
      setPersonagens(dados);
      setLoading(false);
    });
    
    AsyncStorage.getItem("@personagens_salvos").then((dados) => {
      if (dados) setSalvos(JSON.parse(dados));
    });
  }, []);

  async function salvarPersonagem(personagem) {
    const jaSalvo = salvos.find(p => p.id === personagem.id);
    
    if (jaSalvo) {
      Alert.alert("Aviso", "Este personagem já está salvo!");
      navigation.navigate('Saved');
      return;
    }
    
    const novaLista = salvos.concat(personagem);
    setSalvos(novaLista);
    
    await AsyncStorage.setItem("@personagens_salvos", JSON.stringify(novaLista));
    
    Alert.alert("Sucesso", `${personagem.name} salvo com sucesso!`, [
      { text: "OK", onPress: () => navigation.navigate('Saved') }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>API - Senhor dos Anéis</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#F59E0B" />
      ) : (
        <FlatList
          data={personagens}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.imagem} style={styles.imagem} />
              <View style={styles.infoContainer}>
                <Text style={styles.nome}>{item.name}</Text>
                <Text style={styles.descricao}>Raça: {item.race}</Text>
                <Text style={styles.ator}>Reino: {item.realm}</Text>
                
                <TouchableOpacity style={styles.saveButton} onPress={() => salvarPersonagem(item)}>
                  <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}
