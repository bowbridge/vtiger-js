import { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import { EndPoint } from './base/endpoints';
import {
  ListTypeResponse,
  Me,
  VtigerApiResult,
  StandardListType,
} from './types';
import { VtigerQueryBuilder } from './vtiger-query-builder';
export class VTigerClient {
  private httpClient: AxiosInstance;

  constructor(axiosInstance: AxiosInstance, private debug: boolean) {
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

  public getAllLists = (): AxiosPromise<ListTypeResponse> => {
    return this.httpClient.get<ListTypeResponse>(EndPoint.listtypes);
  };

  /**
   *
   * @returns Authenticated user
   */
  public getMe = async (): Promise<AxiosResponse<VtigerApiResult<Me>>> => {
    return await this.httpClient.get(EndPoint.me);
  };

  /**
   *
   * @param record_id is a string of any  record id in the CRM
   * @returns a single object with the related values.
   */
  public retrieve = async (
    record_id: string
  ): Promise<AxiosResponse<VtigerApiResult<any>>> => {
    return await this.httpClient.get(`${EndPoint.retrieve}?id=${record_id}`);
  };

  /**
   *
   * @param data should be JSON stringified object contains the id
   * @returns the updated object with the success flag
   */
  public revise = async (
    data: string
  ): Promise<AxiosResponse<VtigerApiResult<any>>> => {
    return await this.httpClient.post(EndPoint.revise, { element: data });
  };

  /**
   *
   * @param data should be JSON stringified object contains the id with the mandatory fields.
   * @returns the updated object with the success flag.
   */
  public update = async (
    data: string | object
  ): Promise<AxiosResponse<VtigerApiResult<any>>> => {
    return await this.httpClient.post(EndPoint.update, {
      element: this._sanitaizeData(data),
    });
  };

  private _sanitaizeData = (data: string | object): string => {
    return typeof data === 'string' ? data : JSON.stringify(data);
  };
}
