# Rosa Ceño · Paisajismo

Web local de portada y portfolio, preparada para desplegar en Vercel.

## Arrancar

Necesita Node.js 20 o posterior. No tiene dependencias ni necesita instalación.

    npm run dev

Abre http://127.0.0.1:4173. Para elegir otro puerto:

    PORT=4181 npm run dev

Para comprobar la sintaxis:

    npm run check

Usa el servidor local; abrir index.html directamente con file:// no permite cargar correctamente los módulos.

## Subir a Vercel

Selecciona esta carpeta como raíz del proyecto. La configuración incluida usa:

- Framework: **Other**.
- Sin comando de compilación.
- Directorio de salida: **.**
- Rutas de portfolio resueltas por vercel.json.

No hace falta instalar un framework, generar un dist ni configurar variables de entorno. También se puede desplegar desde esta carpeta con la CLI de Vercel.

Referencia oficial de la configuración: https://vercel.com/docs/project-configuration/vercel-json

## Qué incluye

- Portada con la marca existente, imágenes reales, presentación de Rosa, especialidades y captación.
- Portfolio de 26 proyectos con sus cuatro categorías.
- Una ruta individual por proyecto, con toda la información publicada, textos completos y galerías completas.
- 151 fotografías y 11 imágenes complementarias del estudio, colaboradores y reconocimientos.
- Visor a pantalla completa con ampliación, miniaturas, teclado y gestos de deslizamiento en móvil.
- Iconos botánicos propios en SVG, sin librerías ni descargas externas.
- Formulario guiado de cinco pasos con validación, navegación por teclado, resumen y conservación de respuestas mientras la página está abierta.
- Modal a pantalla completa en móvil, controles de formulario fijos.
- Fuentes e imágenes locales. No carga analítica, cookies publicitarias ni imágenes de terceros.

## Formulario y contacto

El proyecto no lleva un servicio de email ni una base de datos conectados.

El formulario prepara una consulta y ofrece:

1. Abrir el correo del visitante con el mensaje ya redactado.
2. Copiar el texto.
3. Descargar el resumen.

No muestra una confirmación falsa de envío. La consulta solo se transmite cuando el visitante decide enviarla desde su correo.

El destino es **hola@rosapaisajista.com**, publicado en la página de contacto actual. El hilo de correos también menciona **rosa@rosapaisajista.com**; conviene ratificar el buzón antes de la puesta en producción. Para cambiarlo, buscar mailto:hola@rosapaisajista.com en app.js e index.html.

Para recepción automática se puede conectar un endpoint o servicio de formularios en prepareInquiry() de app.js. Las claves de un servicio deben ir en un backend, nunca en el JavaScript del navegador.

## Archivos

- index.html: estructura y contenido de portada y formulario.
- styles.css: sistema visual y adaptación a escritorio, tablet y móvil.
- app.js: navegación, iconos, filtros y formulario.
- data.js: contenido e imágenes de los proyectos.
- assets/: imágenes WebP, logo y fuentes.
- fonts.css: declaraciones locales de fuentes.
- server.mjs: servidor de desarrollo, no necesario en Vercel.
- vercel.json: configuración y rutas.

## Marca y contenidos

Paleta tomada del logo existente:

- Verde: #005729.
- Rosa: #c3004a.
- Lima: #83b019.

El verde más oscuro se utiliza en estados de interacción. El rosa y el lima se reservan para detalles y marcas gráficas, conservando contraste en textos y botones.

Los 26 proyectos, sus categorías, textos completos y fotografías se han recuperado de https://rosapaisajista.com/ y sus fichas el 2 de noviembre de 2026. Se incluyen las fotografías de los carruseles originales, además de las imágenes del cuerpo de las fichas. Los textos originales mantienen párrafos, listas, énfasis, enlaces y créditos; el formato se ha adaptado al nuevo diseño. Cada ficha conserva también una introducción breve editada para esta propuesta. Se distinguen anteproyectos, propuestas conceptuales, diseños y masterplans donde constan.

La portada conduce primero a los proyectos y después a las secciones del estudio, con una llamada principal al formulario al final. Los enlaces de privacidad apuntan a las páginas existentes. La web solo ofrece español. Todos los números de contacto abren WhatsApp.

Tipografías: DM Sans y DM Serif Display, de Google Fonts, con sus licencias SIL Open Font License en assets/.

## Tipografía y trayectoria

Cuerpo de lectura de 18 px en escritorio y 17 px en móvil; etiquetas y metadatos de al menos 14 px. DM Sans utiliza sus pesos reales 400, 500 y 600, y una cursiva local real para los nombres botánicos. Los titulares mantienen DM Serif Display regular con una escala más contenida. Se desactiva la síntesis artificial de pesos.

La franja de trayectoria se presenta como una secuencia de 2013, 2021 y 2022, horizontal en escritorio y vertical en móvil.

## Verificación

Se ha comprobado sintaxis, respuesta HTTP de rutas y recursos, integridad de las imágenes, filtros, galerías, navegación por teclado y todos los recorridos del formulario mediante una prueba de DOM. Se han comparado las 26 fichas con las originales para verificar que no falten textos ni imágenes.

La herramienta de navegador estaba desactivada al realizar esta versión local. La revisión visual final en escritorio y teléfono queda pendiente; las pruebas de DOM no verifican el renderizado.

# rosapaisajista-prototipado
