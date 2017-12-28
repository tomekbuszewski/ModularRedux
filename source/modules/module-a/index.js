import React from 'react';

const module = {
  name: 'Module A',
  slug: 'module-a'
};

const reducer = (state = {}, action) => {
  switch(action.type) {
    default: return {}
  }
};

const routes = [
  {
    path: `/${module.slug}`,
    component: () => <div>Hello</div>
  },
  {
    path: `/${module.slug}/test-route`,
    component: () => <div>Hello from the nested route</div>
  }
];

export default { ...module, reducer, routes };
