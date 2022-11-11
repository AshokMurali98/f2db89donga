var Tablet = require('../models/tablet');

// List of all tablets  
exports.tablet_list = async function(req, res) {
  try{
    theTablets = await Tablet.find();
  res.send(theTablets);
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
 }; 

// List of all Tablets

/*exports.tablet_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Tablet detail: ' + req.params.id);
}; */

// for a specific Costume.
exports.tablet_detail = async function(req, res) {
  console.log("detail" + req.params.id)
  try {
  result = await Tablet.findById( req.params.id)
  res.send(result)
  } catch (error) {
  res.status(500)
  res.send(`{"error": document for id ${req.params.id} not found`);
  }
 };

// Handle Costume create on POST.
exports.tablet_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Tablet create POST');
};
// Handle Costume delete form on DELETE.
exports.tablet_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Tablet delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.tablet_update_put =  async function(req, res) {
 //res.send('NOT IMPLEMENTED: Tablet update PUT' + req.params.id);
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
  console.log(req.params.id)
 let toUpdate = await Tablet.findById( req.params.id)
 console.log(toUpdate)
 // Do updates of properties
 if(req.body.tablet_name)
 toUpdate.tablet_name = req.body.tablet_name;
 if(req.body.company_name) 
 toUpdate.company_name = req.body.company_name;
 if(req.body.tablet_dosage) 
 toUpdate.tablet_dosage = req.body.tablet_dosage;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// Handle Costume create on POST.
exports.tablet_create_post = async function(req, res) {
  console.log(req.body)
  let document = new Tablet();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costume_type":"goat", "cost":12, "size":"large"}
  document.tablet_name = req.body.tablet_name;
  document.company_name = req.body.company_name;
  document.tablet_dosage = req.body.tablet_dosage;
  try{
  let result = await document.save();
  res.send(result);
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
 };

 exports.tablet_view_all_Page = async function(req, res) {
  try{
    theTablets = await Tablet.find();
  res.render('tablet', { title: 'Tablet Search Results', results: theTablets });
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
 };
