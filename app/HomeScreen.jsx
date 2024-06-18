import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';

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

  return (
    <View style={styles.container}>
      {/* Conteúdo da tela */}
      <View style={styles.carouselContainer}>
        <AppCarousel />
      </View>

      {/* Texto e ícones abaixo do carrossel */}
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesTitleText}>Nossos serviços recomendados:</Text>

        {/* Ícones */}
        <View style={styles.iconsServices}>
          <TouchableOpacity style={styles.iconItem}>
            <Ionicons name="globe" size={24} color="black" />
            <Text style={styles.iconText}>WEB</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <Ionicons name="phone-portrait" size={24} color="black" />
            <Text style={styles.iconText}>MOBILE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <Ionicons name="brush" size={24} color="black" />
            <Text style={styles.iconText}>DESIGN</Text>
          </TouchableOpacity>
        </View>
      </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  carouselContainer: {
    flex: 1,
  },
  servicesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  servicesTitleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  iconsServices: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: -2,
  },
  iconItem: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 12,
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    margin: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    padding: 5,
  },
  carouselTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  carouselSubtitleText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default HomeScreen;
