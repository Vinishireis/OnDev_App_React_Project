import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AppCarousel = () => {
  const [pagingEnabled, setPagingEnabled] = useState(true);
  const width = Dimensions.get('window').width;

  const list = [
    { id: 1, title: 'Design Gráfico', subtitle: 'Gráficos criativos', image: require('../assets/images/image1.jpg') },
    { id: 2, title: 'Desenvolvimento Web', subtitle: 'Web moderno', image: require('../assets/images/image2.jpg') },
    { id: 3, title: 'Desenvolvimento de Apps', subtitle: 'Apps profissionais', image: require('../assets/images/image3.jpg') },
    { id: 4, title: 'Desenvolvimento de Sites', subtitle: 'Sites responsivos', image: require('../assets/images/image4.jpg') },
    { id: 5, title: 'Design de Apps', subtitle: 'Design inovador', image: require('../assets/images/image3.jpg') },
    { id: 6, title: 'Design de Websites', subtitle: 'Websites elegantes', image: require('../assets/images/image2.jpg') }
  ];

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        width={width}
        height={width / 2}
        data={list}
        autoPlay={true}
        pagingEnabled={pagingEnabled}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image style={styles.img} source={item.image} />
            <View style={styles.textContainer}>
              <Text style={styles.carouselTitleText}>{item.title}</Text>
              <Text style={styles.carouselSubtitleText}>{item.subtitle}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Lógica de busca aqui
    console.log('Pesquisando por:', searchText);
  };

  return (
    <View style={styles.container}>
      {/* Parte do header */}
      <View style={styles.header}>
        <Text style={styles.title}>Nossos Serviços Recomendados</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar serviços"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Ionicons name="search" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Parte do carrossel */}
      <AppCarousel />

      {/* Parte das categorias */}
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryItem}onPress={()=> navigation.navigate('WebDesign')}>
          <Ionicons name="desktop" size={24} color="#2c3e50" />
          <Text style={styles.categoryText}>Web Design</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}onPress={()=> navigation.navigate('MobileDevelopment')}>
          <Ionicons name="phone-portrait" size={24} color="#2c3e50" />
          <Text style={styles.categoryText}>Desenvolvimento Mobile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}onPress={()=> navigation.navigate('GraphicDesign')}>
          <Ionicons name="brush" size={24} color="#2c3e50" />
          <Text style={styles.categoryText}>Design Gráfico</Text>
        </TouchableOpacity>
        {/* Adicione mais categorias conforme necessário */}
      </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
  },
  header: {
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    width: '90%',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  searchButton: {
    padding: 8,
    backgroundColor: '#2c3e50',
    borderRadius: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    marginVertical: 10,
    marginBottom: 430,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
  },
  carouselItem: {
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 10,
    elevation: 5,
    width: '90%',
    zIndex: 1,
  },
  img: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
  carouselTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  carouselSubtitleText: {
    fontSize: 12,
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

export default HomeScreen;
