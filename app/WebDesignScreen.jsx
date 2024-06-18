import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WebDesignScreen = ({ navigation }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando uma requisição para obter os serviços
    setTimeout(() => {
      const fetchedServices = [
        { id: 1, name: 'Web Design Personalizado', description: 'Criação de designs únicos para sites.' },
        { id: 2, name: 'Otimização de SEO', description: 'Melhorando a visibilidade do seu site nos mecanismos de busca.' },
        { id: 3, name: 'Desenvolvimento Front-end', description: 'Criação da interface do usuário usando as últimas tecnologias.' },
        { id: 4, name: 'Design Responsivo', description: 'Garantindo que seu site seja acessível em todos os dispositivos.' },
        { id: 5, name: 'Manutenção de Websites', description: 'Atualizações regulares e correção de problemas.' },
        { id: 6, name: 'Consultoria em UX/UI', description: 'Avaliação e otimização da experiência do usuário.' },
        // Adicione mais serviços aqui
      ];
      setServices(fetchedServices);
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {services.map(service => (
          <View key={service.id} style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{service.name}</Text>
            <Text style={{ marginTop: 5 }}>{service.description}</Text>
          </View>
        ))}
        {/* Aqui você pode adicionar um componente para carregar mais serviços ao chegar ao final do scroll */}
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

export default WebDesignScreen;
