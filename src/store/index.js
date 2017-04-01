import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
	// 任务总时间
	totalTime: 0,
	list: [{
		name: 'vasttian',
		avatar: 'http://static.duwenxue.com/attachs/image/115/115167/201407/20140723000020-17714.jpg',
		date: '2017-4-1',
		singleTime: 6,
		comment: 'A Vue.js project',
	}],
};

export default new Vuex.Store({
	state,
	mutations,
	actions,
});
