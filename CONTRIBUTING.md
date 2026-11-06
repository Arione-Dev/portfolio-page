# Guia de contribuição

## Git Flow

| Branch | Função |
| --- | --- |
| `main` | Código estável, pronto para produção. Cada release recebe uma tag (`v1.0.0`). |
| `develop` | Integração das funcionalidades em andamento. |
| `feature/<nome>` | Nova funcionalidade. Sai de `develop` e volta para `develop`. |
| `fix/<nome>` | Correção de bug não urgente. Sai de `develop` e volta para `develop`. |
| `release/<versão>` | Preparação de uma versão. Sai de `develop` e é mergeada em `main` e `develop`. |
| `hotfix/<nome>` | Correção urgente em produção. Sai de `main` e é mergeada em `main` e `develop`. |

### Passo a passo

```bash
# nova funcionalidade
git checkout develop
git pull
git checkout -b feature/minha-feature
# ... commits ...
git push -u origin feature/minha-feature
# abrir Pull Request: feature/minha-feature -> develop

# release
git checkout -b release/1.1.0 develop
# ajustes finais, versão no package.json
git checkout main && git merge --no-ff release/1.1.0
git tag -a v1.1.0 -m "v1.1.0"
git checkout develop && git merge --no-ff release/1.1.0
```

Os merges de branches de funcionalidade usam `--no-ff` para preservar o histórico.

## Padrão de commits (Conventional Commits)

```
<tipo>(<escopo opcional>): <descrição no imperativo>
```

| Tipo | Uso |
| --- | --- |
| `feat` | nova funcionalidade |
| `fix` | correção de bug |
| `docs` | documentação |
| `style` | formatação, sem mudança de lógica |
| `refactor` | refatoração sem mudar comportamento |
| `perf` | melhoria de performance |
| `chore` | configuração, dependências, tooling |

Exemplos:

```
feat(intro): add machine-language rain intro
fix(contact): copy email to clipboard
docs: add README and contributing guide
chore: configure vite, typescript and tailwind
```

## Antes de abrir um Pull Request

- `npm run build` passa sem erros (inclui a checagem de tipos).
- Sem imports ou variáveis não utilizados (`noUnusedLocals` está ativo).
- Nenhum dado pessoal sensível ou segredo versionado (`.env` está no `.gitignore`).

