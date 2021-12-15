import { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import { EndPoint } from './endpoint';
import { QueryBuilder } from './query-builder';
import { ListTypeResponse } from '../types';
import { Me } from '../types';
import { FindOneParams, FindParams } from '../types';
import { Result } from '../types';

export class VTigerClient {
  private API: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.API = axiosInstance;
  }

  public find = async <T>(
    params: FindParams<T>
  ): Promise<AxiosResponse<Result<T[]>>> => {
    const builder = new QueryBuilder<T>();

    const query = builder.find(params);

    return await this.API.get<{ success: boolean; result: T[] }>(
      EndPoint.query,
      {
        params: { query },
      }
    );
  };

  public findOne = async <T>(
    params: FindOneParams<T>
  ): Promise<AxiosResponse<Result<T>>> => {
    const builder = new QueryBuilder<T>();

    const query = builder.findOne(params);

    return await this.API.get(EndPoint.query, {
      params: {
        query,
      },
    });
  };

  public getAllLists = (): AxiosPromise<ListTypeResponse> => {
    return this.API.get<ListTypeResponse>(EndPoint.listtypes);
  };

  public getMe = async (): Promise<AxiosResponse<Result<Me>>> => {
    return await this.API.get(EndPoint.me);
  };
}
