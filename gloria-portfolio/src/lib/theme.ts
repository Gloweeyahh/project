export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function useTheme() {
  return { theme: 'dark' };
}
