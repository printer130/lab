export const unique = ({ id, labName, ownerCi, cuiid }) =>
  `${cuiid.slice(4, 8)}${labName.replace(/ /g, '').slice(1, 4)}${ownerCi.slice(
    2,
    5
  )}-${id}`
