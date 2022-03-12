import { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import { EndPoint } from './base/endpoints';
import { QueryBuilder } from './query-builder';
import { ListTypeResponse, SelectParams, Me, Result } from './types';
export class VTigerClient {
  private API: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.API = axiosInstance;
  }

  public select = async <T>(
    params: SelectParams<T>
  ): Promise<AxiosResponse<Result<T[]>>> => {
    const builder = new QueryBuilder<T>();

    const query = builder.select(params);

    return await this.API.get<{ success: boolean; result: T[] }>(
      EndPoint.query,
      {
        params: { query },
      }
    );
  };

  public getAllLists = (): AxiosPromise<ListTypeResponse> => {
    return this.API.get<ListTypeResponse>(EndPoint.listtypes);
  };

  public getMe = async (): Promise<AxiosResponse<Result<Me>>> => {
    return await this.API.get(EndPoint.me);
  };

  /**
   *
   * @param record_id is a string of any  record id in the CRM
   * @returns a single object with the related values.
   */
  public retrieve = async (
    record_id: string
  ): Promise<AxiosResponse<Result<any>>> => {
    return await this.API.get(`${EndPoint.retrieve}?id=${record_id}`);
  };

  /**
   *
   * @param data should be JSON stringified object contains the id
   * @returns the updated object with the success flag
   */
  public revise = async (data: string): Promise<AxiosResponse<Result<any>>> => {
    return await this.API.post(EndPoint.revise, { element: data });
  };

  /**
   *
   * @param data should be JSON stringified object contains the id with the mandatory fields.
   * @returns the updated object with the success flag.
   */
  public update = async (data: string): Promise<AxiosResponse<Result<any>>> => {
    return await this.API.post(EndPoint.update, { element: data });
  };
}
