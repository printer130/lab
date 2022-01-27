export const fetcher = (...args) =>
  window.fetch(...args).then(res => res.json())
