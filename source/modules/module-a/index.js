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
    path: `${module.slug}/test-route`,
    component: () => <div>Hello</div>
  }
];

export default { ...module, reducer, routes };
