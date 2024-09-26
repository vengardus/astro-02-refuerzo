---
title: Guia Astro
description: Ayuda memoria para aprender Astro .
image: '../../assets/images/guides/guide-01.png'
date: 2023-06-25
tags: [Astro, Web Design, Frontend]
category: Guides
---

# GUIA PARA DESARROLLO EN ASTRO: [Doc. oficial](https://docs.astro.build/es/getting-started/)

## 1. INSTALACION Y CONFIGURACION: [ver..](https://docs.astro.build/es/install-and-setup/)

### Crear proyecto
```bash
  pnpm create astro@latest
```

* Iniciar servidor de desarrollo
```bash
  pnpm run dev
```

* Construir sitio
```bash
  pnpm run build
```

* Previsualizar sitio
```bash
  pnpm run preview
```

### Crear estructura de carpetas
```bash
cd src
mkdir assets
mkdir assets/images
mkdir assets/icons
mkdir components
mkdir components/shared
mkdir config
mkdir content
mkdir interfaces
mkdir layouts
mkdir styles
mkdir utils
mkdir icons
cd ..
```

### Integraciones iniciales

* [TailwindCSS](https://docs.astro.build/en/guides/styling/#tailwind)


### Copiar favicon.ico en public

### Crear css global:  src/styles/global.css
```css
:root {
  --accent: #2337ff;
  --accent-dark: #000d8a;
  --black: 15, 18, 25;
  --gray: 96, 115, 159;
  --gray-light: 229, 233, 240;
  --gray-dark: 34, 41, 57;
  --gray-gradient: rgba(var(--gray-light), 50%), #fff;
  --box-shadow: 0 2px 6px rgba(var(--gray), 25%),
    0 8px 24px rgba(var(--gray), 33%), 0 16px 32px rgba(var(--gray), 33%);
}
@font-face {
  font-family: "Atkinson";
  src: url("/fonts/atkinson-regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Atkinson";
  src: url("/fonts/atkinson-bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
body {
  font-family: "Atkinson", sans-serif;
  margin: 0;
  padding: 0;
  text-align: left;
  background: linear-gradient(var(--gray-gradient)) no-repeat;
  background-size: 100% 600px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  color: rgb(var(--gray-dark));
  font-size: 20px;
  line-height: 1.7;
}
main {
  width: 720px;
  max-width: calc(100% - 2em);
  margin: auto;
  padding: 3em 1em;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 0.5rem 0;
  color: rgb(var(--black));
  line-height: 1.2;
}
h1 {
  font-size: 3.052em;
}
h2 {
  font-size: 2.441em;
}
h3 {
  font-size: 1.953em;
}
h4 {
  font-size: 1.563em;
}
h5 {
  font-size: 1.25em;
}
strong,
b {
  font-weight: 700;
}
a {
  color: var(--accent);
}
a:hover {
  color: var(--accent);
}
p {
  margin-bottom: 1em;
}
.prose p {
  margin-bottom: 2em;
}
textarea {
  width: 100%;
  font-size: 16px;
}
input {
  font-size: 16px;
}
table {
  width: 100%;
}
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
code {
  padding: 2px 5px;
  background-color: rgb(var(--gray-light));
  border-radius: 2px;
}
pre {
  padding: 1.5em;
  border-radius: 8px;
}
pre > code {
  all: unset;
}
blockquote {
  border-left: 4px solid var(--accent);
  padding: 0 0 0 20px;
  margin: 0px;
  font-size: 1.333em;
}
hr {
  border: none;
  border-top: 1px solid rgb(var(--gray-light));
}
@media (max-width: 720px) {
  body {
    font-size: 18px;
  }
  main {
    padding: 1em;
  }
}

/* gardus */
footer {
  color: red;
}
```

### Configurar path alias en tsconfig.json
```json
{
  ...
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": [
        "src/components/*"
      ],
      "@/layouts/*": [
        "src/layouts/*"
      ],
      "@/interfaces/*": [
        "src/interfaces/*"
      ],
      "@/utils/*": [
        "src/utils/*"
      ],
      "@/config/*": [
        "src/config/*"
      ],
      "@/images/*": [
        "src/assets/images/*"
      ]
    },
  },
    ...
}
```

### Crear constantes: src/config/constants.ts
```ts
export const siteInfo = {
  title: "My Site",
  description: "This is my site",
}
```

### Crear Navbar: src/components/shared/navbar.astro
```jsx
---

---
<div>Navbar</div>
```

### Crear Layout: src/layouts/MainLayout.astro
```jsx
---
import { ViewTransitions } from "astro:transitions";
import Navbar from "@/components/shared/Navbar.astro";
import { siteInfo } from "src/config/constants";

interface Props {
  title?: string;
  descritpion?: string;
  isNavbar?: boolean;
}
const { 
  title = siteInfo.title, 
  descritpion=siteInfo.description, 
  isNavbar=true 
} = Astro.props;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />

    <!-- SEO -->
     <meta name="description" content={descritpion} />
     <meta name="author" content="Vengardus" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={descritpion} />

    <title>{title ?? "Vengardus Page"}</title>
    
    <ViewTransitions />

  </head>
  
  <body class="bg-slate-800 text-slate-100">
    {isNavbar && <Navbar />}
    <main class="mt-2 m-auto w-full max-w-4xl flex-grow px-4">
      <slot />
    </main>
  </body><footer></footer>
</html>
```

### Crear página de error: src/pages/404.astro
```jsx
---
import MainLayout from "../layouts/FirstLayout.astro";
---

<MainLayout title="Page | Not Found" isNavbar={false}>
  <h1>Page Not Found</h1>

  <p>The page you are looking for does not exist.</p>

  <a href="/">Go Home</a>
</MainLayout>
```

### Reemplazar index(\) src/pages/index.astro
```jsx
---
import MainLayout from "@/layouts/MainLayout.astro";
---

<MainLayout title="Vengardus">
  <h1 class="text-3xl text-blue-500">Hi Vengardus</h1>
</MainLayout>
```

### Subir proyecto a repositorio
* Crear respositorio con github y configurar git

* Subir repositorio
```bash
git add .
git commit -m "first commit"
git remote add origin git@github.com:vengardus/{nombreRepositorio}.git
git push
```

## 2. FEATURES

### 2.0. Integraciones 
* Agrega funcinalidades a Astro: (https://docs.astro.build/es/guides/integrations-guide/)

### 2.1. View Treansitions (animaciones) [https://docs.astro.build/en/guides/view-transitions/]

* Agregar en el componente layout (section head):
```tsx
---
import { ViewTransitions } from "astro:transitions";
--- 
<html lang="en">
  <head>
    ...
    <ViewTransitions />
  </head>
  ...
</html>
```

* Definir animacion en el control. 
Debe definirse un nombre único en el ***transition:name****.
```tsx
// ejemplo:
<img
    transition:name={`${name}-image`}
    src={urlImage}
    alt={name}
    class:list={[
      {
        "w-22 h-22": isBig,
        "w-16 h-16": !isBig,
      },
    ]}
  />
```
* Directivas:
  - ***transition:name:*** nombre de la transición
  - ***transition:animate:*** utiliza animaciones integradas o personalizadas.
  - ***transition:persist:*** persiste los componenrtes y elementos html al navegar entre las paginas.

* Persistencia de props entre componentes. Ejemplo componente Counter que es una isla React, que preserva un estado, requiere las directivas persist  y persist-props. Asi al salir y volver de la pagina mantiene el valor
```tsx
 <Counter
    transition:persist="counter"
    transition:persist-props
    client:visible
    client:only="solid-js"
    initialValue={initialCounter}
  >
``` 

* **Nota**:
  - En algunos navegadores no basados en chromiun no funciona del todo. Hay que agragar en el lugar donde se usa el ***transtion:name=""*** un : ***transition:animate="initial"*** (usa el etilo de animaciones del navegador).
  - En W11 hay que habilitar a nivel de configuracion de S.O: Permitir animaciones.
  - Nueva forma nativa, sin js ( en beta en algunos navegadores)
    - En el layout comentar el ***ViewTransition***
    - agregar

    ```astro
        /* en el header */
        <style>
            @view-transition {
                navigation: auto; /* enabled! */
            }
        </style>
    ```
    - En mis pruebas solo funcionó con la priumera alterntiva.

### 2.2. Pagination (https://docs.astro.build/es/reference/api-reference/#paginate)
  * Requiere una pagina ***[page].astro***
  * ***page*** es nombre reservado.
  * Se utilizará la función ***getStaticPaths()*** para generar los datos de paginación. 
  * En el componente ***[page].astro*** incluir:
  ```tsx
  ---
  
  export const getStaticPaths = (async ({ paginate }) => {
    // obteher de algun lados los datos para generar las paginas
    const blogPosts = await getCollection("blog");    

    // retornar un array con la estructura siguiente: el array de datos, y el número de elementos por página
    return paginate(blogPosts, { pageSize: 2 });      
  }) satisfies GetStaticPaths

  // obtener los props de la pagina, page viene en automatico
  const { page } = Astro.props; 
  ---
  ```


### 2.3. Astro icons [documetación](https://www.astroicon.dev/)
  * Instalar imntegración
  ```bash
    pnpm astro add astro-icon
  ```

  * Utiliza iconos de ***iconify*** (https://icon-sets.iconify.design/)

  * **Requiere carpeta** ***src/icons***
  * De **iconify** copiar **codigo svg** y **crear archivo**.

### 2.4. Islas: React (https://docs.astro.build/es/guides/integrations-guide/react/)
* Instalar integración
```bash
  pnpm astro add react
``` 
* Configuración de la integración: Indicar la ruta donde encontrar comṕnentes react. Se recomiendan que esten agrupados en una mism carpeta. Con la siguiiente configuración se podrá crear una carpeta react dentro de alguna carpeta de components, por ejemplo para dejar ahi los componentes de react. Ejemplo: `src/components/blog/react/`. Modificar el archivo `astro.config.mjs`
```json
export default defineConfig({
  integrations: [
    tailwind(), 
    react(
      {
        include: ['**/react/**/*'],
      }
    )
  ],
});
```
* Directivas:
- client:load: Este componente de JavaScript comenzará a importarse cuando se cargue la página.
- client:visible: El JavaScript de este componente no se enviará al cliente hasta que el usuario se desplace hacia abajo y el componente sea visible en la página
- client:only: Este componente no se renderizará en el servidor, pero se renderizará en el cliente cuando la página cargue

* Los componentes de multiples frameworks (React, Solid, etc) se pueden combinar. Un componente puede llamar a otro componente, pero del mismo  framework. No puede llamar a un compnente astro.
* Un compoennete astro si pouyede llamar a componenentes de múltiples framworks.
* Un componente que usa librerias de terceros, por ejemplo una isla react, y usa el localSotare, requiere que al llamar al componenete se indique la directiva: client:only="react"
* Persistencia
  - En la llamada de la isla: usar el atributo: transition:persist="{nombre}"
* Transition en una isla: usar el style:
  ```tsx
    <img 
      src={imageSrc} alt={pokemon.name} 
      width={140} height={140} 
      style={{viewTransitionName: `${pokemon.name}-image`}}
    />
  ```

### 2.5. Enrutamiento (https://docs.astro.build/es/guides/routing/)
  * Rutas estáticas y dinámicas
  * Rutas dinámicas: Se pueden generar de 2 formas:
    - **Modo Generación Estática(SSG) (modo por defecto):**
      - Se definen en tiempo de compilación. La ruta dinṕamica debe exportar la función `getStaticPaths()`.
      - El archivo astro tiene la forma [name].astro
      - Puede tomar multiples parámetros. Por ejemlo: src/pages/[lang]-[version]/info.astro
      ```tsx
      ---
      export function getStaticPaths () {
      return [
          {params: {lang: 'en', version: 'v1'}},
          {params: {lang: 'fr', version: 'v2'}},
        ];
      }
      const { lang, version } = Astro.params;
      ---
      ```
      - Tambien existe un modo rest: [...slug].astro el cual puede tomar multiples valores, por ejemplo:
      ```tsx
      ---
      export function getStaticPaths() {
        return [
          {params: {path: 'uno/dos/tres'}},
          {params: {path: 'cuatro'}},
          {params: {path: undefined }}
        ]
      }
      const { path } = Astro.params;
      ---
      ```
    - **Modo Servidor (SSR)** 
      - Se generan bajo demanda.
      - Se definen de la misma forma, entre corchetes
      - No se comilan con antelación, por tanto no se dbe usar el getStaticPaths
      - Ejm:
      ```tsx
      ---
      const { resource, id } = Astro.params;
      ---
      <h1>{resource}: {id}<h1>
      ```
      - Requiere de un adaptador para manejar el proyecto en el servidor y manjear las solicitudes.
      - Habilitar la reenderización de servidor, tiene 2 modos: server o hybrid.
      - Modo server: todas las paginas se generan en el servidor.
      - Modo hybrid: permite las 2 formas.
      - Agreagr el adaptador, hay varios oficiales (https://astro.build/integrations/?search=&categories%5B%5D=adapters). Por ejemplo usaremos Vercel
        ```bash
        pnpm astro add vercel
        ```
      - Configurar modo server o hybrid: Modificar astro.config.mjs
        ```json
        import { defineConfig } from 'astro/config';
        import node from "@astrojs/node";

        export default defineConfig({
          output: 'server',
          adapter: vercel(),
        });
        ```
      - Agregar en las páginas que rendericen páginas estáticas: export const prerender = true
        ```tsx
        ---
        export const prerender = true;
        // ...
        ---
        <html>
        <!-- Estático, página pre-renderizada aquí... -->
        </html>
        ```
      - SI se escogiuo el modo hybrid: output:"hybrid", entonces oor defecto las paginas se generaran estáticas y en aquellas paginas que se generan bajo demanda, se debe agregar el export const prerender = false
      ```tsx
      export const prerender = false;

      export async function GET() {
        let number = Math.random();
        return new Response(
          JSON.stringify({
            number,
            message: `Aquí tienes un numero aleatorio: ${number}`,
          }),
        );
      }
      ```
### 2.6. Colecciones Markdown
- Instalando integración MDX (https://docs.astro.build/es/guides/integrations-guide/mdx/)
  ```bash
  pnpm astro add mdx
  ```
- Integración co VsCode: instalar extensión (https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
- Tuve que refrescar explorer y reload window en Vscode.
- Colecciones de contenidos (https://docs.astro.build/es/guides/content-collections/)
- Las colecciones deben ir en una carpeta reservada: src/content 
- Ejem:
  ```bash
  src/content/
  src/content/blog
  src/content/blog/post-1.md
  src/content/blog/post-2.mdx
  ```
- Definiendo colecciones: Se crea el archivo src/content/config.ts
  ```ts
  import { defineCollection, z } from "astro:content";

  const blogCollection = defineCollection({
  type: "content",    // puede ser "data". Si es content, tiene un contenido a renderizar
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string(),

    // Relation
    author: z.string(),

    // Relationm
    tags: z.array(z.string()),
  }),
  });

  // Debe tene el nombre collectiions
  // crear carpeta contents/blog
  export const collections = { 
      blog: blogCollection 
  }
  ```
- Obtener todas las colecciones:
  ```ts
  const posts = await getCollection("blog");    // obteher de algun lados los datos ```
  ``` 
- Para generar paginas estáticas, retornar un array con la estructura siguiente:
    params: los parametros que se envian a la pagina (la hace unica), ejem el slug.
    props: los props que reciube la pagina, ejem. el title de la pagina
  ```tsx
  ...
  export const getStaticPaths = (async() => {
    return posts.map((post) => ({
      params: { slug: post.slug },
      props: { title: post.data.title },
    }));
  }) satisfies GetStaticPaths;    
  ```
- slug es un campo interno que maneja la coleccion.

- Renderizar contenido del markdown:
  Agregar en el area del server:
  ```tsx
  const { Content, headings } = await post.render()
  ```
  Luego en el area del cliente:
  ```tsx
  <Content />
  ```

- TIP: Suavizar desplazamiento de scroll en una pagina (ejemplo:link a una seccion en la misma pagina)
En el css (incluido en el layout) agregar:
```css
html {
  ...
  scroll-behavior: smooth;
}
```

### 2.7. Componente Image
- Optimiza imagenes, las que deben estar en src y NO en public, es mejor usar el componente Image de Astro.
- En mis pruebas optimizó las imagenes, tanto de public como del sur.
- Al hacer el build dió error, no encontraba el paquete sharp (sucede cuando se trabaja con pnpm, ver documehtación): 
  pnpm add sharp

### 2.8. Componente Picture
- Es un compoenente Image con mas funcionalidades, por ejemplo:
  ```tsx
  <Picture
    src={imageSrc} alt={pokemon.name} 
    width={140} height={140} 
    style={{viewTransitionName: `${pokemon.name}-image`}}

    formats= {["avif", "webp", "jpeg"]}
    widths={[200, 400, 800, imnageSrc.width]}
    sizes={`(max-width: 360px) 240px, (max-width: 720px) 480px, 720px`}
  />

  ```
- En los formatos de imagenes, avif es un formato mas comnprimido, pero aun no escompatiblñe con todos los navegadores.

- Relacion en Colecciones
```tsx
const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      ...
      image: image().refine(
        (img) => img.width < 1200,
        "La imagen debe tener un ancho menor a 1200",
      ),

      // Relation
      author: reference("author"),  // <===== reference se importa de astro:content

    }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    ...
    avatar: image(),
  }),
});

// Debe tene el nombre collectiions
// crear carpeta contents/blog
export const collections = {
  blog: blogCollection,
  author: authorCollection,
};
```

- Mostrar data de la relacion de la coleccion
En el componente correspondiente en la SSG (server side generation)
```tsx
...
const { post } = Astro.props;

const author = await getEntry("author", post.data.author.id );
```

- Filtro en Colecciones
Segundo paramnetro de getCollection es una funcion (filter)
await getCollection("blog", (post) => post.data.isDraft === false);


## 4. Configuraciones, solución de errores, tips
  
### Path Alias:
  Modificar tsconfig.json, agregar paths
  ```json
    {
        "extends": "astro/tsconfigs/strict",
        "compilerOptions": {  
            "baseUrl": ".",
            "paths": {
                //"@/_": ["src/_"]
                "@/components/*": ["src/components/*"],
                "@/layouts/*": ["src/layouts/*"],
                "@/interfaces/*": ["src/interfaces/*"]
            }
        }
    }
  ```
### Deploy Vercel modo SSR:
- Ocurrió un error : "500: INTERNAL_SERVER_ERROR - Code: FUNCTION_INVOCATION_FAILED"
- Estaba configurado correctamente el astro.config.mjs e instalado el adapter vercel.
- Se solucionó: Borrando la carpeta .vercel e incluyendola en el .gitignore
- Vpolvi a subir el proyecto al repositorio de github.
- El problema al parecer fue porque hice un run build y generó mal la primera vez y quedó la carpeta .vercel ma l creada.
- No es necesario hacer el run build. Basta con asociar el repositorio en Vercel.

### Error en Imagenes con Colecciones
- En la exportación de las colecciones, equivoqué en el nombre y al oarecer qyuedó en  cacehe, puse en plkural guides y el linter suguería guide, no botaba aerror de linter pero si al cragar la pagina.
  ```ts
  export const collections = {
      guide: guideCollection,   // coloqué guides y hacia referencia a guide
      blog: blogCollection
  }
  ```