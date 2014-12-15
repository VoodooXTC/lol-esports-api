/**
 * Created by jossayjacobo on 12/15/14.
 */
var schedule    = require('node-schedule'),
    series      = require('../lib/series'),
    rule        = new schedule.RecurrenceRule();

rule.hour = 1;


schedule.scheduleJob(rule, function(){
    series.fetch(function () {});
});