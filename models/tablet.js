const mongoose = require("mongoose")
const tabletSchema = mongoose.Schema({
tablet_name: String,
company_name: String,
tablet_dosage: Number
})
module.exports = mongoose.model("Tablet",
tabletSchema)

