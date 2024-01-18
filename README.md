# react-native-barcode-reader
Tarefa-desafio: Leitor de código de barras feito com React Native

Boleto Reader App
Este projeto é um aplicativo React Native desenvolvido com Expo que permite a leitura de boletos bancários utilizando a câmera do dispositivo. Ele apresenta as informações do boleto na forma de um Alert e oferece a funcionalidade de verificar a data de vencimento, exibindo alertas com base nas regras fornecidas.

Funcionalidades Principais

Leitura de Boleto:
Integração com a câmera do dispositivo para a leitura de boletos bancários.

Exibição de Dados:
Organização e apresentação clara das informações do boleto, incluindo valor e data de vencimento.

Botão de Ação:
Implementação de um botão que, ao ser pressionado, verifica a data de vencimento do boleto.

Regras de Alerta:
Alertas personalizados com base na data de vencimento do boleto:
Se a data de vencimento for menor que a data atual, exibe um alerta informando: "Boleto vencido".
Se a data de vencimento for maior que a data atual, exibe um alerta informando: "Boleto pago com sucesso".

Configuração e Execução
Certifique-se de ter o Expo CLI instalado. Em seguida, siga os passos abaixo:

Clone este repositório:

'''
git clone https://github.com/seu-usuario/BoletoReaderApp.git
'''

'''
cd BoletoReaderApp
'''

Instale as dependências:

'''
npm install
'''

Execute o aplicativo:

'''
expo start
'''

Escaneie o código QR gerado com o aplicativo Expo Go no seu dispositivo para visualizar o aplicativo.

Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar pull requests para melhorias.
