import { AxiosInstance, AxiosResponse } from 'axios';
import { EndPoint } from './base/endpoints';
import { FilterOperator, VtigerApiResult } from './types';
import { VtigerClientHelper } from './vtiger-client-helpers';

export class VtigerFilterBuilder<T> extends VtigerClientHelper<T> {
  constructor(
    private query: string,
    private httpClient: AxiosInstance,
    private debug: boolean
  ) {
    super();
  }

  async get(): Promise<AxiosResponse<VtigerApiResult<T[]>>> {
    const query = `${this.query};`;
    if (this.debug) {
      console.log(query);
    }

    return new Promise<AxiosResponse<VtigerApiResult<T[]>>>(resolve => {
      this.httpClient
        .get<{ success: boolean; result: T[] }>(EndPoint.query, {
          params: { query },
        })
        .then(res => {
          resolve(res);
        });
    });
  }

  /**
   *
   * @param field key of the field
   * @param operator '<' | '>' | '<=' | '>=' | '=' | '!=' | 'like'
   * @param value filter value as string
   * @returns
   */
  where(field: keyof T, operator: FilterOperator, value: string) {
    if (operator === 'like' && !value.includes('%')) {
      value = `%${value}%`;
    }
    this.query = `${this.query} where ${field} ${operator} '${value}'`;
    return this;
  }
}
