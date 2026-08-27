export const ukColors = {
  bg: "#0E0E0E",
  surf: "#161616",
  surf2: "#1E1E1E",
  white: "#FFFFFF",
  dim: "rgba(255,255,255,0.45)",
  dim2: "rgba(255,255,255,0.15)",
  rule: "rgba(255,255,255,0.10)",
  lime: "#A855F7",
  mag: "#E040FB",
  cyan: "#00E5FF",
} as const;

export const ukGradients = {
  lm: "linear-gradient(110deg,#A855F7 0%,#E040FB 100%)",
  mc: "linear-gradient(110deg,#E040FB 0%,#00E5FF 100%)",
  cl: "linear-gradient(110deg,#00E5FF 0%,#A855F7 100%)",
  holo: "linear-gradient(135deg,#E040FB,#00E5FF,#A78BFA,#A855F7,#E040FB)",
  chrome: "linear-gradient(160deg,#fff 0%,#c0c0c0 35%,#fff 55%,#888 100%)",
} as const;

export type UkGradient = keyof typeof ukGradients;

export const ukRadius = {
  sharp: 0,
  soft: 4,
  card: 8,
  chip: 40,
  circle: 9999,
} as const;

export const ukSpace = [4, 8, 12, 16, 20, 24, 32, 40, 64, 80, 100] as const;
