export function isNonEmptyString(value: any){
  return typeof value === 'string' && value.trim().length > 0
}
