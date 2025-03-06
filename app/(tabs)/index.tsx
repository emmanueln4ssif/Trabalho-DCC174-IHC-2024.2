
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native";
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

  const [passwordVisible, setPasswordVisible] = useState(false);

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
            <Image source={require("@/assets/images/logo-pjf-mg-wb.png")} style={styles.logo} />

          </View><View style={styles.container}>

              <Text style={styles.title}>Bem-vindo ao Sistema de Doações da Prefeitura de Juiz de Fora!</Text>
              <Text style={styles.subtitle}>Acesse sua conta para gerenciar doações.</Text>

              <TextInput
                style={styles.input}
                placeholder="Nº de CNPJ ou CPF"
                placeholderTextColor="#888"
                keyboardType="email-address" />

              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Senha"
                  placeholderTextColor="#888"
                  secureTextEntry={!passwordVisible}
                />

                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
                  <Icon name={passwordVisible ? "eye" : "eye-off"} size={20} color="#888" />
                </TouchableOpacity>

              </View>

              <TouchableOpacity onPress={() => console.log("Recuperar senha")} style={styles.forgotPassword}>
                <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Link href="/dashboard" style={styles.buttonText}>Entrar</Link>
              </TouchableOpacity>

            </View></>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
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
    color: "#333",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    paddingRight: 10,
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  button: {
    width: "100%",
    padding: 12,
    backgroundColor: "#00cc8d",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 18,
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
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

