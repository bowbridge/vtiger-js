export type Role = {
  id: string
  rolename: string
  parentrole: string
  depth: number
  allowassignedrecordsto: boolean
  roletype: string
  primaryapp: string
  allowgroupassignedto: boolean
  rolerelatedgroups: string[]
}
