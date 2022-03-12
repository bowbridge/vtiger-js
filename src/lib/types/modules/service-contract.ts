export type ServiceContract = {
  subject: string
  contract_no: string
  sc_related_to: string
  assigned_user_id: string
  contract_type: string
  tracking_unit: string
  start_date: string
  total_units: number
  due_date: string
  used_units: number
  end_date: string
  contract_status: string
  planned_duration: number
  contract_priority: string
  actual_duration: number
  progress: string
  createdtime: string
  modifiedtime: string
  modifiedby: string
  cf_837: string
  created_user_id: string
  contactid: string
  source: string
  starred: string
  tags: string
  record_currency_id: string
  record_conversion_rate: number
  remaining_units: number
  cf_servicecontracts_reseller: string
  cf_servicecontracts_salesorder: string
  cf_send_notification: string
  id: string
  isclosed: boolean
  record_currency_symbol: string | null
}
