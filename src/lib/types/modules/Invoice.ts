export type Invoice = {
  subject: string
  salesorder_id: string
  customerno: string
  invoice_no: string
  contact_id: string
  invoicedate: string
  duedate: string
  vtiger_purchaseorder: string
  exciseduty: string
  hdnSubTotal: string
  salescommission: number
  hdnGrandTotal: number
  hdnTaxType: string
  account_id: string
  invoicestatus: string
  assigned_user_id: string
  createdtime: string
  modifiedtime: string
  currency_id: string
  conversion_rate: number
  modifiedby: string
  pre_tax_total: number
  received: number
  balance: number
  created_user_id: string
  potential_id: string
  source: string
  starred: string
  tags: string
  projectid: string
  record_currency_id: string
  record_conversion_rate: string
  quote_id: string
  sub_id: string
  isclosed: boolean
  applied_credits: string
  cf_invoice_apcontact: string
  bill_country: string
  ship_country: string
  bill_street: string
  ship_street: string
  bill_pobox: string
  ship_pobox: string
  bill_city: string
  ship_city: string
  bill_state: string
  ship_state: string
  bill_code: string
  ship_code: string
  cf_invoice_billingemailaddress: string
  terms_conditions: string
  description: string
  productid: string
  quantity: number
  listprice: number
  comment: string
  hdnDiscountAmount: number
  hdnDiscountPercent: number
  tax1: number
  tax2: number
  txtAdjustment: number
  tax3: number
  hdnS_H_Percent: number
  tax4: number
  hdnS_H_Amount: number
  image: string
  purchase_cost: number
  margin: number
  region_id: string
  netprice: number
  pricebook_id: string
  section_no: number
  section_name: string
  margin_percentage: number
  markup_percentage: number
  purchase_cost_total: number
  margin_total: number
  margin_percentage_total: number
  markup_percentage_total: number
  billing_type: string
  duration: number
  unit_purchase_cost: number
  cf_787: string
  paidamount: number
  openamount: number
  id: string
  record_currency_symbol: string | null
}
