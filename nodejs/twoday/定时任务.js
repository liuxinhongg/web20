const schedule = require('node-schedule');
const scheduleCronstyle = ()=>{
	schedule.scheduleJob("30 * * * * *",()=>{
		console.log("时间："+new Date())
	})
}
scheduleCronstyle()