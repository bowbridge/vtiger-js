import { AxiosInstance } from 'axios';
import { StandardListType } from './types';
import { VtigerFilterBuilder } from './vtiger-filter-builder';

export class VtigerQueryBuilder<T> {
  constructor(
    private moudle: StandardListType,
    private httpClient: AxiosInstance,
    private debug: boolean
  ) {}

  select(fields?: Array<keyof T>): VtigerFilterBuilder<T> {
    const query = `select ${this._handleFields(fields)} from ${this.moudle}`;

    return new VtigerFilterBuilder<T>(query, this.httpClient, this.debug);
  }

  private _handleFields = (fields?: Array<keyof T>): string => {
    return fields ? fields.join() : '*';
  };
}
