
export function padronizarStrings(string) {
  return string.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
}