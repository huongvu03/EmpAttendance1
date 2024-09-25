const { Schema, default: mongoose } = require("mongoose");

const attSchema = new Schema({
    id		:Number,
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'empinfo', required: true }, // Changed to 'empinfo'
    name:String,
    date	:	Date,
    checkInTime		:Date,
    checkOutTime		:Date,
    workHours		:Number,
    overtimeHours		:Number,
    status		:String
})
const Attendances = mongoose.model("attendances",attSchema);
module.exports =Attendances;