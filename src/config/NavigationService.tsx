import React, {createRef} from 'react';
const navigationRef = createRef();
const navigate = name => {
  navigationRef.current?.navigate(name);
};
const push = name => {
  navigationRef.current?.push(name);
};
export {push, navigate, navigationRef};
