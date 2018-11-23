var express = require("express");
var app =express();
var fs = require("fs");

app.get('/answers', function(req,res){
        fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_answers.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
});

app.get('/activity', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_activity.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/database', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_database.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/categories', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_categories.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/company', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_company.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/conclusions', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_conclusions.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/discussionchat', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_discussionchat.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/discussions', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_discussions.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/discussions', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_documenttext.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/events', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_events.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/eventtypes', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_eventtypes.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});


app.get('/flags', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_flags.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});


app.get('/goals', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_goals.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/guardians', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_guardians.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/healthdetail', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_health_detail.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/health', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_health.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});


app.get('/intentions', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_intentions.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});


app.get('/licence', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_licences.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/locations', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_locations.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});


app.get('/logins', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_logins.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});


app.get('/media', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_media.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});


app.get('/notes', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_notes.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});


app.get('/officehours', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_officehours.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/priorities', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_priorities.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/questions', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_questions.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/regulatororganisations', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_regulatororganisations.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/regulators', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_regulators.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/segments', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_segments.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/slaevents', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_slaevents.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/slas', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_slas.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/spots', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_spots.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/spots2', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_spots2.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/states', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_states.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/surveyinstance', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_surveyinstance.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/surveys', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_surveys.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/users', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_users.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

app.get('/whistles', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_whistles.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});


app.get('/workpatterns', function(req,res){
    fs.readFile( "data.json"+ "/" + "millward_ensosDEMO_table_workpatterns.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
});

var server = app.listen(3000, function () {
 })
