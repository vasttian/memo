import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
	// 任务总时间
	totalTime: 0,

	// 备忘清单
	list: [],
};

export default new Vuex.Store({
	state,
	mutations,
	actions,
});
