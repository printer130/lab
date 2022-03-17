import { unique } from 'utils/unique'

export const normalizedReceipts = ({ receipts }) =>
  receipts.map(item => {
    return {
      cuiid: item.cuiid,
      id: item.id,
      createdAt: +new Date(item.createdAt),
      itotal: item.itotal,
      total: item.total,
      discount: item.discount,
      indebt: item.indebtList,
      saldo: item.saldo,
      unique: unique({
        labName: item.labName,
        ownerCi: item.ownerCi,
        id: item.id,
        cuiid: item.cuiid
      }),

      labName: item.labName,
      ownerCi: item.owner.ci,

      fullName: item.owner.fullName,
      birth: +new Date(item.owner.birth),
      nit: item.owner.nit,
      phone: item.owner.phone,
      sex: item.owner.sex,
      doctor: item.owner.doctor
    }
  })
