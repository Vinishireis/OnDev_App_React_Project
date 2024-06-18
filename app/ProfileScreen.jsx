import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const route = useRoute();
  const { nome, sobrenome, email, userType } = route.params || {};
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedInfo, setEditedInfo] = useState({
    nome: nome || 'Nome do Usuário',
    email: email || 'Email do Usuário',
    type: userType || 'Tipo do Usuário',
  });

  useEffect(() => {
    console.log('nome:', nome);
    console.log('Sobrenome:', sobrenome);
    console.log('Email:', email);
    console.log('Tipo de Usuário:', userType);
  }, [nome, sobrenome, email, userType]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSave = () => {
    console.log('Informações Editadas:', editedInfo);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={require('../assets/images/Vini_Profile.jpg')} style={styles.profileImage} />
        <Text style={styles.profileText}>{editedInfo.nome}</Text>
        <Text style={styles.profileText}>{editedInfo.email}</Text>
      </View>

      <View style={styles.profileContent}>
        <Text style={styles.sectionTitle}>Informações Pessoais</Text>
        <Text style={styles.infoText}>Nome: {editedInfo.nome}</Text>
        <Text style={styles.infoText}>Email: {editedInfo.email}</Text>
        <Text style={styles.infoText}>Tipo de Usuário: {editedInfo.type}</Text>

        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Informações</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do Usuário"
              value={editedInfo.nome}
              onChangeText={(text) => setEditedInfo({ ...editedInfo, nome: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email do Usuário"
              value={editedInfo.email}
              onChangeText={(text) => setEditedInfo({ ...editedInfo, email: text })}
            />
            <Picker
              style={styles.input}
              selectedValue={editedInfo.type}
              onValueChange={(itemValue, itemIndex) => setEditedInfo({ ...editedInfo, type: itemValue })}
            >
              <Picker.Item label="Usuário" value="Usuário" />
              <Picker.Item label="Desenvolvedor" value="Desenvolvedor" />
            </Picker>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileText: {
    fontSize: 18,
    marginBottom: 5,
  },
  profileContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '80%',
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333', // Cor do texto no modal
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9', // Cor do campo de entrada
    color: '#333', // Cor do texto no campo de entrada
    width: '100%', // Ajuste de largura
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    width: '100%', // Para ocupar toda a largura da tela
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default ProfileScreen;