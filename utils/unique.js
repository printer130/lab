export const unique = ({ id, labName, ownerCi, cuiid }) =>
  `${cuiid.slice(4, 8)}${labName.replace(/ /g, '').slice(0, 4)}${ownerCi.slice(
    0,
    4
  )}-${id}`
