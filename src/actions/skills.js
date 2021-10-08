import { RECEIVE_SKILLS } from './types';

const receiveSkills = (skills) => ({
  type: RECEIVE_SKILLS,
  skills
})

export {
  receiveSkills
}
