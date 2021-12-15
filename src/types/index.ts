export type VTigerApiError = {
  message: string
  code: number
}

export type InformationType = Record<
  StandardListType,
  { isEntity: boolean; label: string; singular: string }
>

export type ListTypeResponse = {
  success: boolean
  result: {
    types: StandardListType[]
    information: InformationType
  }
}

export type StandardListType =
  | "Accounts"
  | "Assets"
  | "Calendar"
  | "Cases"
  | "CompanyDetails"
  | "Contacts"
  | "Currency"
  | "DocumentFolders"
  | "Documents"
  | "EmailCampaigns"
  | "Emails"
  | "Events"
  | "Faq"
  | "Groups"
  | "Potentials"
  | "Products"
  | "HelpDesk"
  | "PriceBooks"
  | "Quotes"
  | "PurchaseOrder"
  | "SalesOrder"
  | "Invoice"
  | "Users"
  | "ServiceContracts"
  | "ModComments"
  | "SLA"
  | "PrintTemplates"
  | "EventForms"
  | "Inbox"
  | "Forecast"
  | "Approvals"
  | "Employees"
  | "PSLineItems"
  | "Reactions"
  | "JourneyTemplates"
  | "Payments"
  | "PhoneCalls"
  | "EmailSequence"
  | "Emotions"
  | "Esign"
  | "Import"
  | "CreditNotes"
  | "Reviews"
  | "WatchPoints"
  | "WebPages"
  | "Consents"
  | "LineItem"
  | "Tax"
  | "ProductTaxes"
  | "Roles"

export type Me = {
  user_name: string
  user_type: string
  roleid: string
  reports_to_id: string
  user_primary_group: string
  language: string
  is_admin: string
  status: string
  end_hour: string
  first_name: string
  last_name: string
  title: string
  department: string
  email1: string
  secondaryemail: string
  email2: string
  phone_home: string
  phone_work: string
  phone_mobile: string
  phone_other: string
  phone_fax: string
  description: string
  theme: string
  rowheight: string
  learning_score: number
  userlabel: string
  address_street: string
  address_city: string
  address_state: string
  address_country: string
  address_postalcode: number
  asterisk_extension: string
  currency_id: number
  display_preference_currency: number
  currency_grouping_pattern: string
  currency_decimal_separator: string
  currency_grouping_separator: string
  currency_symbol_placement: string
  no_of_currency_decimals: number
  truncate_trailing_zeros: number
  currency_format: string
  number_format: string
  dayoftheweek: string
  start_hour: string
  date_format: string
  hour_format: number
  time_zone: string
  activity_view: string
  callduration: number
  othereventduration: number
  defaulteventstatus: string
  defaultactivitytype: string
  reminder_interval: string
  calendarsharedtype: string
  defaultcalendarview: string
  taskduration: string
  business_hours: number
  defaultlandingpage: string
  collapsemodulemenu: number
  default_record_view: string
  leftpanelhide: number
  internal_mailer: number
  layout: string
  darkmode: boolean
  display_name_format: string
  imagename: string
  signature: string
  signature_before_quoted_text: boolean
  currency_name: string
  currency_code: string
  currency_symbol: string
  conv_rate: string
  id: string
}

export type FindParams<T> = {
  from: StandardListType
  columns?: (keyof T)[]
  where?: {
    column: keyof T
    like: string
  }
  limit?: number
}

export type FindOneParams<T> = {
  id: string
  from: StandardListType
  columns?: (keyof T)[]
}

export type Result<T> = {
  success: boolean
  result: T
}
