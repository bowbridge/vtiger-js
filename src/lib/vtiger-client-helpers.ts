import { AxiosResponse } from 'axios';
import { VTIGER_API_USAGE } from './types';

export abstract class VtigerClientHelper {
  protected _generateApiUsageObject = (
    res: AxiosResponse
  ): VTIGER_API_USAGE => {
    const apiUsage: VTIGER_API_USAGE = {
      dailylimit: res.headers['x-ratelimit-dailylimit'],
      remaining: res.headers['x-ratelimit-remaining'],
      reset: res.headers['x-ratelimit-reset'],
      floodcontrolMinutelimit: res.headers['x-floodcontrol-minutelimit'],
      floodcontrolRemaining: res.headers['x-floodcontrol-remaining'],
      floodcontrolReset: res.headers['x-floodcontrol-reset'],
      vtigerVersion: res.headers['x-vtiger-version'],
    };

    return apiUsage;
  };
}
