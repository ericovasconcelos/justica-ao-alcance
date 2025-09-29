# 📚 GUIA: Como Publicar o Site no GitHub Pages

## Passo 1: Criar uma Conta no GitHub

1. Acesse [https://github.com](https://github.com)
2. Clique em "Sign up" (Cadastrar-se)
3. Crie sua conta gratuita

## Passo 2: Criar um Novo Repositório

1. Faça login no GitHub
2. Clique no botão "+" no canto superior direito
3. Selecione "New repository" (Novo repositório)
4. Configure o repositório:
   - **Nome**: `justica-ao-alcance` (ou outro nome de sua preferência)
   - **Descrição**: "Projeto de extensão sobre violência contra a mulher"
   - **Visibilidade**: Marque como **Público** (Public)
   - ✅ Marque "Add a README file"
   - Clique em "Create repository"

## Passo 3: Fazer Upload dos Arquivos

### Opção A: Via Interface Web (Mais Fácil)

1. No seu repositório, clique em "Add file" > "Upload files"
2. Arraste os seguintes arquivos para a área de upload:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md` (substitua o que foi criado automaticamente)
3. Adicione uma mensagem de commit: "Adicionar arquivos do site"
4. Clique em "Commit changes"

### Opção B: Via Git (Linha de Comando)

```bash
# 1. Abra o terminal na pasta do projeto
cd /home/claude/justica-ao-alcance

# 2. Inicialize o repositório Git
git init

# 3. Adicione todos os arquivos
git add .

# 4. Faça o commit inicial
git commit -m "Adicionar site Justiça ao Alcance"

# 5. Conecte ao repositório remoto (substitua SEU-USUARIO pelo seu nome de usuário do GitHub)
git remote add origin https://github.com/SEU-USUARIO/justica-ao-alcance.git

# 6. Configure a branch principal
git branch -M main

# 7. Envie os arquivos para o GitHub
git push -u origin main
```

## Passo 4: Ativar o GitHub Pages

1. No seu repositório, clique em "Settings" (Configurações)
2. No menu lateral esquerdo, clique em "Pages"
3. Em "Source", selecione:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Clique em "Save"
5. Aguarde alguns minutos (geralmente 1-5 minutos)

## Passo 5: Acessar o Site

Após alguns minutos, seu site estará disponível em:
```
https://SEU-USUARIO.github.io/justica-ao-alcance/
```

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub.

## Passo 6: Gerar o QR Code

### Opção A: Sites Geradores Online

1. Acesse um gerador de QR Code gratuito:
   - [QR Code Generator](https://www.qr-code-generator.com/)
   - [QRCode Monkey](https://www.qrcode-monkey.com/)
   - [QR Code Studio](https://qrcode.studio/)

2. Cole a URL do seu site: `https://SEU-USUARIO.github.io/justica-ao-alcance/`
3. Personalize o QR Code:
   - Adicione uma cor roxa (#8B4789) para combinar com o tema
   - Aumente o tamanho para impressão (pelo menos 300x300 pixels)
4. Baixe o QR Code em alta resolução (PNG ou SVG)

### Opção B: Usando Python (Avançado)

```python
import qrcode

# Substitua pela URL real do seu site
url = "https://SEU-USUARIO.github.io/justica-ao-alcance/"

# Criar QR Code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

# Gerar imagem
img = qr.make_image(fill_color="#8B4789", back_color="white")
img.save("qrcode_justica_ao_alcance.png")
```

## Passo 7: Criar o Material Impresso

Agora que você tem:
- ✅ Site publicado online
- ✅ QR Code gerado

A Bárbara pode criar o panfleto no Canva, Photoshop ou outro editor gráfico incluindo:
- O QR Code
- Informações principais (190, 180, 197)
- Título "Justiça ao Alcance"
- Texto: "Escaneie para mais informações"
- Visual com as cores do projeto (roxo/rosa)

## Dicas Importantes

### Para Atualizar o Site

Se precisar fazer alterações:
1. Edite os arquivos localmente
2. No GitHub, vá em "Add file" > "Upload files"
3. Arraste os arquivos atualizados (substituirá os antigos)
4. Ou use Git:
```bash
git add .
git commit -m "Atualizar conteúdo"
git push
```

### Verificar se está Online

Após ativar o GitHub Pages, você verá uma mensagem verde:
"Your site is live at https://SEU-USUARIO.github.io/justica-ao-alcance/"

### Domínio Personalizado (Opcional)

Se quiser um domínio personalizado (ex: justicaaoalcance.com.br):
1. Compre o domínio
2. Em "Settings" > "Pages", adicione o domínio customizado
3. Configure o DNS do domínio

## Solução de Problemas

### Site não está carregando?
- Aguarde até 10 minutos após ativar o GitHub Pages
- Verifique se o arquivo se chama exatamente `index.html` (minúsculas)
- Limpe o cache do navegador (Ctrl + Shift + Del)

### QR Code não funciona?
- Teste escaneando com seu celular
- Verifique se a URL está correta (sem erros de digitação)
- Gere um novo QR Code se necessário

### Precisa de ajuda?
- Documentação oficial: [https://docs.github.com/pt/pages](https://docs.github.com/pt/pages)
- Entre em contato com o grupo do projeto

## Próximos Passos

1. ✅ Publicar site no GitHub
2. ✅ Gerar QR Code
3. 📱 Testar o acesso via celular
4. 🎨 Bárbara criar o design do panfleto
5. 🖨️ Imprimir material para o evento (04/10/2025)
6. 📢 Divulgar o projeto

---

**Boa sorte com o projeto!** 🌹

Se tiver dúvidas, consulte este guia ou peça ajuda aos colegas do grupo.
