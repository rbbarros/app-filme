import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212', // Fundo escuro elegante (Dark Theme)
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
  },
  card: {
    backgroundColor: '#1e1e1e', // Card escuro para destacar do fundo
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333333', // Borda sutil e elegante
    elevation: 5, // Sombra no Android
  },
  titulo: {
    color: '#f5c518', // Cor dourada (estilo Cinema / O Senhor dos Anéis)
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  descricao: {
    color: '#e0e0e0', // Texto claro legível sobre o fundo escuro
    fontStyle: 'italic',
    textAlign: 'justify', // Texto alinhado e elegante
    marginBottom: 20,
    lineHeight: 22, // Espaçamento entre linhas para melhor leitura
  },
  infoContainer: {
    gap: 12,
    marginTop: 10,
  },
  texto: {
    color: '#cccccc',
    fontSize: 14,
    lineHeight: 20,
  },
  negrito: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default styles;