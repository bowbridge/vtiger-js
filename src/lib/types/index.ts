export type VTigerApiError = {
  message: string;
  code: number;
};

export type InformationDetails = {
  isEntity: boolean | string;
  label: string;
  singular?: string;
  name?: string;
  translated_label?: string;
  relation_id?: string;
  actions?: string;
};

export type InformationType = Record<
  StandardListType | string,
  InformationDetails
>;

export type ListType = {
  types: StandardListType[];
  information: InformationType;
};

export const LIST_TYPES = [
  'Calendar',
  'Accounts',
  'Contacts',
  'Potentials',
  'Products',
  'Documents',
  'Emails',
  'Faq',
  'PriceBooks',
  'Quotes',
  'PurchaseOrder',
  'SalesOrder',
  'Invoice',
  'Events',
  'Users',
  'ServiceContracts',
  'Assets',
  'ModComments',
  'SLA',
  'Cases',
  'PrintTemplates',
  'EventForms',
  'Inbox',
  'Forecast',
  'Approvals',
  'Employees',
  'PSLineItems',
  'Reactions',
  'Payments',
  'PhoneCalls',
  'EmailSequence',
  'Import',
  'CreditNotes',
  'Reviews',
  'WatchPoints',
  'Consents',
  'ProcessDesigner',
  'EmailTemplates',
  'AppDesigner',
  'vtcmcertificates',
  'vtcmsids',
  'vtcmconfigurations',
  'vtcmrealms',
  'vtcmscanclusters',
  'vtcmauthenticationdomains',
  'vtcmlicenseassignments',
  'vtcmaccesscontrols',
  'Groups',
  'Currency',
  'DocumentFolders',
  'CompanyDetails',
  'LineItem',
  'Tax',
  'ProductTaxes',
  'Roles',
] as const;
export type StandardListType = typeof LIST_TYPES[number];

export type Me = {
  user_name: string;
  user_type: string;
  roleid: string;
  reports_to_id: string;
  user_primary_group: string;
  language: string;
  is_admin: string;
  status: string;
  end_hour: string;
  first_name: string;
  last_name: string;
  title: string;
  department: string;
  email1: string;
  secondaryemail: string;
  email2: string;
  phone_home: string;
  phone_work: string;
  phone_mobile: string;
  phone_other: string;
  phone_fax: string;
  description: string;
  theme: string;
  rowheight: string;
  learning_score: number;
  userlabel: string;
  address_street: string;
  address_city: string;
  address_state: string;
  address_country: string;
  address_postalcode: number;
  asterisk_extension: string;
  currency_id: number;
  display_preference_currency: number;
  currency_grouping_pattern: string;
  currency_decimal_separator: string;
  currency_grouping_separator: string;
  currency_symbol_placement: string;
  no_of_currency_decimals: number;
  truncate_trailing_zeros: number;
  currency_format: string;
  number_format: string;
  dayoftheweek: string;
  start_hour: string;
  date_format: string;
  hour_format: number;
  time_zone: string;
  activity_view: string;
  callduration: number;
  othereventduration: number;
  defaulteventstatus: string;
  defaultactivitytype: string;
  reminder_interval: string;
  calendarsharedtype: string;
  defaultcalendarview: string;
  taskduration: string;
  business_hours: number;
  defaultlandingpage: string;
  collapsemodulemenu: number;
  default_record_view: string;
  leftpanelhide: number;
  internal_mailer: number;
  layout: string;
  darkmode: boolean;
  display_name_format: string;
  imagename: string;
  signature: string;
  signature_before_quoted_text: boolean;
  currency_name: string;
  currency_code: string;
  currency_symbol: string;
  conv_rate: string;
  id: string;
};

export type VtigerApiResult<T> = {
  api_usage: VTIGER_API_USAGE;
  success: boolean;
  result: T | null;
  error?: VTigerApiError;
};

export type VtigerApiResponse<T> = {
  success: boolean;
  result: T;
};

export type FilterOperator =
  | '<'
  | '>'
  | '<='
  | '>='
  | '='
  | '!='
  | 'like'
  | 'in';

export type SortDirection = 'asc' | 'desc';

export type VTIGER_API_USAGE = {
  dailylimit: string;
  remaining: string;
  reset: string;
  floodcontrolMinutelimit: string;
  floodcontrolRemaining: string;
  floodcontrolReset: string;
  vtigerVersion: string;
};
