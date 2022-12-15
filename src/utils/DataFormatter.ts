export function getCurrentTimeFileName(fileName: string): string {
  return `${new Date().getMilliseconds()}_${fileName}.json`;
}
