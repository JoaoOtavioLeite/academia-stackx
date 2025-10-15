# academia-stackx[README.md](https://github.com/user-attachments/files/22932191/README.md)
# Academia StackX

Projeto SPA simples em React criado para a "Academia StackX".

Este repositório fornece um esqueleto mínimo (sem Create React App) que segue os passos que você descreveu: dependências React, estrutura de arquivos, componentes, estilos, testes manuais e instruções de deploy.

## Como usar (Windows PowerShell)

1. Abra o PowerShell e navegue até a pasta do projeto:

```powershell
cd "C:\Users\Pichau\OneDrive\Desktop\academia stackx\academia-stackx"
```

2. Instale dependências:

```powershell
npm install
```

3. Rode em desenvolvimento (Parcel abrirá o navegador automaticamente):

```powershell
npm start
```

4. Para criar o build de produção:

```powershell
npm run build
```

5. Para servir o build localmente (opcional):

```powershell
npm run serve
```

## Estrutura principal

- `src/` - código fonte React
- `src/components` - componentes da SPA
- `src/data` - dados estáticos (lista de cursos)
- `src/index.html` - entrada HTML

## Sobre deploy

- Para deploy simples, faça push para GitHub e conecte seu repositório no Vercel (ou Netlify). O Vercel consegue identificar o build com o script de build. Para GitHub Pages, você pode mover os artefatos da pasta `build/`.

