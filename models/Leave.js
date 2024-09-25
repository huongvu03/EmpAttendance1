const { Schema, default: mongoose } = require("mongoose");

const leaveSchema = new Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'empinfo', required: true }, // Changed to 'empinfo'
    leaveType: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, default: 'Pending' }
});

const Leave = mongoose.model('Leave', leaveSchema);
module.exports = Leave;
