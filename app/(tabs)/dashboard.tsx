
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Modal, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native";
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00cc8d" }}>

      <><View style={styles.box}>
        <Image source={require("@/assets/images/logo-pjf-mg-wb.png")} style={styles.logo} />
      </View>

        <View style={styles.container}>

          <Text style={styles.title}>Olá, Servidor!</Text>

          <View style={styles.container}>

            <View style={styles.buttonContainer}>

              <TouchableOpacity style={styles.button}>
                <Icon name="people" size={30} color="#fff" />  {/* Ícone para Família */}
                <Link href="/cadastroFamilias" style={styles.buttonText}><Text>Famílias</Text></Link>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Icon name="person" size={30} color="#fff" />  {/* Ícone para Pessoa */}
                <Text style={styles.buttonText}>Doadores</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Icon name="book" size={30} color="#fff" />  {/* Ícone para Pacote */}
                <Text style={styles.buttonText}>Relatórios</Text>
              </TouchableOpacity>

            </View>

            <Text style={styles.title2}>Campanhas ativas no momento:</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
              <View style={styles.carouselItem}>
                <Image
                  source={require("@/assets/images/doacao-alimentos.png")}
                  style={styles.image}
                />
                <View style={styles.overlay}>
                  <Text style={styles.campaignName}>Campanha 1</Text>
                  <Text style={styles.campaignDate}>01/03/2025</Text>
                </View>
              </View>

              <View style={styles.carouselItem}>
                <Image
                  source={require("@/assets/images/doacao-alimentos.png")}
                  style={styles.image}
                />
                <View style={styles.overlay}>
                  <Text style={styles.campaignName}>Campanha 2</Text>
                  <Text style={styles.campaignDate}>15/03/2025</Text>
                </View>
              </View>

              <View style={styles.carouselItem}>
                <Image
                  source={require("@/assets/images/doacao-alimentos.png")}
                  style={styles.image}
                />
                <View style={styles.overlay}>
                  <Text style={styles.campaignName}>Mais campanhas</Text>
                  <Text style={styles.campaignDate}>Clique aqui</Text>
                </View>
              </View>
            </ScrollView>

            <TouchableOpacity style={styles.floatingButton} onPress={toggleModal}>
              <Text style={styles.buttonText2}>+</Text>
            </TouchableOpacity>

            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={toggleModal}
            >
              <TouchableWithoutFeedback onPress={toggleModal}>
                <View style={styles.overlay2}>
                  <View style={styles.modalContent}>
                    <Link href={"/cadastroFamilias"} style={styles.modalText}><Text style={styles.modalText}>Nova Família</Text></Link>
                    <Link href={"/cadastroCampanhas"} style={styles.modalText}><Text style={styles.modalText}>Nova Campanha</Text></Link>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>

          </View>

        </View></>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderTopLeftRadius: 50,
    marginBottom: 10,
  },
  box: {
    flex: 0.4,
    backgroundColor: "#00cc8d",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 340,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 20,
    color: "#333",
  },
  title2: {
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 0,
    marginTop: 30,
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 45,
  },
  forgotPassword: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00cc8d',
    width: 100,
    height: 120,
    borderRadius: 8,
    padding: 10,
    elevation: 2, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  buttonText: {
    marginTop: 8,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  carousel: {
    flexDirection: 'row',
    elevation: 2, // Sombra Android
    shadowColor: '#000', // Sombra iOS
  },
  carouselItem: {
    width: 330,
    height: 180,
    marginRight: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    elevation: 2, // Sombra Android
    shadowColor: '#000', // Sombra iOS
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  campaignName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  campaignDate: {
    color: '#fff',
    fontSize: 14,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 5,
    right: 20,
    backgroundColor: '#00cc8d',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText2: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  overlay2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    width: Dimensions.get('window').width - 40,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    padding: 10,
  },
});

