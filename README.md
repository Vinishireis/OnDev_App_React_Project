# OnDev React Native Project

Bem-vindo ao projeto React Native da OnDev! Este projeto foi criado para demonstrar as capacidades de desenvolvimento de Web Design, Desenvolvimento Mobile e Design Gráfico.

## Visão Geral

Este aplicativo foi desenvolvido com o objetivo de fornecer serviços fictícios nas áreas de Web Design, Desenvolvimento Mobile e Design Gráfico. Ele inclui várias funcionalidades, como a exibição de serviços em uma lista, a criação de uma barra de menu e a integração de cores específicas para o tema.


![Telas_Ondev](https://github.com/Vinishireis/OnDev_App_React_Project/assets/95651095/38baafb1-6b0d-4923-9477-28aab2b12d5f)


## Funcionalidades

- **Web Design**: Tela com descrição e ícones relacionados a serviços de Web Design.
- **Desenvolvimento Mobile**: Tela com descrição e ícones relacionados a serviços de Desenvolvimento Mobile.
- **Design Gráfico**: Tela com descrição e ícones relacionados a serviços de Design Gráfico.
- **Lista de Serviços**: Busca e exibição de serviços fictícios.
- **Barra de Menu**: Navegação fácil entre as diferentes seções do aplicativo.
- **Tema de Cores**: Integração das cores "#007bff" (azul) e "#800080" (roxo) no design do aplicativo.

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
    ```sh
    https://github.com/Vinishireis/OnDev_App_React_Project.git
    cd OnDev_App
    ```

2. **Instale as dependências:**
    ```sh
    npm install
    ou
    yarn install
    ```

3. **Execute o aplicativo:**
    ```sh
    cd OnDev_App

    ls

    npx expo start
    ```

 4. **Execute o banco de dados Server.js:**
    ```sh
    cd OnDev_App

    node server.js
    ```


 5. **Faça alterações na url para funcionar o seu banco de dados com o aplicativo**
    ```sh
    **await axios.post('http://172.20.10.10:3000/login'**, onde estiver com essa url troque pela sua conexão IPV4 do Computador await axios.post('http://_____________:3000/login')
    **await axios.post('http://172.20.10.10:3000/signup'**, aqui também em signup faça a mesma coisa sempre deixe o final :3000/ o local que está chamando.
## Estrutura do Projeto

  - **/app**
  - **/database**: Banco de Dados usado para o aplicativo.
  - **/assets**: Recursos estáticos como imagens e ícones.
  - **/styles**: Arquivos de estilos para o aplicativo.

## Cores do Tema

O projeto utiliza as seguintes cores como parte do tema:

- **Azul**: `#007bff`
- **Roxo**: `#800080`

Estas cores são aplicadas ao fundo e a outros elementos da UI para manter uma identidade visual consistente.

## Contribuição

Se você deseja contribuir para este projeto, por favor, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua funcionalidade ou correção (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça o push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.


#### Como Encontrar seu Endereço IPv4

### No Windows

1. **Abra o Prompt de Comando:**
   - Pressione `Win + R` para abrir a janela "Executar".
   - Digite `cmd` e pressione `Enter`.

2. **Digite o comando para encontrar o endereço IPv4:**
   - No Prompt de Comando, digite `ipconfig` e pressione `Enter`.

3. **Localize o seu endereço IPv4:**
   - Procure pela seção "Adaptador de Rede sem Fio" ou "Adaptador Ethernet" dependendo do tipo de conexão que você está usando.
   - O endereço IPv4 será listado como "Endereço IPv4" ou "IPv4 Address".

### No macOS

1. **Abra o Terminal:**
   - Pressione `Command + Space` para abrir o Spotlight Search.
   - Digite `Terminal` e pressione `Enter`.

2. **Digite o comando para encontrar o endereço IPv4:**
   - No Terminal, digite `ifconfig | grep inet` e pressione `Enter`.

3. **Localize o seu endereço IPv4:**
   - Procure a linha que contém `inet` seguida do seu endereço IPv4 (geralmente algo como `192.168.x.x` ou `10.0.x.x`).

### No Linux

1. **Abra o Terminal:**
   - A maneira de abrir o Terminal pode variar dependendo da distribuição do Linux, mas geralmente você pode encontrar o Terminal no menu de aplicativos.

2. **Digite o comando para encontrar o endereço IPv4:**
   - No Terminal, digite `ip addr show` ou `ifconfig` e pressione `Enter`.

3. **Localize o seu endereço IPv4:**
   - Procure pela interface de rede que você está usando (como `eth0` para Ethernet ou `wlan0` para Wi-Fi).
   - O endereço IPv4 estará listado após `inet` (por exemplo, `inet 192.168.x.x`).


## Contato

Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato:

- **Empresa**: OnDev
- **Email**: ondev.org@gmail.com

Obrigado por utilizar o projeto React Native da OnDev!
