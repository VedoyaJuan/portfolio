---
title: Cómo Construí Mi Portafolio Profesional con Docusaurus
date: 2025-09-11
author: Vedoya Juan Pablo
tags: [proyectos, desarrollo-web, tutoriales]
---

# Cómo Construí Mi Portafolio Profesional con Docusaurus

¡Hola! En este post quiero compartir mi experiencia completa al construir este sitio web que estás viendo ahora mismo. Como alguien sin experiencia laboral previa, decidí crear un portafolio que no solo muestre mis habilidades, sino que también sirva como una extensión de mi currículum. Elegí Docusaurus por varias razones que explicaré a continuación, y te contaré paso a paso cómo lo hice, los desafíos que enfrenté y las lecciones que aprendí. 

<!--truncate-->

## ¿Por Qué Elegí Docusaurus?

Docusaurus es una herramienta perfecta para principiantes como yo porque:

- **Fácil de usar**: Viene con todo configurado para crear documentación y blogs. No necesitas ser un experto en React para empezar.
- **Ideal para portafolios**: Permite separar contenido estático (como mi información personal y educación) en la sección "docs" y contenido dinámico (como detalles de proyectos) en el "blog".
- **SEO-friendly**: Se optimiza automáticamente para motores de búsqueda, lo que es crucial para que reclutadores encuentren mi sitio.
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

El mayor desafío fue equilibrar simplicidad con funcionalidad. Aprendí que menos es más: un sitio limpio y con buena información es lo que buscaba ya que mi objetivo no es tanto lo grafico y el frontend en sí, sino el contenido.

## Consejos para Desarrolladores Principiantes

- **Empieza pequeño**: No intentes hacer todo de una vez. Comienza con la instalación y ve agregando secciones.
- **Aprende Markdown**: Es esencial para escribir en Docusaurus.
- **Usa Git**: Guarda versiones de tu código para no perder cambios.
- **Pide feedback**: Comparte tu sitio con amigos o en comunidades como Reddit.
- **Actualiza regularmente**: Agrega nuevos proyectos para mostrar crecimiento.
- **No temas experimentar**: Docusaurus es flexible; puedes cambiar estilos y agregar plugins fácilmente.

## Conclusión

Construir este portafolio me enseñó mucho sobre desarrollo web y autoaprendizaje. Desde cero, pasé de no saber nada a tener un sitio funcional que me ayuda a conseguir oportunidades. Si tienes dudas, revisa la documentación de Docusaurus o únete a su comunidad en Discord.

Para ver resúmenes de mis proyectos, ve a [docs/Proyectos](../docs/Proyectos). ¡Gracias por leer!

¿Tienes preguntas? Contáctame en [mi email](mailto:tu-email@example.com).