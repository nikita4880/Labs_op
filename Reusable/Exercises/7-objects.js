'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const obj1 = { name: 'sam' };
  let obj2 = { name: 'sam' };

  obj1.name = 'adrian';
  obj2.name = 'adrian';

  obj2 = { name: 'sam adrian' };
};

module.exports = { fn };
