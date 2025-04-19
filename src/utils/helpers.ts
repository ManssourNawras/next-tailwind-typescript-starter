export const isBrowser = () => typeof window !== 'undefined'

export const classNames = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(' ')
}

export const getLocalStorage = <T>(variableName: string): T | null => {
  if (typeof window !== 'undefined') {
    const requiredVar = localStorage.getItem(variableName)

    if (requiredVar) {
      try {
        return JSON.parse(requiredVar) as T
      } catch (error) {
        console.error(
          `Error parsing localStorage item "${variableName}":`,
          error
        )
        return null
      }
    }
  }
  return null
}

// ============ examples for getLocalStorage =============
// // Example 1: Fetching 'auth' data
// interface AuthData {
//     token: string;
//     user: { id: string; name: string };
// }

// const authData = getLocalStorage<AuthData>('auth');
// console.log(authData); // { token: 'abc123', user: { id: '1', name: 'John' } }

// // Example 2: Fetching a raw value
// const theme = getLocalStorage<string>('theme');
// console.log(theme); // 'dark'
// ============ end examples for getLocalStorage =============
