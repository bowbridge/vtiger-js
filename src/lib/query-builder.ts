import { SelectParams } from './types';

export class QueryBuilder<T> {
  public select = (params: SelectParams<T>): string => {
    const { from } = params;

    const query = `select ${this._handleFields(
      params
    )} from ${from}${this._handleWhere(params)}${this._handleLimit(params)};`;

    return query;
  };

  _handleFields = (data: Pick<SelectParams<T>, 'fields'>): string => {
    const fields = data.fields as string[];
    return fields ? fields.join() : '*';
  };

  _handleLimit = (data: Pick<SelectParams<T>, 'limit'>): string => {
    return data.limit ? ` limit ${data.limit}` : ``;
  };

  _handleWhere = (data: Pick<SelectParams<T>, 'where'>): string => {
    if (data.where) {
      const { operator, field, value } = data.where;

      switch (operator) {
        case 'like':
          return ` where ${field} like '%${value}%'`;

        case 'equalTo':
          if (typeof value === 'string') {
            return ` where ${field}='${value}'`;
          } else {
            return ` where ${field}=${value}`;
          }

        default:
          return 'manipulating';
      }
    } else {
      return '';
    }
  };
}
