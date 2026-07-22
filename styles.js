import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333333', 
    elevation: 5, 
  },
  titulo: {
    color: '#f5c518', 
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  descricao: {
    color: '#e0e0e0', 
    fontStyle: 'italic',
    textAlign: 'justify', 
    marginBottom: 20,
    lineHeight: 22, 
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