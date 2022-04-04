type Field = {
  name: string;
  dblabel: string;
  label: string;
  mandatory: boolean;
  quickcreate: boolean;
  summaryfield: boolean;
  headerfield: boolean;
  default: string;
  type: FieldType;
  isunique: boolean;
  nullable: boolean;
  editable: boolean;
  data: string;
};

type FieldType = {
  picklistValues?: Array<any>;
  defaultValue?: string;
  picklisttype?: string;
  name: string;
  length: number | string;
};

export type ModuleDescription = {
  label: string;
  name: string;
  createable: boolean;
  updateable: boolean;
  deleteable: boolean;
  retrieveable: boolean;
  fields: Array<Field>;
  inactivefields: Array<Field>;
  idPrefix: string;
  isEntity: boolean;
  allowDuplicates: boolean;
  closedStatesInfo: { status_field: string; status_values: Array<any> };
  labelFields: string;
  tools: {
    Import: boolean;
    Export: boolean;
    Merge: boolean;
    DuplicatesHandling: boolean;
    PrintTemplates: boolean;
    'Create List': boolean;
    'Send PDF for signing': boolean;
    Reopen: boolean;
    'Erase personal data': boolean;
    Decrypt: boolean;
  };
};
