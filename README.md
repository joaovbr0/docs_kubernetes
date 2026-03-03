# Kubernetes Production Docs

Documentação de implementação Kubernetes para ambiente de produção, cobrindo Docker, workloads, rede, escalabilidade, segurança e storage.

Construído com [Docusaurus](https://docusaurus.io/) e publicado via GitHub Pages.

🌐 **[joaovbr0.github.io/docs_kubernetes](https://joaovbr0.github.io/docs_kubernetes/)**

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18

---

## Desenvolvimento local

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run start
```

O site abre automaticamente em `http://localhost:3000`. As alterações nos arquivos MDX são refletidas em tempo real.

---

## Build de produção

```bash
npm run build
```

O output é gerado na pasta `build/`. Para testar localmente antes do deploy:

```bash
npm run serve
```

---

## Deploy (GitHub Pages)

O deploy é feito automaticamente via GitHub Actions ao fazer push na branch `main`.

Para publicar manualmente:

```bash
npm run deploy
```

> Certifique-se de que o GitHub Pages está configurado para servir a branch `gh-pages` em **Settings → Pages**.

---

## Estrutura do projeto

```text
docs/                  # Conteúdo em MDX
├── introducao.mdx
├── docker/
│   ├── build.mdx
│   ├── push-gitlab.mdx
│   └── push-local-registry.mdx
└── kubernetes/
    ├── namespace.mdx
    ├── pods.mdx
    ├── deployment.mdx
    └── ...
src/
├── components/        # Componentes reutilizáveis (Steps, Card, Accordion...)
├── theme/             # Sobrescrita global de componentes MDX
└── css/custom.css     # Estilos globais
static/img/            # Imagens estáticas
.github/workflows/     # CI/CD — deploy automático
docusaurus.config.js   # Configuração principal
sidebars.js            # Estrutura da navegação lateral
```

---

## Adicionando conteúdo

1. Crie um arquivo `.mdx` dentro de `docs/` na pasta correspondente
2. Adicione o frontmatter obrigatório:

```mdx
---
title: "Título da Página"
description: "Descrição breve"
---
```

1. Registre o arquivo em [sidebars.js](sidebars.js)

### Componentes disponíveis

Os componentes abaixo estão disponíveis globalmente em qualquer arquivo MDX, sem necessidade de import:

| Componente | Descrição |
| --- | --- |
| `<Steps>` / `<Step title="">` | Passo a passo numerado |
| `<CardGroup cols={2}>` / `<Card title="" href="">` | Grade de cards |
| `<AccordionGroup>` / `<Accordion title="">` | Seções expansíveis |
| `<Tip>` | Destaque em verde (dica) |
| `<Note>` | Destaque em azul (observação) |
| `<Warning>` | Destaque em laranja (atenção) |
