import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111320',
    width: '100%',
    padding: 20,
    paddingTop: 10,
  },
  titulo: {
    color: '#F59E0B',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#374151',
    marginBottom: 12,
    width: '100%',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  imagem: {
    width: 70,
    height: 90,
    borderRadius: 8,
    marginRight: 14,
    backgroundColor: '#374151',
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  descricao: {
    color: '#D1D5DB',
    fontSize: 14,
    marginTop: 4,
    fontStyle: 'italic',
  },
  ator: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 2,
  },
  saveButton: {
    marginTop: 8,
  },
  deleteButton: {
    marginTop: 8,
  },
  navButton: {
    marginBottom: 16,
  },
  centerMessage: {
    color: '#D1D5DB',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
  movieCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#374151',
    overflow: 'hidden',
    marginBottom: 20,
  },
  cover: {
    width: '100%',
    height: 200,
  },
  movieContent: {
    padding: 16,
  },
  texto: {
    color: '#D1D5DB',
    fontSize: 14,
    marginBottom: 6,
    lineHeight: 20,
  },
  negrito: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
});

export default styles;
