window.INSIDE_FLOW_RECORDINGS = [
  { id: "TsgYJ7oOCU8", title: "Йога в потоке. Флоу", duration: "3:30" },
  { id: "qEVGqXRs3io", title: "Human — Rag'n'Bone Man", duration: "3:17" },
  { id: "ONl2TzVywWk", title: "My Heart Will Go On", duration: "5:06" },
  { id: "Plm1yKX4PLQ", title: "Dreamer — LP", duration: "3:22" },
  { id: "0aHrdy41IsM", title: "Zombie — The Cranberries", duration: "4:55" },
  { id: "4cy6aPOsNjo", title: "Revolution — UNSECRET feat. Ruelle", duration: "4:28" },
  { id: "jTZ2XetGAog", title: "Human — Rag'n'Bone Man · другая запись", duration: "3:17" }
].map((flow) => ({
  ...flow,
  thumbnail: `https://i.ytimg.com/vi/${flow.id}/hqdefault.jpg`,
  url: `https://www.youtube.com/watch?v=${flow.id}&list=PLsohTQgxwCd0YOTB8znKTmwpbhH9a9XtN`
}));
