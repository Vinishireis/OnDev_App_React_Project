import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GraphicDesignScreen = ({ navigation }) => {
  const [services, setServices] = useState([
    'Logotipos',
    'Design de Embalagens',
    'Identidade Visual',
    'Ilustrações',
    'UI/UX Design',
    'Design de Impressão',
    'Design de Websites',
    'Animações',
    'Branding',
    'Marketing Visual',
    'Tipografia',
    'Arte Digital',
    'Editorial Design',
    'Motion Graphics',
    'Design 3D',
    'Design Gráfico para Redes Sociais',
  ]);

  const renderServices = () => {
    return services.map((service, index) => (
      <TouchableOpacity key={index} style={{ padding: 16 }}>
        <Text>{service}</Text>
      </TouchableOpacity>
    ));
  };

  const handleLoadMore = () => {
    // Adicione mais serviços à lista
    const moreServices = ['Design de Logotipo', 'Design de Cartão de Visita', 'Design de Banner'];
    setServices([...services, ...moreServices]);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>
        Serviços de Design Gráfico
      </Text>
      <ScrollView>
        {renderServices()}
        <TouchableOpacity onPress={handleLoadMore} style={{ padding: 16, alignItems: 'center' }}>
          <Text style={{ color: 'blue' }}>Carregar Mais</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* Menu bar */}
      <View style={styles.menuBar}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="white" />
          <Text style={styles.menuText}>Casa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Services')}>
          <Ionicons name="apps" size={24} color="white" />
          <Text style={styles.menuText}>Serviços</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings" size={24} color="white" />
          <Text style={styles.menuText}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={24} color="white" />
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  menuItem: {
    alignItems: 'center',
    flex: 1,
  },
  menuText: {
    color: '#fff',
    fontSize: 12,
  },
};

export default GraphicDesignScreen;
