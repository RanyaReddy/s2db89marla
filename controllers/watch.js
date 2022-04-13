var Watch = require('../models/watch');
// List of all Costumes
exports.watch_list = async function(req, res) {
    try{
    theCostumes = await Watch.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// for a specific Watch.
exports.watch_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Watch detail: ' + req.params.id);
};
// Handle Watch create on POST.
exports.watch_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Watch create POST');
};
// Handle Watch delete form on DELETE.
exports.watch_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Watch delete DELETE ' + req.params.id);
};
// Handle Watch update form on PUT.
exports.watch_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Watch update PUT' + req.params.id);
};