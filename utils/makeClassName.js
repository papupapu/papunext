export default function makeClassName(clsArray) {
  if (!Array.isArray(clsArray)) {
    return null;
  }
  return clsArray.filter(Boolean).join(' ').trim() || null;
}
