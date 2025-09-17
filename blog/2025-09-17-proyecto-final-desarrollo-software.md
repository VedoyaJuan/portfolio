---
title: Red de Monitoreo Ambiental
date: 2025-09-17
author: Vedoya Juan Pablo
tags: [proyectos, desarrollo-web]
---
# Desarrollo de Software - Trabajo Final 2024

Este proyecto fue desarrollado como **Trabajo Final de la materia Desarrollo de Software** en la **Facultad de Ingeniería de la UNPSJB**, en el marco de un convenio con la **Federación Chubutense de Cooperativas de Servicios Públicos Ltda.**
<!-- truncate -->
---

## Introducción

El Valle Inferior del Río Chubut (VIRCH) se caracteriza por ser una región vulnerable a inundaciones.  
Cuando se producen lluvias intensas en la meseta, los afluentes arrastran grandes cantidades de sedimentos hacia el río, lo que complica el proceso de potabilización y el suministro de agua en la ciudad de Trelew y alrededores.

![Rio Chubut](@site/static/img/blog/RMA/diariosRioChubut.png)

Ante esta situación, se propuso la instalación de **sensores en los afluentes** y el desarrollo de una **aplicación web** que permita:

- Monitorear en tiempo real el nivel del agua.  
- Visualizar datos históricos y actuales de la cuenca.  
- Anticipar crecidas y emitir alertas tempranas.  


---

## Fundamentación

La solución se basó en una **arquitectura Cliente-Servidor** con dos grandes componentes:

- **Backend:** encargado de recibir datos de los sensores, procesarlos y almacenarlos en la base de datos.  
- **Frontend:** interfaz interactiva donde se presentan gráficos, mapas y tablas para la interpretación de la información.  

Ventajas de una aplicación web:  

- No requiere instalación en los dispositivos.  
- Accesible desde cualquier navegador con internet.  
- Compatible con múltiples dispositivos (PC, notebook, smartphone).  

---

## Desarrollo del Producto

El proceso comenzó con entrevistas a los **stakeholders** (profesores, estudiantes y técnicos de la cooperativa) y la elaboración de un **User Story Mapping**.  
De allí surgieron los tres pilares principales del MVP:  

1. **Recepción de datos.**  
2. **Almacenamiento y procesamiento.**  
3. **Visualización.**  

Las historias de usuario priorizadas fueron las de **visualización**, ya que era importante validar pronto la interfaz gráfica.  
Se seleccionó la plantilla **Argon Dashboard para React** como base de diseño del frontend.

![Dashboard ](@site/static/img/blog/RMA/argonDashboard.png)

---

### Interfaz del sistema

- **Login:** acceso con usuario y contraseña ya registrados.  
- **Dashboard principal:**  
  - Tarjeta con la última medición recibida.  
  - Ícono de notificaciones con alertas.  
  - Acceso rápido a mapas, gráficos, tablas y configuración.  

![LogIn](@site/static/img/blog/RMA/login.png)

---

### Módulos principales

![Modulos](@site/static/img/blog/RMA/modulos.png)

- **Mapa interactivo:**  
  - Muestra la cuenca con los nodos conectados.  
  - Colores según estado del nodo: activo, inactivo, en mantenimiento.  
  - Posibilidad de acceder a datos individuales de cada nodo.  

![Mapa](@site/static/img/blog/RMA/mapa.png)

![Nodos](@site/static/img/blog/RMA/nodosMapa.png)

- **Gráficos:**  
  - Visualización del historial de mediciones de altura del agua y temperatura.  
  - Opciones de últimas 24 horas o vista semanal.  
  - Posibilidad de exportar gráficos con fecha/hora.  

![Graficos](@site/static/img/blog/RMA/graficas.png)

- **Tablas:**  
  - Datos ordenados por nodo y tipo de medición.  
  - Filtros por fecha o umbral.  
  - Exportación/importación en CSV o JSON.  

![Tablas](@site/static/img/blog/RMA/tablas.png)

- **Gestión de nodos:**  
  - Registrar nuevos nodos con coordenadas en el mapa.  
  - Modificar alias o estado de nodos existentes. 

![Registrar Nodo](@site/static/img/blog/RMA/registrarNodo.png) 

![Gestion de Nodos](@site/static/img/blog/RMA/gestionNodo.png)

- **Configuración de límites:**  
  - Ajustar rangos mínimos y máximos de cada tipo de dato.  
  - Definir umbrales de alerta para las notificaciones automáticas.  

![Tipos](@site/static/img/blog/RMA/tipos.png)

![Editar Tipos](@site/static/img/blog/RMA/editarTipo.png)


---

## Modelo de Datos

El sistema se estructuró en 5 tablas principales:  

1. **Nodo:** información de cada sensor (ID, alias, coordenadas, estado, fechas, mediciones).  
2. **Mediciones:** valores registrados (altura del agua, temperatura, fecha, errores).  
3. **Tipos de datos:** definición de unidades, rangos, umbrales y metadatos.  
4. **Alertas:** historial de eventos generados al superar umbrales.  
5. **Registros:** usuarios del sistema (credenciales).  

![Entidad Relacion](@site/static/img/blog/RMA/diagramaER.png)

---

## Stack Tecnológico

El proyecto se construyó utilizando herramientas modernas de la industria:  

- **Backend:**  
  - [FastAPI](https://fastapi.tiangolo.com/) → framework en Python para crear APIs rápidas y seguras.  
  - [SQLite](https://www.sqlite.org/) → base de datos relacional.  
  - Arquitectura RESTful → endpoints para comunicación con el frontend.  

- **Frontend:**  
  - [React](https://react.dev/) → librería de JavaScript para la construcción de interfaces dinámicas.  
  - [Leaflet](https://leafletjs.com/) → mapas interactivos basados en OpenStreetMap.  
  - Plantilla [Argon Dashboard](https://www.creative-tim.com/product/argon-dashboard-react).  

- **Control de versiones y gestión de equipo:**  
  - **Git** para control de versiones.  
  - **GitHub** para colaboración, issues y tablero Kanban.  

Este stack permitió lograr un sistema **escalable, mantenible y fácil de extender** con nuevas funcionalidades.  

![Tecnologias](@site/static/img/blog/RMA/tecnologias.png)

---

## Gestión del Proyecto (Scrum)

Se utilizó **Scrum** como metodología ágil, con sprints de dos semanas.  

- **Tablero Kanban:** organización del trabajo.  
- **Burndown Charts:** seguimiento del progreso de cada sprint.  
- **Velocity:** capacidad promedio del equipo (26 puntos de historia por sprint).  
- **Retrospectivas:** mejora continua en comunicación y distribución de tareas.  

Al inicio fue difícil definir roles y responsabilidades, pero la práctica y el marco ágil ayudaron a mejorar la dinámica.  

**Tablero Kanban Preliminar**
![Kanban](@site/static/img/blog/RMA/kanban.png)

![Burndown](@site/static/img/blog/RMA/burndownC.png)

---

## Conclusiones

El proyecto culminó con una **aplicación web funcional** que permite monitorear en tiempo real la **Cuenca Sagmata**, mostrando datos de altura del agua y temperatura de los nodos instalados.  

**Logros principales:**  

- Plataforma intuitiva y accesible desde cualquier dispositivo.  
- Integración de sensores remotos con comunicación LoRa y GPRS.  
- Visualización dinámica en gráficos, mapas y tablas.  
- Gestión de alertas en función de umbrales configurables.  

## Autores

- **Fernández Francisco Tomás**  
- **Collado Yamila**
- **Gonzalez Mateo**
- **Gutierrez Cristian**
- **Vedoya Juan Pablo**

### GitHub
- [RMA Grupo 5](https://github.com/UNPSJB/RMA-grupo-5)

**Trabajo Final 2024 - Grupo 5**  
Facultad de Ingeniería - UNPSJB  
