import * as types from './mutation-types';

export default {
	[types.SAVE_PLAN](state, plan) {
		state.list.push(Object.assign({}, plan));
		state.totalTime += Number(plan.singleTime);
	},
	[types.DELETE_PLAN](state, {index, singleTime}) {

		state.list.splice(index, 1);
		state.totalTime -= Number(singleTime);
	},
}
