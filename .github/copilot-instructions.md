# Instrucciones para Agentes de IA — Albañiles Digitales (sitio estático)

Breve y práctico: este repo es un sitio estático pequeño (HTML + CSS). Aquí están las normas y los atajos que hacen a un agente productivo desde el primer cambio.

## Resumen rápido

- Punto de entrada: `index.html`.
- Recursos: `css/style.css` y la carpeta `img/`.
- No hay sistema de build ni dependencias registradas: tratar como web estática.

## Cómo previsualizar (PowerShell)

1. Abrir el directorio del proyecto y servirlo localmente:

```powershell
cd c:\David\albaniles_digitales\proyecto_html
python -m http.server 8000
# luego abrir http://localhost:8000 en el navegador
```

- Alternativa: usar la extensión Live Server de VS Code (usa el archivo `index.html`).

## Archivos y patrones clave (ejemplos)

- `index.html` — HTML semántico; buscar referencias a `css/style.css`.
- `css/style.css` — único fichero CSS global. Para cambios visuales, editar aquí.
- `img/` — colocar imágenes con rutas relativas: `<img src="img/foto.jpg" alt="Descripción">`.

Convenciones detectables:

- Nombres en minúsculas y con guiones: `mi-pagina.html`, `foto-equipo.jpg`.
- Mantener recursos agrupados por tipo (CSS en `css/`, imágenes en `img/`).

## Qué pedir al agente (instrucciones para solicitudes)

- Cuando pidas editar un archivo, especifica: archivo exacto (`index.html`), objetivo visual/texto, y si hay ejemplos (texto o imagen de referencia).
- Para añadir imágenes: sube el archivo a `img/` y proporciona el `alt` text. Ejemplo: `Añadir img/obra-1.jpg con alt "Reparación de fachada" y colocarlo en la sección <main>`.

## Reglas prácticas y límites (no inventar)

- No asumir frameworks, bundlers, o pipelines: si no hay `package.json`, `webpack`, `gulp`, etc., no los añadas sin instrucción.
- No crear rutas absolutas ni usar mayúsculas en archivos; usar rutas relativas (`img/mi-foto.jpg`).

## PRs / commits y pequeñas guías de estilo

- Hacer cambios atómicos (una responsabilidad por PR).
- Mensajes de commit breves y descriptivos: "Agregar imagen del equipo y alt" o "Corregir padding en header".

## Ejemplos rápidos

- Añadir una regla CSS simple en `css/style.css`:

```css
/* Comentario: cambiar header */
header {
  background: #f5f5f5;
  padding: 1rem;
}
```

- Insertar imagen en `index.html`:

  <img src="img/obra-1.jpg" alt="Colocación de azulejos - fase 1">

Si quieres que incorpore snippets listos (HTML accesible, reglas CSS base) o una checklist para PRs, dime cuál prefieres y lo añado.
