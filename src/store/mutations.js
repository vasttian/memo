import * as types from './mutation-types';

export default {
	[types.SAVE_PLAN](state, plan) {
		state.list.push(Object.assign({}, plan));
		state.totalTime += Number(plan.singleTime);
	},
}
