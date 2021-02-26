import { SingaporeAddress, UnformattedAddress } from "./address"
import { CodeAndDesc, MyInfoAttribute, MyInfoField, MyInfoNotApplicable, NumberValue, StringValue } from "./base"

type HdbOwnershipCustomFields = {
    noofowners: NumberValue
    address: SingaporeAddress | UnformattedAddress
    hdbtype: CodeAndDesc
    leasecommencementdate: StringValue
    termoflease: NumberValue
    dateofpurchase: StringValue
    dateofownershiptransfer: StringValue
    loangranted: NumberValue
    originalloanrepayment: NumberValue
    balanceloanrepayment: {
      years: NumberValue
      months: NumberValue
    }
    outstandingloanbalance: NumberValue
    monthlyloaninstalment: NumberValue
  }

export type MyInfoHdbOwnership = MyInfoField<HdbOwnershipCustomFields> | MyInfoNotApplicable
export type HdbOwnershipScope = `${MyInfoAttribute.HDBOwnership}.${keyof HdbOwnershipCustomFields}`
