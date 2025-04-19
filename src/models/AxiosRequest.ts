export interface RequestData {
  headers?: Record<string, string>
  params?: Record<string, unknown> //any
  data?: Record<string, unknown> //  any
  responseType?:
    | 'json'
    | 'blob'
    | 'document'
    | 'arraybuffer'
    | 'stream'
    | 'text'
}