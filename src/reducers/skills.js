import { RECEIVE_SKILLS } from '../actions/types';

const skills = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SKILLS:
      return action.skills
    default:
      return state;
  }
}

export default skills;
