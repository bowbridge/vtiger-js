export type Payment = {
  modifiedby: string
  paymentsno: string
  related_to: string
  relatedcontact: string
  relatedorganization: string
  amount: string
  amount_currency_value: number
  paymentsstatus: string
  paymenttype: string
  autopay: string
  retrycounter: string
  paymentsmode: string
  datereceived: string
  created_user_id: string
  assigned_user_id: string
  createdtime: string
  modifiedtime: string
  source: string
  starred: string
  tags: string
  available_credits: string
  available_credits_currency_value: string
  record_currency_id: string
  record_conversion_rate: string
  sub_id: string
  isclosed: boolean
  description: string
  id: string
  record_currency_symbol: string | null
}
