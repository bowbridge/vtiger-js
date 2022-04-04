export const EndPoint = Object.freeze({
  me: '/me',
  listtypes: '/listtypes?fieldTypeList=null',
  describe: '/describe',
  create: '/create',
  retrieve: '/retrieve',
  update: '/update',
  revise: '/revise',
  delete: '/delete',
  query: '/query',
  relatedTypes: '/relatedtypes',
  retrieveRelated: '/retrieve_related',

  //  ----- Todo -----
  queryRelated: '/query_related',
  deleteRelated: '/delete_related',
  addRelated: '/add_related',
  sync: 'sync',
  convertLead: '/convertlead',
  reOpen: '/reopen',
  tagsAdd: '/tags_add',
  tagsRetrieve: '/tags_retrieve',
  tagDelete: '/tag_delete',
  filesRetrieve: '/files_retrieve',
  lookup: '/lookup',
  getAccountHierarchy: '/get_account_hierarchy',
  search: '/lookup',
  decrypt: '/decrypt',
});
