import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Linking } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    //Calcula a data de vencimento do boleto, com base nos dígitos correspondentes do código de barras
    codigoVencimento = data.slice(34, 37);
    date = new Date("1997-10-07");
    dataVencimento = new Date(
      date.getTime() + codigoVencimento * 24 * 60 * 60 * 1000
    );

    //Verifica o valor do boleto, com base nos dígitos correspondentes do código de barras
    valor = data.slice(38, 44) / 100;

    alert(
      `Código de barras: ${data} \nValor: ${valor} \nData de vencimento: ${dataVencimento}`
    );
  };

  const verificaVencimento = () => {
    let dataAtual = new Date();
    if (dataVencimento < dataAtual) {
      return alert("Boleto vencido");
    } else {
      return alert("Boleto pago com sucesso");
    }
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.barcodebox}
      />

      {scanned && (
        <Button
          title="Pressione para escanear novamente"
          onPress={() => setScanned(false)}
        />
      )}
      <Button
        title="Verificar data de vencimento"
        onPress={() => verificaVencimento()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 500,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
  },
});
