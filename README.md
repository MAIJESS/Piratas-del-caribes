# 🏴‍☠️ Piratas del Caribe — tema para Kino TV

Tema para **toda la app** de Kino (celular y TV): noche en alta mar, oro de tesoro y texto color pergamino. Incluye logo propio de Kino (wordmark con tricornio sobre la «O» y marca con calavera).

> Es un plugin de **solo temas**: los colores, formas y logos son datos en `kino-plugin.json`. No usa red (`"hosts": []`) y no pide permisos de datos.

## Requisitos

- **Kino 0.9.81 o posterior** (`apiVersion: 18`).
- Los bordes dorados (`*Border`, `colors.border`) se ven desde **Kino 0.9.82**; en 0.9.81 el tema funciona igual, solo sin bordes.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `kino-plugin.json` | Manifiesto y definición del tema (`appThemes`). |
| `plugin.js` | Pantalla de presentación con un botón para activar o desactivar el tema (`go.useTheme`). |
| `icon.png` | Ícono del plugin, 512×512 PNG (≈105 KB, el máximo permitido es 128 KB). |

## Instalar y activar

1. Sube la carpeta a un repositorio de GitHub (ver [Publicar](https://kinotvapp.github.io/kino-plugins/publish/)) e instálalo en Kino con su dirección `owner/repo`.
2. Ve a **Ajustes ▸ Apariencia** y elige **Piratas del Caribe** (hay una vista previa antes de **Usar este tema**).
3. Kino preguntará si quieres la **experiencia completa**: acéptala para ver esquinas redondeadas, sombras y efectos.
4. También puedes activarlo desde **Ajustes ▸ Plugins ▸ Piratas del Caribe ▸ Ver tema Piratas**.

## Paleta

| Token | Color | Uso |
|---|---|---|
| `accent` | `#D4A537` | Oro de tesoro |
| `onAccent` | `#1A1103` | Texto sobre el oro |
| `background` | `#060B10` → `#0B1B26` | Mar de noche (degradado) |
| `surface` / `surfaceHigh` | `#0E1A22` / `#16262F` | Tarjetas y paneles |
| `textPrimary` / `textSecondary` | `#F4EAD0` / `#B9AE92` | Pergamino |
| `focus` | `#F0CD6E` | Foco del TV |
| `border` | `#8A6A26` | Bronce envejecido |

Todos los pares cumplen las protecciones de legibilidad de Kino (contrastes calculados: texto ≥ 8:1, acento sobre fondo 8,7:1).

## Qué personaliza

- **Formas**: esquinas más rectas (8 dp) para un aire de madera y mapa; bordes finos en tarjetas, cabeceras y menús, y doble en diálogos.
- **Tipografía**: escala 1,05 con títulos a 1,1 (en el TV, 1,0).
- **Movimiento**: zoom de foco 1,08 (1,1 en TV) y fundido de 350 ms.
- **Reproductor**: botones circulares, botón de play más grande y barra de progreso más gruesa.
- **Logo**: wordmark «KINO» con tricornio dorado y marca circular con calavera.

## Lo que la persona puede ajustar

En **Apariencia ▸ Personalizar**: color de acento (oro, turquesa, plata, naranja ámbar), color de foco, redondeo de tarjetas (0–20), tamaño del texto (1,0–1,3) y el fondo.

## Probar en local

```bash
node sdk/validate.mjs .                                        # formato y advertencias (celular y TV)
node sdk/run.mjs --context '{"activeTheme":"piratas-caribe"}' . screen
node sdk/run.mjs . screenEvent activate --trigger tap
```

El kit está en el repositorio [kinotvapp/kino-plugins](https://github.com/kinotvapp/kino-plugins). Kino no dibuja colores en el kit: revisa el resultado en **Ajustes ▸ Apariencia ▸ vista previa**.

## Notas

- **Nunca cambies el `id`** del tema (`piratas-caribe`) después de publicar: de él cuelgan la elección y los ajustes de la gente.
- Si prefieres un plugin más simple, quita `capabilities` y el bloque `screen` del manifiesto y deja `plugin.js` con solo `export {};`.
- Para jugar con el logo de Kino en vez de reemplazarlo (Kino 0.9.82), puedes usar `logo.decor`: un sombrero sobre la «o» queda en y < −100.
- Recomendado: agrega `author` (y `creator`, tu usuario de Kino Social) al manifiesto antes de publicar.
- Un tema puede cobrar kinos con `price`; este es gratis.

## Créditos

«Pirates of the Caribbean» es una marca de Disney. Este es un tema de fans que solo usa un estilo visual propio (calavera, tricornio, oro y mar); no incluye imágenes, personajes ni material oficial de la franquicia.
