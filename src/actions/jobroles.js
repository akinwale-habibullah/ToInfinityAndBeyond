import { RECEIVE_JOB_ROLES } from './types';

const receiveJobRoles = (roles) => ({
  type: RECEIVE_JOB_ROLES,
  roles
})

export {
  receiveJobRoles
}
