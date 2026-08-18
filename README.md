# ClariVoz

> Tecnologia que transforma informação em autonomia.

O **ClariVoz** é um protótipo de tecnologia assistiva criado para facilitar o acesso à informação por pessoas com baixa alfabetização, dificuldades de leitura, idosos e usuários que preferem interações por voz.

🔗 **Demonstração:** [clarivoz-app.corujarh-3863.chatgpt.site](https://clarivoz-app.corujarh-3863.chatgpt.site)

## Problema

Informações essenciais ainda dependem de textos complexos: receitas médicas, comunicados, formulários, mensagens e orientações de serviços. Essa barreira pode reduzir a autonomia e aumentar a dependência de outras pessoas.

O ClariVoz explora uma experiência baseada em voz, linguagem simples e controles visuais acessíveis.

## Funcionalidades do protótipo

- Leitura da interface em voz alta;
- Envio de imagem para demonstração de leitura de documentos;
- Simplificação demonstrativa de textos complexos;
- Ditado por voz, quando suportado pelo navegador;
- Histórico de leituras e mensagens;
- Aumento do tamanho do texto;
- Modo de alto contraste;
- Navegação responsiva para celular e computador;
- Suporte a teclado e preferência por movimento reduzido.

> A leitura de imagens e a simplificação de textos são simuladas nesta versão. A integração com OCR e modelos de IA faz parte da próxima etapa.

## Tecnologias

- React 19
- TypeScript
- Next.js / Vinext
- CSS responsivo
- Web Speech API
- Cloudflare Workers

## Executar localmente

Requisitos: Node.js 22.13 ou superior.

```bash
git clone https://github.com/geovannasilva15/clarivoz.git
cd clarivoz
npm install
npm run dev
```

Abra o endereço informado no terminal.

## Estrutura principal

```text
app/
├── page.tsx       # Interface, navegação e interações
├── globals.css    # Identidade visual e responsividade
└── layout.tsx     # Metadados e configuração da página
```

## Próximas etapas

- Integrar OCR para extrair texto real de imagens;
- Conectar um modelo de IA para linguagem simples;
- Adicionar explicação de palavras por áudio;
- Permitir uso offline das funções essenciais;
- Realizar testes de usabilidade com o público-alvo;
- Implementar controles de privacidade e exclusão de dados.

## Princípios do produto

1. Autonomia antes de complexidade.
2. Voz como parte central da experiência.
3. Linguagem respeitosa e sem infantilização.
4. Privacidade compreensível e sob controle do usuário.
5. Acessibilidade desde o início do desenvolvimento.

## Autoria

Desenvolvido por **Geovanna Eduarda da Silva** como projeto de impacto social, acessibilidade e Inteligência Artificial aplicada.

## Licença

Este projeto está disponível sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE).
