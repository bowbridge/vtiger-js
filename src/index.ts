import { VTigerClient } from "./lib/vtiger-client"
import { getAxiosInstance } from "./lib/http"

// Standard Module Types
import { Account } from "./types/modules/account"
import { Contact } from "./types/modules/contact"
import { User } from "./types/modules/user"
import { Asset } from "./types/modules/asset"
import { Case } from "./types/modules/case"
import { CompanyDetail } from "./types/modules/company-detail"
import { Currency } from "./types/modules/currency"
import { DocumentFolder } from "./types/modules/document-folders"
import { Document } from "./types/modules/document"
import { Email } from "./types/modules/email"
import { EmailSequence } from "./types/modules/email-sequence"
import { Emotion } from "./types/modules/emotion"
import { Employee } from "./types/modules/employee"
import { Event } from "./types/modules/event"
import { Faq } from "./types/modules/faq"
import { Group } from "./types/modules/group"
import { HelpDesk } from "./types/modules/helpdesk"
import { Inbox } from "./types/modules/inbox"
import { Invoice } from "./types/modules/Invoice"
import { JourneyTemplate } from "./types/modules/journey-template"
import { LineItem } from "./types/modules/line-item"
import { ModComment } from "./types/modules/mod-comments"
import { Payment } from "./types/modules/payment"
import { Potential } from "./types/modules/potential"
import { PriceBook } from "./types/modules/pricebook"
import { PrintTemplate } from "./types/modules/print-templates"
import { ProductTax } from "./types/modules/product-tax"
import { Product } from "./types/modules/product"
import { PSLineItem } from "./types/modules/ps-line-item"
import { PurchaseOrder } from "./types/modules/purchase-order"
import { Quote } from "./types/modules/quote"
import { Role } from "./types/modules/role"
import { SalesOrder } from "./types/modules/sales-order"
import { ServiceContract } from "./types/modules/service-contract"
import { SLA } from "./types/modules/sla"
import { Tax } from "./types/modules/tax"
import { WatchPoint } from "./types/modules/watch-point"

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
}

const createClient = (
  url: string,
  username: string,
  accesskey: string
): VTigerClient => {
  return new VTigerClient(getAxiosInstance(url, username, accesskey))
}

export {
  createClient, VTigerClient
}
