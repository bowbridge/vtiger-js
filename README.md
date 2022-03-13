# vtiger-js

Javascript client for vtiger.com Rest API.

## Installation

```bash
npm i @bowbridge/vtiger-js axios

 or

yarn add @bowbridge/vtiger-js axios
```

## Peer Dependencies

This package uses [axios](https://axios-http.com/) as a http client. Please make sure that you have already installed it.

### TypeScript

First class Typescript Support

### Example

```ts
import { createClient } from '@bowbridge/vtiger-js';

const vtiger = createClient(url, username, password);

vtiger
  .from<Account>('Accounts')
  .select(['accountname', 'accountstatus'])
  .where('id', '=', '3x16554')
  .get()
  .then(res => {
    res.data.result.forEach(acc => {
      console.log(acc.accountname);
    });
  });
```
