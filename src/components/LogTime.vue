<template>
	<div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input
          type="date"
          class="form-control"
          v-model="date"
          placeholder="Date"
        />
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input
          type="number"
          class="form-control"
          v-model="singleTime"
          placeholder="Hours"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input
          type="text"
          class="form-control"
          v-model="comment"
          placeholder="Comment"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link :to="{name: 'time-entries'}" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
</template>

<script>
	export default {
		name: 'LogTime',
		data() {
			return {

				// 发生时间
				date: '',

				// 持续事件
				singleTime: '',

				// 备注
				comment: '',
			};
		},
		methods: {
			save() {
				const plan = {
					name: 'vasttian',
					avatar: 'http://static.duwenxue.com/attachs/image/115/115167/201407/20140723000020-17714.jpg',
					date: this.date,
					singleTime: this.singleTime,
					comment: this.comment,
				};

				this.$store.dispatch('savePlan', plan);

				// 创建清单后跳到备忘清单列表，
        this.$router.go(-1);

				// 也可以直接使用push
        // this.$router.push({name: 'time-entries'});
        // 不能使用this.$router.go({name: 'time-entries'});
			}
		}
	}
</script>
