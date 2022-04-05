import { VTigerClient } from "./lib/vtiger-client"
import { getAxiosInstance } from "./lib/services/http"

// Standard Module Types
import { Account } from "./lib/types/modules/account"
import { Contact } from "./lib/types/modules/contact"
import { User } from "./lib/types/modules/user"
import { Asset } from "./lib/types/modules/asset"
import { Case } from "./lib/types/modules/case"
import { CompanyDetail } from "./lib/types/modules/company-detail"
import { Currency } from "./lib/types/modules/currency"
import { DocumentFolder } from "./lib/types/modules/document-folders"
import { Document } from "./lib/types/modules/document"
import { Email } from "./lib/types/modules/email"
import { EmailSequence } from "./lib/types/modules/email-sequence"
import { Emotion } from "./lib/types/modules/emotion"
import { Employee } from "./lib/types/modules/employee"
import { Event } from "./lib/types/modules/event"
import { Faq } from "./lib/types/modules/faq"
import { Group } from "./lib/types/modules/group"
import { HelpDesk } from "./lib/types/modules/helpdesk"
import { Inbox } from "./lib/types/modules/inbox"
import { Invoice } from "./lib/types/modules/Invoice"
import { JourneyTemplate } from "./lib/types/modules/journey-template"
import { LineItem } from "./lib/types/modules/line-item"
import { ModComment } from "./lib/types/modules/mod-comments"
import { Payment } from "./lib/types/modules/payment"
import { Potential } from "./lib/types/modules/potential"
import { PriceBook } from "./lib/types/modules/pricebook"
import { PrintTemplate } from "./lib/types/modules/print-templates"
import { ProductTax } from "./lib/types/modules/product-tax"
import { Product } from "./lib/types/modules/product"
import { PSLineItem } from "./lib/types/modules/ps-line-item"
import { PurchaseOrder } from "./lib/types/modules/purchase-order"
import { Quote } from "./lib/types/modules/quote"
import { Role } from "./lib/types/modules/role"
import { SalesOrder } from "./lib/types/modules/sales-order"
import { ServiceContract } from "./lib/types/modules/service-contract"
import { SLA } from "./lib/types/modules/sla"
import { Tax } from "./lib/types/modules/tax"
import { WatchPoint } from "./lib/types/modules/watch-point"
import { VTIGER_API_USAGE } from "./lib/types"


export type {
  Account,
  Asset,
  Case,
  CompanyDetail,
  Contact,
  Currency,
  DocumentFolder,
  Document,
  EmailSequence,
  Email,
  Emotion,
  Employee,
  Event,
  Faq,
  Group,
  HelpDesk,
  Inbox,
  Invoice,
  JourneyTemplate,
  LineItem,
  ModComment,
  Payment,
  Potential,
  PriceBook,
  PrintTemplate,
  ProductTax,
  Product,
  PSLineItem,
  PurchaseOrder,
  Quote,
  Role,
  SalesOrder,
  ServiceContract,
  SLA,
  Tax,
  User,
  WatchPoint,
  VTIGER_API_USAGE,
  
}

/**
 * 
 * @param url vtiger application url
 * @param username API username
 * @param accesskey API accesskey
 * @returns VTigerClient Instance
 */
const createClient = (
  url: string,
  username: string,
  accesskey: string,
  debug?: boolean
): VTigerClient => {

  let debugStatus = false
  
  if(debug) {
    debugStatus =debug
  }
  return new VTigerClient(getAxiosInstance(url, username, accesskey), debugStatus)
}

export {
  createClient, VTigerClient 
}
