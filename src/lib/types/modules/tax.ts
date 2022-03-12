export type Tax = {
  id: string
  taxname: string
  taxlabel: string
  percentage: number
  deleted: boolean
  method: string
  type: string
  compoundon: string[]
  regions: string[]
}
