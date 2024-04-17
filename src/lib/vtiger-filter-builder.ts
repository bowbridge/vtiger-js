import { AxiosInstance } from 'axios';
import { EndPoint } from './base/endpoints';
import { FilterOperator, SortDirection, VtigerApiResult } from './types';
import { VtigerClientHelper } from './vtiger-client-helpers';

export class VtigerFilterBuilder<T> extends VtigerClientHelper {
  constructor(
    private query: string,
    private httpClient: AxiosInstance,
    private debug: boolean
  ) {
    super();
  }

  async get(): Promise<VtigerApiResult<T[]>> {
    const query = `${this.query};`;
    if (this.debug) {
      console.log(query);
    }

    return new Promise<VtigerApiResult<T[]>>(resolve => {
      this.httpClient
        .get<{ success: boolean; result: T[] }>(EndPoint.query, {
          params: { query },
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
  }

  /**
   *
   * @param field key of the field
   * @param operator '<' | '>' | '<=' | '>=' | '=' | '!=' | 'like' | 'in'
   * @param value filter value as string
   * @returns
   */
  where(field: keyof T, operator: FilterOperator, value: string) {
    this.query = `${this.query} where ${String(
      field
    )} ${operator} ${this._handleValue(operator, value)}`;
    return this;
  }

  /**
   *
   * @param field key of the field
   * @param operator '<' | '>' | '<=' | '>=' | '=' | '!=' | 'like' | 'in'
   * @param value filter value as string
   * @returns
   */
  and(field: keyof T, operator: FilterOperator, value: string) {
    this.query = `${this.query} and ${String(
      field
    )} ${operator} ${this._handleValue(operator, value)}`;
    return this;
  }

  /**
   *
   * @param field key of the field
   * @param operator '<' | '>' | '<=' | '>=' | '=' | '!=' | 'like' | 'in'
   * @param value filter value as string
   * @returns
   */
  or(field: keyof T, operator: FilterOperator, value: string) {
    this.query = `${this.query} or ${String(
      field
    )} ${operator} ${this._handleValue(operator, value)}`;
    return this;
  }

  /**
   *
   * @param field key of the field
   * @param direction 'asc' | 'desc'
   * @returns
   */
  orderBy(field: keyof T, direction: SortDirection = 'asc') {
    this.query = `${this.query} order by ${String(field)} ${direction}`;
    return this;
  }

  /**
   * @param rowCount representing count
   * @param offset representing offset
   * @returns
   */
  limit(rowCount: number = 100, offset: number = 0) {
    if (rowCount < 0) {
      rowCount = 100;
    }

    if (offset < 0) {
      offset = 0;
    }

    if (offset) {
      this.query = `${this.query} limit ${offset}, ${rowCount}`;
    } else {
      this.query = `${this.query} limit ${rowCount}`;
    }
    return this;
  }

  private _handleValue(operator: FilterOperator, value: string) {
    if (operator === 'like' && !value.includes('%')) {
      value = `%${value}%`;
    }
    if (operator === 'in') {
      const result = value
        .split(',')
        .map(value => `'${value}'`)
        .join(',');
      return `(${result})`;
    }
    return `'${value}'`;
  }
}
