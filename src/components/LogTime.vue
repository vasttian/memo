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
    <router-link to="{name: 'time-entries'}" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
</template>

<script>
	export default {
		name: 'LogTime',
		data() {
			return {
				date: '',
				singleTime: '',
				comment: '',
			}
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

				// 总时间相应增加
				// this.$store.dispatch('addTotalTime', this.totalTime);
        this.$router.go(-1);
			}
		}
	}
</script>
