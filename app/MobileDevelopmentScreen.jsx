import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones do pacote de ícones

const MobileDevelopmentScreen = ({ navigation }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  // Simulando chamada de API para buscar serviços
  const fetchServices = useCallback(async () => {
    setLoading(true);
    // Supondo que os serviços sejam buscados de uma API
    const data = {
      services: [
        { id: 1, name: 'Desenvolvimento de Aplicativos Nativos', description: 'Desenvolvimento de aplicativos para iOS e Android utilizando tecnologias nativas.', iconName: 'logo-apple' },
        { id: 2, name: 'Desenvolvimento de Aplicativos Híbridos', description: 'Desenvolvimento de aplicativos multiplataforma utilizando frameworks como React Native.', iconName: 'logo-react' },
        { id: 3, name: 'UI/UX Design', description: 'Design de interfaces de usuário e experiência do usuário para aplicativos móveis.', iconName: 'logo-android' },
        { id: 4, name: 'Integração de APIs', description: 'Integração de APIs para conectar aplicativos móveis a serviços externos.', iconName: 'logo-react' },
        { id: 5, name: 'Manutenção e Suporte', description: 'Manutenção e suporte contínuo para aplicativos móveis existentes.', iconName: 'logo-android' },
        { id: 6, name: 'Consultoria em Desenvolvimento Mobile', description: 'Consultoria especializada em estratégias e tecnologias para desenvolvimento mobile.', iconName: 'logo-apple' },
      ],
    };
    setServices(data.services);
    setLoading(false);
  }, []);

  // Chamada inicial para buscar serviços
  useEffect(() => {
    fetchServices();
  }, []);

  // Função para carregar mais serviços ao rolar para o final da lista
  const handleLoadMore = () => {
    if (!loading) {
      fetchServices();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviços de Desenvolvimento Mobile</Text>
      <ScrollView
        style={styles.scrollView}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            handleLoadMore();
          }
        }}
        scrollEventThrottle={400}
      >
        {services.map((service) => (
          <View key={service.id} style={styles.serviceItem}>
            <Ionicons name={service.iconName} size={24} color="black" style={styles.icon} />
            <View style={styles.serviceText}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </View>
          </View>
        ))}
        {loading && <Text style={{ textAlign: 'center' }}>Carregando...</Text>}
      </ScrollView>
      {/* Parte do menu bar */}
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

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  serviceText: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 16,
  },
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
});

export default MobileDevelopmentScreen;
