const mongoose = require("mongoose")
const tabletSchema = mongoose.Schema({
tablet_name: {
    type: String,
    required: true
},
company_name: {
    type: String,
    required: true
},
tablet_dosage: {
    type: Number,
    min:0,max:150,
    required: true
}
})
module.exports = mongoose.model("Tablet",
tabletSchema)

