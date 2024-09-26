---
title: Guia Linux
description: Ayuda memoria para aprender Linux .
image: '../../assets/images/guides/guide-03.png'
date: 2023-06-25
tags: [Linux, Linux, Programming]
category: Guides
---

# LINUX

## Comandos

- View file

```bash
cat filename
```

- Create file

```bash
touch filename
```

- Delete carpet

```bash
rm -rf dirname
```

- List

```bash
ls -l
#show hidden
ls -a
```

- Actualizar paquetes

```bash
sudo apt update
sudo apt upgrade
sudo snap refresh
```

## Personaliza Prompt de la terminal

```bash
sudo vi ~/.bashrc
# Buscar en el editor la variable PS1
# Ejemplo PS1="Hola@bienvenido> "
# \u@\h
# \u sigfica el username y \h el host
# He quitado el @\h

# actualizar cambios
source ~/.bashrc
```
