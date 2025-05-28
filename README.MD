# 🧰 Projeto Gerador de QR Code e Senhas com Node.js

Este é um projeto de utilitário de linha de comando desenvolvido em **Node.js**, com foco em **e-commerces** que desejam gerar rapidamente **QR Codes** para links de produtos e **senhas seguras**. Ele pode ser executado diretamente no terminal, sem a necessidade de interface gráfica.

## 📌 Funcionalidades

- 🔗 Geração de QR Codes a partir de qualquer link.
- 🖥️ Visualização do QR Code diretamente no terminal ou como imagem normal.
- 🔐 Geração de senhas seguras com configurações customizáveis:
  - Letras maiúsculas
  - Letras minúsculas
  - Números
  - Caracteres especiais
  - Comprimento personalizável via `.env`

## 📁 Estrutura de Pastas

```
projeto-qrcode/
├── node_modules/
├── src/
│   ├── prompts-schema/
│   │   ├── prompt-schema-main.js
│   │   └── prompt-schema-qrcode.js
│   ├── services/
│   │   ├── password/
│   │   │   └── utils/
│   │   │       ├── permitted-characters.js
│   │   │       ├── create.js
│   │   │       └── handle.js
│   │   └── qr-code/
│   │       ├── creat.js
│   │       ├── handle.js
│   │       └── index.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
```
## 📦 Dependências

- [`chalk`](https://www.npmjs.com/package/chalk) – Cores e estilos no terminal
- [`prompt`](https://www.npmjs.com/package/prompt) – Interação via prompt
- [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal) – QR Code no terminal

---

## 👤 Autor

Projeto desenvolvido por **[Geovane Girard](https://www.linkedin.com/in/geovane-girard/)**

