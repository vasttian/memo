import * as types from './mutation-types';

export default {
	savePlan({ commit }, plan) {
		commit(types.SAVE_PLAN, plan);
	},
	deletePlan({ commit }, delPlan) {
		commit(types.DELETE_PLAN, delPlan);
	},
};
