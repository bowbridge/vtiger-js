import { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import { EndPoint } from './endpoint';
import { QueryBuilder } from './query-builder';
import { ListTypeResponse, SelectParams, Me, Result } from '../types';
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
}
