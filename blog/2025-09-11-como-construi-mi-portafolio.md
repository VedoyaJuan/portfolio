---
title: Cómo Construí Mi Portafolio Profesional
date: 2025-09-11
author: Vedoya Juan Pablo
tags: [proyectos, desarrollo-web, javascript, css, github]
---

# Cómo Construí Mi Portafolio Profesional

¡Hola! En este post quiero contar mi experiencia armando este sitio que estás viendo ahora mismo. La idea era crear un portafolio que no solo muestre mis proyectos y habilidades, sino que también funcione como una extensión de mi currículum.  
Después de evaluar algunas opciones, me decidí por **Docusaurus**, y en este artículo te cuento por qué lo elegí, qué pasos seguí, los desafíos que me encontré y qué aprendí en el camino.

<!--truncate-->

## ¿Qué es Docusaurus?

**Docusaurus** apareció en 2017 de la mano de ingenieros de **Facebook (hoy Meta)** para resolver un problema interno: necesitaban una forma rápida y ordenada de crear documentación para proyectos open source.  

Hasta ese momento, la mayoría de las documentaciones eran un caos: estilos distintos, generadores complejos o wikis difíciles de mantener. Docusaurus vino a simplificar todo con tres ideas clave:

- **Escribir en Markdown** (simple y universal para devs).  
- **Generar un sitio estático moderno** con React.  
- **Automatizar la navegación, sidebar y versionado** de la documentación.  

Con el tiempo, se volvió popular porque proyectos gigantes como **React Native, Jest o Redux** lo adoptaron. Hoy en día, con **Docusaurus 2**, ya no se limita a docs técnicas: ahora soporta blogs, portafolios y hasta sitios completos, con temas, plugins y despliegues sencillos en GitHub Pages, Netlify o Vercel.

---

## ¿Por qué lo elegí?

Yo buscaba algo que cumpliera con tres cosas:  
1. **Simple de usar**, porque entre la facultad y mis proyectos personales no podía perder semanas configurando.  
2. **Potente y ordenado**, para poder mostrar docs, proyectos y un blog en un solo lugar.  
3. **Gratis y mantenible**, para no depender de plataformas que un día me corten el servicio.  

Y ahí es donde Docusaurus me cerró perfecto:  

- **Fácil de usar:** viene con docs y blog listos. No hace falta saber React a fondo para empezar.  
- **Ideal para portafolios:** puedo separar contenido estático (mi formación, experiencia) en `docs` y lo dinámico (proyectos, posts) en `blog`.  
- **Muy personalizable:** permite meter componentes de React, estilos CSS y más.  
- **Open-source y gratuito:** sin costos ocultos y con una comunidad activa.  

En resumen: me permitió levantar algo profesional en poco tiempo, sin dejar de ser flexible para el futuro.

---

## Paso 1: Instalación y Configuración Inicial

Primero instalé **Node.js y npm**. Después, en la terminal corrí:

```bash
npx create-docusaurus@latest mi-portafolio classic
````

Esto generó la estructura inicial de Docusaurus. Luego entré en la carpeta y arranqué el servidor con:

```bash
npm start
```

Con eso ya tenía un sitio corriendo en `http://localhost:3000`. Venía con:

* Un tema clásico con navegación.
* Carpetas para docs, blog y páginas personalizadas.
* Archivos de configuración (`docusaurus.config.js`) para cambiar título, descripción, enlaces, etc.

---

## Paso 2: Decisiones de Diseño

Quería un sitio limpio y profesional, así que toqué varias cosas:

* Cambié el **título** a “Mi Portafolio Profesional”.
* Agregué mi **logo SVG** en la navbar.
* Personalicé colores en `src/css/custom.css` (me fui por una paleta azul y blanco).
* Organicé la sección `docs` en carpetas como:

  * `SobreMi`: introducción personal.
  * `Educacion`: mis estudios y certificados.
  * `Proyectos`: resúmenes de proyectos (con links al blog para más detalle).

También sumé imágenes en `static/img` para darle vida al sitio.

---

## Paso 3: Tecnologías Integradas

Este portafolio usa un stack sencillo pero bastante completo:

* **React:** para los componentes interactivos.
* **Markdown:** escribir posts y docs de forma ágil y mantenible.
* **CSS:** para estilos personalizados.
* **Git y GitHub:** para versionar y hostear el sitio gratis con GitHub Pages.

Además, subí PDFs de certificados a `static/docs` para que se puedan descargar.

---

## Paso 4: Cómo lo Desplegué con GitHub Pages

Una de las mejores partes es lo fácil que es ponerlo online con GitHub Pages. Lo hice así:

1. Subí el proyecto a un repositorio en GitHub.
2. Instalé el paquete de despliegue:

   ```bash
   npm install --save-dev gh-pages
   ```
3. En `docusaurus.config.js` configuré:

   ```js
   url: 'https://miusuario.github.io',
   baseUrl: '/mi-portafolio/',
   organizationName: 'miusuario', // GitHub username
   projectName: 'mi-portafolio', // repo name
   ```
4. En `package.json` agregué los scripts:

   ```json
   "scripts": {
     "deploy": "docusaurus deploy",
     "build": "docusaurus build"
   }
   ```
5. Ejecuté:

   ```bash
   npm run deploy
   ```

¡Y listo! Ahora mi portafolio se publica automáticamente en [GitHub Pages](https://pages.github.com/) cada vez que lo actualizo.

---

## Desafíos y Aprendizajes

No todo fue fácil. Algunos problemas que tuve y cómo los resolví:

1. **Estructura de carpetas:** al principio me perdía, hasta que leí la documentación oficial y vi un par de tutoriales en YouTube.
2. **Personalización:** quería agregar un formulario de contacto y no encontraba cómo. Lo resolví creando un componente React simple con un link a mi email.
3. **SEO y rendimiento:** el sitio cargaba lento. Lo solucioné optimizando imágenes y usando lazy loading.
4. **Contenido:** no sabía qué poner. Me inspiré viendo portafolios de otros devs y terminé enfocándome en mostrar mi proceso de aprendizaje y mis proyectos.

Lo más valioso fue entender que no hace falta complicarse: un sitio claro, con buen contenido y organizado ya transmite mucho más que mil animaciones.

---

## Conclusión

Armar este portafolio fue una experiencia clave: aprendí sobre desarrollo web, herramientas modernas y, sobre todo, a documentar lo que hago.
Pasé de no tener idea de cómo mostrar mis cosas a tener un sitio que me representa, y que además puedo seguir mejorando con el tiempo.

La idea es seguir actualizándolo, agregando proyectos y probando nuevas features a medida que voy aprendiendo.

---

## Enlaces útiles

* [Docusaurus](https://docusaurus.io/)
* [GitHub Pages](https://pages.github.com/)

---

Para ver mis proyectos resumidos, entrá a [docs/Proyectos](../docs/Proyectos).
¿Preguntas o comentarios? Escribime a [mi mail](mailto:juanpa.vedoya@gmail.com).


