import { FindOneParams, FindParams } from '../types';

export class QueryBuilder<T> {
  public find = (params: FindParams<T>): string => {
    const columns = params.columns as string[];
    const { from, where, limit } = params;

    const query = `select ${columns ? `${columns.join()}` : `*`} from ${from} ${
      where ? `where ${where.column}  like '%${where.like}%'` : ``
    } ${limit ? `limit ${limit}` : ``};`;

    return query;
  };

  public findOne = (params: FindOneParams<T>): string => {
    const columns = params.columns as string[];
    const { from, id } = params;

    const query = `select ${
      columns ? `${columns.join()}` : `*`
    } from ${from} where id=${id};`;

    return query;
  };
}
