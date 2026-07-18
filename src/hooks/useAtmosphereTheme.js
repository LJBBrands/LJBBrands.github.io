import { useEffect, useMemo, useState } from "react";
import {
  ATMOSPHERE_THEME_IDS,
  STORAGE_KEY,
  resolveStoredThemeId,
  themes,
} from "../data/awyContent";

export function useAtmosphereTheme() {
  const [themeId, setThemeId] = useState(themes[0].id);

  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem(STORAGE_KEY);
      const resolved = resolveStoredThemeId(savedTheme);
      if (resolved) {
        setThemeId(resolved);
        if (savedTheme !== resolved) {
          window.localStorage.setItem(STORAGE_KEY, resolved);
        }
        return;
      }

      const availableThemes = themes.filter((item) =>
        ATMOSPHERE_THEME_IDS.includes(item.id)
      );
      const randomTheme =
        availableThemes[Math.floor(Math.random() * availableThemes.length)] ??
        themes[0];
      setThemeId(randomTheme.id);
      window.localStorage.setItem(STORAGE_KEY, randomTheme.id);
    } catch {
      setThemeId(themes[0].id);
    }
  }, []);

  const theme = useMemo(
    () => themes.find((item) => item.id === themeId) ?? themes[0],
    [themeId]
  );

  const cycleTheme = () => {
    const availableThemes = themes.filter((item) =>
      ATMOSPHERE_THEME_IDS.includes(item.id)
    );
    const currentIndex = availableThemes.findIndex(
      (item) => item.id === theme.id
    );
    const nextTheme =
      availableThemes[
        (currentIndex === -1 ? 0 : currentIndex + 1) % availableThemes.length
      ];

    setThemeId(nextTheme.id);

    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme.id);
    } catch {
      // no-op
    }
  };

  return { theme, cycleTheme };
}
