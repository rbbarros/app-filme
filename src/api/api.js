import { Image } from 'react-native';

// Você precisa se cadastrar em https://the-one-api.dev/ para pegar o seu Token.
// Cole o seu token abaixo:
const API_TOKEN = 'a-004FGT8dpQFxyE7E_X'; 

const charDataMap = {
  'Frodo Baggins': { name: 'Frodo Baggins', race: 'Hobbit', realm: 'O Condado', image: require('../../assets/frodo.jpg') },
  'Gandalf': { name: 'Gandalf', race: 'Maia', realm: 'Valinor', image: require('../../assets/gandalf.jpg') },
  'Aragorn II Elessar': { name: 'Aragorn', race: 'Humano', realm: 'Gondor', image: require('../../assets/aragorn.jpg') },
  'Legolas': { name: 'Legolas', race: 'Elfo', realm: 'Reino da Floresta', image: require('../../assets/legolas.jpg') },
  'Gimli': { name: 'Gimli', race: 'Anão', realm: 'Erebor', image: require('../../assets/gimli.jpg') },
};

export const fetchCharacters = async () => {
  try {
    // Buscando apenas os personagens principais que temos fotos para ficar igual ao seu design original!
    const names = 'Frodo Baggins,Gandalf,Aragorn II Elessar,Legolas,Gimli';
    const response = await fetch(`https://the-one-api.dev/v2/character?name=${names}`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      }
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Acesso negado. Você inseriu o token da API no arquivo api.js?');
      }
      throw new Error('Falha ao buscar dados da API.');
    }

    const data = await response.json();
    
    // Mapeando a resposta para incluir a imagem local e as traduções em português
    return data.docs.map(char => {
      const mappedData = charDataMap[char.name] || {};
      return {
        id: char._id,
        name: mappedData.name || char.name,
        race: mappedData.race || char.race || 'Desconhecido',
        realm: mappedData.realm || char.realm || 'Desconhecido',
        imagem: mappedData.image || require('../../assets/adaptive-icon.png')
      };
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
