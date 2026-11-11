(() => {
  const pageKey = `${window.location.pathname}${window.location.search}`;
  const scrollKey = (key) => `yoga-scroll:${key}`;

  function saveScrollPosition() {
    try {
      sessionStorage.setItem(scrollKey(pageKey), String(window.scrollY));
    } catch (_) {
      // Navigation still works when browser storage is unavailable.
    }
  }

  if ("scrollRestoration" in history) history.scrollRestoration = "auto";

  document.addEventListener("click", (event) => {
    const backLink = event.target.closest("[data-history-back]");
    if (backLink) {
      event.preventDefault();
      let referrer;
      try {
        referrer = document.referrer ? new URL(document.referrer) : null;
      } catch (_) {
        referrer = null;
      }

      if (referrer?.origin === window.location.origin && history.length > 1) {
        const returnKey = `${referrer.pathname}${referrer.search}`;
        try {
          sessionStorage.setItem("yoga-restore-scroll", returnKey);
        } catch (_) {
          // Native browser restoration remains available.
        }
        history.back();
      } else {
        window.location.assign(backLink.href);
      }
      return;
    }

    const link = event.target.closest("a[href]");
    if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
    try {
      const destination = new URL(link.href, window.location.href);
      if (destination.origin === window.location.origin) saveScrollPosition();
    } catch (_) {
      // Ignore malformed or non-navigation links.
    }
  });

  window.addEventListener("pagehide", saveScrollPosition);
  window.addEventListener("pageshow", () => {
    try {
      if (sessionStorage.getItem("yoga-restore-scroll") !== pageKey) return;
      const savedY = Number(sessionStorage.getItem(scrollKey(pageKey)) || 0);
      sessionStorage.removeItem("yoga-restore-scroll");
      requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, savedY)));
    } catch (_) {
      // The fallback anchors still return to the correct section.
    }
  });
})();
