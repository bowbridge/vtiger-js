import { AxiosResponse } from 'axios';

export class VTIGER_API_ERROR extends Error {
  public code: number;
  public response: AxiosResponse;
  constructor(response: AxiosResponse) {
    super(response.statusText);
    this.code = response.status;
    this.response = response;
  }
}
