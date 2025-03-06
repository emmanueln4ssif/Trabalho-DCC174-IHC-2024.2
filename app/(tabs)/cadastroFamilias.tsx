
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image, Modal, KeyboardAvoidingView, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native";
import { Link, router } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import * as Progres from 'react-native-progress';


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function cadastroFamilias() {

  const navigation = useNavigation(); 

  const handleBack = () => {
    navigation.goBack(); 
  };

  function setNumMoradores(itemValue: string): void {
    throw new Error("Function not implemented.");
  }

  function setTipoResidencia(itemValue: string): void {
    throw new Error("Function not implemented.");
  }

  const [modalVisible, setModalVisible] = useState(false);

  const handleEnviar = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      router.push("/dashboard")
    }, 2000); 
  };


  const [step, setStep] = useState(1);

  return (

    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#00cc8d" }}
    >

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >

        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >

          <><View style={styles.box}>
            <Image source={require("@/assets/images/logo-pjf-mg-wb.png")} style={styles.logo} /></View>

            <View style={styles.container}>

              <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                  <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <Text style={styles.title}>Cadastrar Nova Família</Text>

              </View>


              <View style={styles.container}>

                {step === 1 && (
                  <View>
                    <Text style={styles.sectionTitle}>Dados do Responsável</Text>

                    <Text style={styles.label}>Nome Completo*</Text>
                    <View style={styles.inputContainer}>
                      <Icon name="person" size={24} color="gray" style={styles.icon} />
                      <View style={styles.inputWrapper}>
                        <TextInput style={styles.input} placeholder="Ex: João Silva" keyboardType="default" />
                      </View>
                    </View>

                    <Text style={styles.label}>CPF*</Text>
                    <View style={styles.inputContainer}>
                      <Icon name="card" size={24} color="gray" style={styles.icon} />
                      <View style={styles.inputWrapper}>

                        <TextInput style={styles.input} placeholder="Ex: 123.456.789-00" keyboardType="numeric" />
                      </View>
                    </View>

                    <Text style={styles.label}>NIS*</Text>
                    <View style={styles.inputContainer}>
                      <Icon name="card" size={24} color="gray" style={styles.icon} />
                      <View style={styles.inputWrapper}>
                        <TextInput style={styles.input} placeholder="Ex: 12345678900" keyboardType="numeric" />
                      </View>
                    </View>

                    <Progres.Bar progress={0.5} width={null} color="green" marginTop={25} />

                    <TouchableOpacity style={styles.button} onPress={() => setStep(2)}>
                      <Link href="/dashboard" style={styles.buttonText}><Text>Próximo</Text></Link>
                    </TouchableOpacity>

                  </View>

                )};
                
                {step === 2 && (
                  <View>

                    <Text style={styles.sectionTitle}>Endereço da Família</Text>

                    <Text style={styles.label}>CEP*</Text>
                    <View style={styles.row}>
                      <View style={[styles.inputContainer, styles.halfWidth]}>
                        <Icon name="map" size={24} color="gray" style={styles.icon} />
                        <View style={styles.inputWrapper}>
                          <TextInput style={styles.input} placeholder="Ex: 12345-678" keyboardType="numeric" />
                        </View>
                      </View>

                      <View style={[styles.inputContainer, styles.halfWidth]}>
                        <Icon name="home" size={24} color="gray" style={styles.icon} />
                        <View style={styles.inputWrapper}>
                          <Picker
                            selectedValue={"tipoResidencia"}
                            placeholder="Tipo"
                            style={styles.picker}
                          // onValueChange={(itemValue) => setTipoResidencia(itemValue)} nao funciona
                          >
                            <Picker.Item label="Casa" value="casa" />
                            <Picker.Item label="Apartamento" value="apartamento" />
                            <Picker.Item label="Outro" value="outro" />
                          </Picker>
                        </View>
                      </View>
                    </View>

                    <Text style={styles.label}>Logradouro*</Text>
                    <View style={styles.inputContainer}>
                      <Icon name="location" size={24} color="gray" style={styles.icon} />
                      <View style={styles.inputWrapper}>
                        <TextInput style={styles.input} placeholder="Ex: Rua das Flores" keyboardType="default" />
                      </View>
                    </View>

                    <Text style={styles.label}>Bairro*                                                    Número*</Text>
                    <View style={styles.row}>
                      <View style={[styles.inputContainer, styles.halfWidth]}>
                        <Icon name="business" size={24} color="gray" style={styles.icon} />
                        <View style={styles.inputWrapper}>
                          <TextInput style={styles.input} placeholder="Ex: Centro" keyboardType="default" />
                        </View>
                      </View>

                      <View style={[styles.inputContainer, styles.halfWidth]}>
                        <Icon name="pin" size={24} color="gray" style={styles.icon} />
                        <View style={styles.inputWrapper}>
                          <TextInput style={styles.input} placeholder="Ex: 123" keyboardType="numeric" />
                        </View>
                      </View>
                    </View>

                    <Text style={styles.label}>Complemento*                                    Nº moradores*</Text>
                    <View style={styles.row}>
                      <View style={[styles.inputContainer, styles.halfWidth]}>
                        <Icon name="home" size={24} color="gray" style={styles.icon} />
                        <View style={styles.inputWrapper}>
                          <TextInput style={styles.input} placeholder="Ex: Bloco A" keyboardType="default" />
                        </View>
                      </View>

                      <View style={[styles.inputContainer, styles.halfWidth]}>
                        <Icon name="people" size={24} color="gray" style={styles.icon} />
                        <View style={styles.inputWrapper}>
                          <Picker
                            selectedValue={"numMoradores"}
                            style={styles.picker}
                            //onValueChange={(itemValue) => setNumMoradores(itemValue)} nao precisa sem back
                          >
                            {Array.from({ length: 11 }, (_, i) => (
                              <Picker.Item key={i} label={i === 10 ? "10+" : `${i + 1}`} value={i + 1} />
                            ))}
                          </Picker>
                        </View>
                      </View>
                    </View>

                    <Progres.Bar progress={1} width={null} color="green" marginTop={2} />

                    <TouchableOpacity style={styles.buttonSubmit} onPress={handleEnviar}>
                      <Link href="/dashboard" style={styles.buttonText}>Enviar</Link>
                    </TouchableOpacity>

                    <Modal
                      visible={modalVisible}
                      transparent={true}
                      animationType="fade"
                      onRequestClose={() => setModalVisible(false)}
                    >
                      <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                          <Text style={styles.modalText}>✅ Enviado com sucesso! {"\n\n"} Aguarde ser redirecionado...</Text>
                        </View>
                      </View>
                    </Modal>

                    <TouchableOpacity style={styles.buttonBack} onPress={() => setStep(1)}>
                      <Link href="/dashboard" style={styles.buttonText}>Voltar</Link>
                    </TouchableOpacity>

                  </View>

                )};

              </View>
            </View></>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderTopLeftRadius: 50,
    marginBottom: 5,
  },
  box: {
    flex: 0.2,
    marginTop: screenHeight * 0.02,
    backgroundColor: "#00cc8d",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: screenWidth * 0.5,
        height: screenWidth * 0.11,
        backgroundColor: "#fff",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: screenWidth * 0.05,
        marginBottom: screenWidth * 0.05,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 20,
    color: "#333",
    textAlign: "center",
  },
  title2: {
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 0,
    marginTop: 20,
    color: "#333",
  },
  subtitle: {
    fontSize: 10,
    color: "#666",
    textAlign: "center",
    marginBottom: 45,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  inputWrapper: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 8,
  },
  input: {
    height: 40,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  picker: {
    width: '100%',
    color: 'gray',
  },
  button: {
    width: "100%",
    padding: 12,
    backgroundColor: "#00cc8d",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 18,
  },
  buttonSubmit: {
    width: "100%",
    padding: 12,
    backgroundColor: "#00cc8d",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 18,
  },
  buttonBack: {
    width: "100%",
    padding: 12,
    backgroundColor: "grey",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

