# vtiger-js

Javascript client for vtiger.com Rest API.

## Installation

```bash
npm i @bowbridge/vtiger-js

 or

yarn add @bowbridge/vtiger-js
```

## Peer Dependencies

This package uses [axios](https://axios-http.com/) as a http client. Please make sure that you have already installed it.

### TypeScript

First class Typescript Support

### Example

```js
import { createClient } from '@bowbridge/vtiger-js';

const vtiger = createClient(url, username, password);

const getContacts = async () => {
  await vtiger
    .select({
      from: 'Accounts',
      fields: ['accountname', 'accounttype'],
      where: {
        field: 'id',
        operator: 'equalTo',
        value: '3x16554',
      },
    })
    .then(res => {
      res.data.result.forEach(acc => {
        console.log(acc.accountname);
      });
    });
};

getContacts();
```
