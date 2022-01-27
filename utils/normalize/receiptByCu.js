export const normalizedReceiptByCu = ({ receiptFinded }) => ({
  cuiid: receiptFinded.cuiid,
  id: receiptFinded.id,
  json: receiptFinded.json,
  createdAt: +new Date(receiptFinded.createdAt),
  saldo: receiptFinded.saldo,
  itotal: receiptFinded.itotal,
  total: receiptFinded.total,
  updatedAt: +new Date(receiptFinded.updatedAt),
  labName: receiptFinded.labName,
  ownerCi: receiptFinded.ownerCi,
  indebtList: receiptFinded.indebtList,
  owner: {
    id: receiptFinded.owner.id,
    fullName: receiptFinded.owner.fullName,
    birth: +new Date(receiptFinded.owner.birth),
    sex: receiptFinded.owner.sex
  }
})
