import React from 'react';

const module = {
  name: 'Module B',
  slug: 'module-b'
};

const reducer = (state = {}, action) => {
  switch(action.type) {
    default: return {}
  }
};

const routes = [
  {
    path: `/${module.slug}`,
    component: () => <div>Hello from Module B</div>
  }
];

export default { ...module, reducer, routes };
