export abstract class VtigerClientHelper<T> {
  protected _handleFields = (fields?: Array<keyof T>): string => {
    return fields ? fields.join() : '*';
  };
}
