# vtiger-js

Javascript client for vtiger.com Rest API.

## Installation

```bash
npm i @bowbridge/vtiger-js # or yarn start
```

## Peer Dependencies

This Package uses [axios](https://axios-http.com/) as a http client. Please make sure that you have already installed it.

### TypeScript

First class Typescript Support

### Example

```js
import { createClient } from '@bowbridge/vtiger-js';

const vtiger = createClient(url, username, password);

const getContacts = async () => {
  await vtiger
    .find({
      from: 'Accounts',
      limit: 20,
      where: { column: 'accountname', like: 'gmbh' },
    })
    .then(res => {
      res.data.result.forEach(acc => {
        console.log(acc.accountname);
      });
    });
};

getContacts();
```
