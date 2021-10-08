import { RECEIVE_JOB_ROLES } from '../actions/types';

const jobRoles = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_JOB_ROLES:
      return action.roles;
    default:
      return state;
  }
}

export default jobRoles;
