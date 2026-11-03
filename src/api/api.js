const API_TOKEN = process.env.EXPO_PUBLIC_THE_ONE_API_TOKEN || 'a-004FGT8dpQFxyE7E_X';

const charDataMap = {
  'Frodo Baggins': { name: 'Frodo Baggins', race: 'Hobbit', realm: 'O Condado', image: require('../../assets/frodo.jpg') },
  'Gandalf': { name: 'Gandalf', race: 'Maia', realm: 'Valinor', image: require('../../assets/gandalf.jpg') },
  'Aragorn II Elessar': { name: 'Aragorn', race: 'Humano', realm: 'Gondor', image: require('../../assets/aragorn.jpg') },
  'Legolas': { name: 'Legolas', race: 'Elfo', realm: 'Reino da Floresta', image: require('../../assets/legolas.jpg') },
  'Gimli': { name: 'Gimli', race: 'Anão', realm: 'Erebor', image: require('../../assets/gimli.jpg') },
};

const fallbackCharacters = Object.entries(charDataMap).map(([name, data], index) => ({
  id: `fallback-${index}`,
  name: data.name,
  race: data.race,
  realm: data.realm,
  imagem: data.image,
}));

export const fetchCharacters = async () => {
  try {
    const names = 'Frodo Baggins,Gandalf,Aragorn II Elessar,Legolas,Gimli';
    const response = await fetch(`https://the-one-api.dev/v2/character?name=${encodeURIComponent(names)}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (!response.ok) {
      console.warn('API the-one-api falhou, usando dados locais:', response.status);
      return fallbackCharacters;
    }

    const data = await response.json();

    if (!data.docs || !Array.isArray(data.docs) || data.docs.length === 0) {
      return fallbackCharacters;
    }

    return data.docs.map((char) => {
      const mappedData = charDataMap[char.name] || {};
      return {
        id: char._id,
        name: mappedData.name || char.name,
        race: mappedData.race || char.race || 'Desconhecido',
        realm: mappedData.realm || char.realm || 'Desconhecido',
        imagem: mappedData.image || require('../../assets/adaptive-icon.png'),
      };
    });
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    return fallbackCharacters;
  }
};
