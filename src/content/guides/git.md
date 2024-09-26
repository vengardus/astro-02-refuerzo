---
title: Guia Git
description: Ayuda memoria para aprender Git .
image: '../../assets/images/guides/guide-02.png'
date: 2023-06-25
tags: [Git, Git, Programming]
category: Guides
---

# GIT

## Comandos

### Log commits

```bash
git log --oneline --graph --all
```

### Deshacer el último commit pero mantener los cambios en el stage

```bash
git reset --soft HEAD~1
```

### Deshacer el último commit y moverá los cambios los cambios desde el stage al área de trabajo

```bash
git reset --mixed HEAD~1
```

### Create rama

```bash
git branch -M nueva_funcioalidad
```

### Cambiar a rama

```bash
git checkout nueva_funcionalidad
```

### Crear y cambiar a una rama

```bash
git checkout -b nueva_funcionalidad
```

### List repositorio en la nube (del proy actual)

```bash
git remote -v
```

### Actualizar rama

```bash
git pull origin nombre-rama
```

### Add repositorio remoto github

```bash
git add origin url_repositorio
```

### Push

```bash
git add .
git commit -m "desc commit"
git push -u origin [main]
```

### Listar ramas , la actual se muestra  con *

```bash
git brach
```

### Open repo from terminal

```bash
gh repo view --web
```

### Create repo from terminal

```bash
gh repo create <repo name>l
```

### Verifica tu Conexión SSH con GitHub
Asegúrate de que tu conexión SSH con GitHub funciona correctamente:

```bash
ssh -T git@github.com
```

### Posible problema clave SSH no aceptadaa: Verifica las URL remotas:

```bash
git remote -v
# Si ves una URL que comienza con https://, necesitas cambiarla a SSH.
#Cambiar la URL remota a SSH:

git remote set-url origin git@github.com:tu-usuario/nombre-del-repositorio.git
```

## Duplicar proyecto tercero (Fork)

### Clonar el Repositorio Forkeado

```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
```

### Añadir el Remoto Upstream
Añadir el remoto upstream para poder sincronizar tu fork con el repositorio original:

```bash
git remote add upstream https://github.com/usuario-original/nombre-del-repositorio.git
```

### Verificar las Ramas del Upstream
Verifica las ramas que están disponibles en el remoto upstream:

```bash
git fetch upstream
git branch -r
```

Esto debería mostrarte todas las ramas del repositorio original, incluyendo upstream/main y upstream/dev.

### Crear y Sincronizar la Rama dev
Crea una rama local dev basada en upstream/dev:

```bash
git checkout -b dev upstream/dev
```

Ahora tienes la rama dev en tu repositorio local. Si deseas mantener esta rama en tu fork en GitHub, también debes empujarla:

```bash
git push origin dev
```

## Sincronizar Fork

Para mantener tu fork actualizado con los cambios del repositorio original, debes sincronizar regularmente. Aquí te muestro cómo hacerlo tanto para la rama main como para la rama dev:

Obtener actualizaciones del repo original

```bash
git fetch upstream
```

Sincronizar la Rama main

```bash
git checkout main
git merge upstream/main
git push origin main
```

Sincronizar la Rama dev

```bash
git checkout dev
git merge upstream/dev
git push origin dev
```

Sincronizar la Rama dev-vengardus

```bash
git checkout dev-vengardus
git merge dev
git push origin dev-vengardus

```

## Documnetación commits (tipos)

### **feat**: A new feature or functionality added.
### **fix**: A bug fix or error correction.
### **docs**: Documentation updates or additions.
### **style**: Code style changes (e.g., formatting, indentation) that do not affect the code's functionality.
### **refactor**: Code refactoring or restructuring without changing its behavior.
### **test**: Adding or modifying tests.
### **chore**: Routine tasks, maintenance, or tooling changes that do not affect the codebase (e.g., updating dependencies, configuring build tools).
### **perf**: Performance optimization or improvement.
### **revert**: Reverting a previous commit.
### **merge**: Commit generated from merging branches.
### **deploy**: Changes related to deployment or configuration files.
### **config**: Configuration-related changes.
### **init**: Initial commit or repository setup.
