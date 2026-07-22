import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justify: 'center',
    padding: 20,
    paddingTop: 100,
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

export default styles;