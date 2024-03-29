import { AxiosInstance } from 'axios';
import { StandardListType } from './types';
import { VtigerFilterBuilder } from './vtiger-filter-builder';

export class VtigerQueryBuilder<T> {
  constructor(
    private module: StandardListType,
    private httpClient: AxiosInstance,
    private debug: boolean
  ) {}

  select(fields?: Array<keyof T> | "count(*)"): VtigerFilterBuilder<T> {
    const query = `select ${this._handleFields(fields)} from ${this.module}`;

    return new VtigerFilterBuilder<T>(query, this.httpClient, this.debug);
  }

  private _handleFields = (fields?: Array<keyof T> | "count(*)"): string => {
    if (fields) {
      return fields === "count(*)" ? fields : fields.join();
    }

    return '*';
  };
}
