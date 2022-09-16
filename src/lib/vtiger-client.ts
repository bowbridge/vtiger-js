import { AxiosInstance } from 'axios';
import { EndPoint } from './base/endpoints';
import {
  ListType,
  Me,
  VtigerApiResult,
  StandardListType,
  VTIGER_API_USAGE,
  VtigerApiResponse,
  InformationType,
} from './types';
import { ModuleDescription } from './types/meta';
import { VtigerClientHelper } from './vtiger-client-helpers';
import { VtigerQueryBuilder } from './vtiger-query-builder';
export class VTigerClient extends VtigerClientHelper {
  private httpClient: AxiosInstance;

  constructor(axiosInstance: AxiosInstance, private debug: boolean) {
    super();
    this.httpClient = axiosInstance;
  }

  /**
   *
   * @param module CRM module name
   * @returns
   */
  public from<T = any>(module: StandardListType): VtigerQueryBuilder<T> {
    return new VtigerQueryBuilder<T>(module, this.httpClient, this.debug);
  }

  /**
   *
   * @returns Details about the module accessible to users through this API.
   */
  public getAllLists = async (): Promise<VtigerApiResult<ListType>> => {
    return new Promise<VtigerApiResult<ListType>>(resolve => {
      this.httpClient
        .get<VtigerApiResponse<ListType>>(EndPoint.listtypes)
        .then(res => {
          resolve({
            api_usage: this._generateApiUsageObject(res),
            success: res.data.success,
            result: res.data.result,
          });
        })
        .catch(err => {
          resolve(this._returnErrorHandler(err));
        });
    });
  };

  /**
   *
   * @returns Authenticated user
   */
  public getMe = async (): Promise<VtigerApiResult<Me>> => {
    return new Promise<VtigerApiResult<Me>>(resolve => {
      this.httpClient
        .get<VtigerApiResponse<Me>>(EndPoint.me)
        .then(res => {
          resolve({
            ...res.data,
            api_usage: this._generateApiUsageObject(res),
          });
        })
        .catch(err => {
          resolve(this._returnErrorHandler(err));
        });
    });
  };

  /**
   *
   * @returns Current API Usage data
   */
  public getApiUsage = async (): Promise<VtigerApiResult<VTIGER_API_USAGE>> => {
    return new Promise<VtigerApiResult<VTIGER_API_USAGE>>(resolve => {
      this.httpClient
        .get(EndPoint.me)
        .then(res => {
          resolve({
            result: this._generateApiUsageObject(res),
            success: true,
            api_usage: this._generateApiUsageObject(res),
          });
        })
        .catch(err => {
          resolve(this._returnErrorHandler(err));
        });
    });
  };

  /**
   *
   * @returns Get Data from raw Query
   */
  public getFromQuery = async <T = any>(rawQuery: string): Promise<VtigerApiResult<T>> => {
    return new Promise<VtigerApiResult<T>>(resolve => {
      this.httpClient
        .get(`${EndPoint.query}?query=${rawQuery}`)
        .then(res => {
          resolve({
            ...res.data,
            api_usage: this._generateApiUsageObject(res),
          });
        })
        .catch(err => {
          resolve(this._returnErrorHandler(err));
        });
    });
  };


  /**
   *
   * @param record_id is a string of any  record id in the CRM
   * @returns a single object with the related values.
   */
  public retrieve = async <MODULE = any>(
    record_id: string
  ): Promise<VtigerApiResult<MODULE>> => {
    return new Promise<VtigerApiResult<MODULE>>(resolve => {
      this.httpClient
        .get<VtigerApiResponse<MODULE>>(`${EndPoint.retrieve}?id=${record_id}`)
        .then(res => {
          resolve({
            ...res.data,
            api_usage: this._generateApiUsageObject(res),
          });
        })
        .catch(err => {
          resolve(this._returnErrorHandler(err));
        });
    });
  };

  /**
   *
   * @param record_id is a string of any  record id in the CRM
   * @returns a single object with the related values.
   */
  public describe = async (
    module: StandardListType
  ): Promise<VtigerApiResult<ModuleDescription>> => {
    return new Promise<VtigerApiResult<ModuleDescription>>(resolve => {
      this.httpClient
        .get<VtigerApiResponse<ModuleDescription>>(
          `${EndPoint.describe}?elementType=${module}`
        )
        .then(res => {
          resolve({
            ...res.data,
            api_usage: this._generateApiUsageObject(res),
          });
        })
        .catch(err => {
          resolve(this._returnErrorHandler(err));
        });
    });
  };

  /**
   *
   * @param data should be JSON stringified object contains the id
   * @returns the updated object with the success flag
   */
  public create = async <MODULE = any>(
    module: StandardListType,
    data: string | object
  ): Promise<VtigerApiResult<MODULE>> => {
    return new Promise<VtigerApiResult<MODULE>>(resolve => {
      this.httpClient
        .post<VtigerApiResponse<MODULE>>(EndPoint.create, {
          elementType: module,
          element: this._sanitaizeData(data),
        })
        .then(res => {
          resolve({
            ...res.data,
            api_usage: this._generateApiUsageObject(res),
          });
        })
        .catch(err => {
          resolve(this._returnErrorHandler(err));
        });
    });
  };

  /**
   *
   * @param data should be JSON stringified object contains the id
   * @returns the updated object with the success flag
   */
  public revise = async <MODULE = any>(
    data: string | object
  ): Promise<VtigerApiResult<MODULE>> => {
    return new Promise<VtigerApiResult<MODULE>>(resolve => {
      this.httpClient
        .post<VtigerApiResponse<MODULE>>(EndPoint.revise, {
          element: this._sanitaizeData(data),
        })
        .then(res => {
          resolve({
            ...res.data,
            api_usage: this._generateApiUsageObject(res),
          });
        })
        .catch(err => {
          resolve(this._returnErrorHandler(err));
        });
    });
  };

  /**
   *
   * @param data should be JSON stringified object contains the id with the mandatory fields.
   * @returns the updated object with the success flag.
   */
  public update = async <MODULE = any>(
    data: string | object
  ): Promise<VtigerApiResult<MODULE>> => {
    return new Promise<VtigerApiResult<MODULE>>(resolve => {
      this.httpClient
        .post<VtigerApiResponse<MODULE>>(EndPoint.update, {
          element: this._sanitaizeData(data),
        })
        .then(res => {
          resolve({
            ...res.data,
            api_usage: this._generateApiUsageObject(res),
          });
        })
        .catch(err => {
          resolve(this._returnErrorHandler(err));
        });
    });
  };

  /**
   *
   * @param id Delete existing records by id
   * @returns
   */
  public delete = async (
    id: string
  ): Promise<VtigerApiResult<{ status: string }>> => {
    return new Promise<VtigerApiResult<{ status: string }>>(resolve => {
      this.httpClient
        .post<{
          success: boolean;
          result: { status: string };
        }>(EndPoint.delete, { id })
        .then(res => {
          resolve({
            ...res.data,
            api_usage: this._generateApiUsageObject(res),
          });
        })
        .catch(err => {
          resolve(this._returnErrorHandler(err));
        });
    });
  };

  /**
   *
   * @param module What relationship a module has with others can be obtained
   * @returns
   */
  public relatedTypes = async (
    module: StandardListType
  ): Promise<
    VtigerApiResult<{
      types: Partial<StandardListType[]>;
      information: Partial<InformationType>;
    }>
  > => {
    return new Promise<
      VtigerApiResult<{
        types: Partial<StandardListType[]>;
        information: Partial<InformationType>;
      }>
    >(resolve => {
      this.httpClient
        .get<
          VtigerApiResponse<{
            types: Partial<StandardListType[]>;
            information: Partial<InformationType>;
          }>
        >(`${EndPoint.relatedTypes}?elementType=${module}`)
        .then(res => {
          resolve({
            ...res.data,
            api_usage: this._generateApiUsageObject(res),
          });
        })
        .catch(err => {
          resolve(this._returnErrorHandler(err));
        });
    });
  };

  //GET endpoint/retrieve_related?id=record_id&relatedLabel=target_relationship_label&relatedType=target_moduleName

  public retrieveRelated = async <MODULE = any>(
    record_id: string,
    related_label: string,
    module: StandardListType
  ): Promise<VtigerApiResult<MODULE[]>> => {
    return new Promise<VtigerApiResult<MODULE[]>>(resolve => {
      this.httpClient
        .get<VtigerApiResponse<MODULE[]>>(
          `${EndPoint.retrieveRelated}?id=${record_id}&relatedLabel=${related_label}&relatedType=${module}`
        )
        .then(res => {
          resolve({
            ...res.data,
            api_usage: this._generateApiUsageObject(res),
          });
        })
        .catch(err => {
          resolve(this._returnErrorHandler(err));
        });
    });
  };

  /**
   *
   * @param sourceRecordId
   * @param relatedRecordId
   * @returns {success: true,  result: { status: "successful" }}
   */
  public deleteRelated = async (
    sourceRecordId: string,
    relatedRecordId: string
  ): Promise<VtigerApiResult<{ status: string }>> => {
    return new Promise<VtigerApiResult<{ status: string }>>(resolve => {
      this.httpClient
        .post<{
          success: boolean;
          result: { status: string };
        }>(EndPoint.deleteRelated, { sourceRecordId, relatedRecordId })
        .then(res => {
          resolve({
            ...res.data,
            api_usage: this._generateApiUsageObject(res),
          });
        })
        .catch(err => {
          resolve(this._returnErrorHandler(err));
        });
    });
  };

  private _sanitaizeData = (data: string | object): string => {
    return typeof data === 'string' ? data : JSON.stringify(data);
  };
}
