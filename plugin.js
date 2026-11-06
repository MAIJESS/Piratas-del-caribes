// Piratas del Caribe — tema de Kino (apiVersion 18).
// El tema vive en kino-plugin.json (appThemes): son datos, no corren código ni red.
// Este archivo solo ofrece una pantalla de presentación con un botón para activar o desactivar el tema.

const THEME_ID = "piratas-caribe";

export async function screen({ activeTheme }) {
  const on = activeTheme === THEME_ID;
  return {
    type: "ElevatedButton",
    labelText: on ? "Desactivar Piratas del Caribe" : "Izar velas: activar Piratas del Caribe",
    labelTextEn: on ? "Turn off Pirates of the Caribbean" : "Set sail: turn on Pirates of the Caribbean",
    onPressed: { go: { useTheme: { theme: on ? null : THEME_ID } } }
  };
}

export async function screenEvent() {
  return null;
}
