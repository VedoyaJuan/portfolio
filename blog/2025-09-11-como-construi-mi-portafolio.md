---
title: Cómo Construí Mi Portafolio Profesional
date: 2025-09-11
author: Vedoya Juan Pablo
tags: [proyectos, desarrollo-web, tutoriales]
---

# Cómo Construí Mi Portafolio Profesional

Hola! En este post quiero compartir mi experiencia completa al construir este sitio que estás viendo ahora mismo. Como decidí crear un portafolio que no solo muestre mis habilidades, sino que también sirva como una extensión de mi currículum. Elegí Docusaurus por varias razones que voy a explicar a continuación, y voy a contar unos pasos simples de cómo lo hice, los desafíos que encontre y que cosas aprendí. 

<!--truncate-->

## ¿Qué es Docusaurus?

**Docusaurus** nació en **2017**, desarrollado por ingenieros de **Facebook (hoy Meta)**.
La idea original era resolver un problema interno: necesitaban una forma **sencilla y ordenada de crear documentación** para proyectos de código abierto, que se pudiera mantener fácilmente junto con el repositorio de cada proyecto.

En esa época, muchas documentaciones técnicas eran caóticas: cada una tenía un estilo distinto, se usaban generadores complejos o directamente wikis difíciles de mantener. Docusaurus propuso una alternativa:

* **Escribir en Markdown** (fácil para cualquier desarrollador).
* **Generar un sitio web estático moderno** con React.
* **Automatizar la navegación, sidebar y versión de docs** sin tener que hacerlo manualmente.

El proyecto fue creciendo rápidamente porque se adoptó en la documentación oficial de librerías muy conocidas como **React Native, Jest, Redux y muchas más**. Eso le dio visibilidad y lo consolidó como un estándar en la comunidad.

Con el tiempo, la herramienta evolucionó a lo que hoy conocemos como **Docusaurus 2**, mucho más flexible:

* Soporta **blogs, portafolios y páginas personalizadas**, no solo documentación.
* Se integra con **plugins y temas** para personalizar el diseño.
* Se puede desplegar fácilmente en **GitHub Pages, Netlify o Vercel**.



## ¿Por Qué lo Elegí?

Ya que buscaba algo simple donde pueda exponer mis cosas relacionadas a la programación y que no requiera de mucho tiempo ya que estoy cursando en la universidad encontré Docusaurus que es:

- **Fácil de usar**: Viene con todo configurado para crear documentación y blogs. No necesitas ser un experto en React para empezar.
- **Ideal para portafolios**: Permite separar contenido estático (como mi información personal y educación) en la sección "docs" y contenido dinámico (como detalles de proyectos) en el "blog". Aparte este es el tipo de paginas que te permite hostear GitHub Pages.
- **Personalizable**: Puedo agregar componentes React, estilos CSS y hasta integraciones con otras herramientas.
- **Gratis y open-source**: No hay costos ocultos, y hay una gran comunidad para pedir ayuda.

Por eso elegi esta tecnología, Docusaurus me permitió crear un sitio profesional gratis, facil y rápido. Como buscaba algo simple pero potente, es una excelente opción.

## Paso 1: Instalación y Configuración Inicial

Empecé instalando Node.js y npm en mi computadora (si no los tienes, descárgalos desde nodejs.org). Luego, en la terminal, ejecuté:

```bash
npx create-docusaurus@latest mi-portafolio classic
```

Esto creó una carpeta con la estructura básica de Docusaurus. Entré en la carpeta y ejecuté:

```bash
npm start
```

¡Y listo! El sitio se abrió en http://localhost:3000. La configuración inicial incluyó:
- Un tema clásico con navegación.
- Carpetas para docs, blog y páginas personalizadas.
- Archivos de configuración como `docusaurus.config.js` para personalizar el título, descripción y enlaces.

## Paso 2: Decisiones de Diseño

Quise que el sitio fuera limpio y profesional. En `docusaurus.config.js`, cambié:
- El título a "Mi Portafolio Profesional".
- Agregué mi logo (un SVG personalizado) en la barra de navegación.
- Configuré colores en `src/css/custom.css` para que coincida con mis gustos (azul y blanco).

Para la página principal (`src/pages/index.js`), usé el componente `HomepageFeatures` para resaltar mis fortalezas: "Aprendizaje Rápido", "Pasión por la Tecnología" y "Trabajo en Equipo". Agregué imágenes SVG de la carpeta `static/img` para hacerlo visual.

En la sección docs, organicé carpetas como:
- SobreMi: Mi introducción personal.
- Educacion: Mis estudios y certificados.
- Proyectos: Resúmenes de mis trabajos (con enlaces al blog para detalles).

## Paso 3: Tecnologías Integradas

Este portafolio usa:
- **React**: Para componentes interactivos, como la página principal.
- **Markdown**: Para escribir contenido en docs y blog de manera simple y que pueda mantenerlo mas facil en el tiempo.
- **CSS**: Para estilos personalizados.
- **Git y GitHub**: Para versionar el código y alojar el sitio gratis con GitHub Pages.

También integré PDFs de mis certificados en `static/docs` para que se descarguen fácilmente.

## Desafíos Enfrentados y Cómo los Resolví

Como principiante, tuve varios obstáculos:

1. **Configuración inicial**: Al principio, no entendía la estructura de carpetas. Solución: Leí la documentación oficial de Docusaurus (muy completa y detallada) y vi tutoriales en YouTube.
   
2. **Personalización**: Quería agregar un formulario de contacto, pero era complicado. Solución: Usé un componente simple de React y enlacé a mi email.

3. **SEO y rendimiento**: El sitio cargaba lento al principio. Solución: Optimizé imágenes y usé lazy loading en Docusaurus.

4. **Contenido**: No sabía muy bien qué y cómo escribir. Solución: Me inspiré en portafolios de otros desarrolladores y escribí sobre mi proceso de aprendizaje.

El mayor desafío fue equilibrar simplicidad con funcionalidad. Aprendí lo bueno de algo simple: una pagina limpia y con buena información es lo que buscaba ya que mi objetivo no es tanto lo grafico y el frontend en sí, sino el contenido.


## Conclusión

Construir este portafolio me enseñó sobre desarrollo web y autoaprendizaje. Desde cero, pasé de no saber que hacer a tener un sitio funcional que me ayuda a mostrar sobre mi y mis proyectos.

## Enlaces interesantes

[Docusaurus](https://docusaurus.io/)

---

Para ver resúmenes de mis proyectos, dirigite a [docs/Proyectos](../docs/Proyectos). ¡Gracias por leer!

¿Tenes preguntas? Contáctame en [mi email](mailto:juanpa.vedoya@gmail.com).

