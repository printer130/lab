export const unique = ({ id, labName, ownerCi }) =>
  `${id}${labName.replace(/ /g, '').slice(0, 4)}${ownerCi}`
