import { AxiosInstance } from 'axios';
import { StandardListType } from './types';
import { VtigerClientHelper } from './vtiger-client-helpers';
import { VtigerFilterBuilder } from './vtiger-filter-builder';

export class VtigerQueryBuilder<T> extends VtigerClientHelper<T> {
  constructor(
    private moudle: StandardListType,
    private httpClient: AxiosInstance,
    private debug: boolean
  ) {
    super();
  }

  select(fields?: Array<keyof T>): VtigerFilterBuilder<T> {
    const query = `select ${this._handleFields(fields)} from ${this.moudle}`;

    return new VtigerFilterBuilder<T>(query, this.httpClient, this.debug);
  }
}
