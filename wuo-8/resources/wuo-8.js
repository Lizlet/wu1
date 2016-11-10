$(document).ready(function() {
    $("#YV").click(function() {
        $("#the-frame").attr('src', "https://www.youtube.com/embed/7U-RbOKanYs");
        setActive("YV")
    });

    // https://www.pond5.com/stock-video-footage/1/nature.html#2/2063/pricelt:0,nature
    // Allegedly public domain.
    // tried getting something small since I owuld be uploading it to the uni filestore and I am not sure if
    // I am limited there.
    $("#OV").click(function() {
        $("#the-frame").attr('src', "resources/044594000-view-midway-island.mp4")
        setActive("OV")
    });

    $("#GMaps").click(function() {
        $("#the-frame").attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30366.191028788005!2d5.0108502570755205!3d61.59620012212747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4617eb3099a41273%3A0x6092741aa0e42109!2s6900+Flor%C3%B8!5e0!3m2!1sen!2sno!4v1478792013081")
        setActive("GMaps")
    });

    $("#BBC").click(function() {
        $("#the-frame").attr('src', "http://www.bbc.com/")
        setActive("BBC")
    });

    $("#VG").click(function() {
        $("#the-frame").attr('src', "http://www.vg.no/")
        setActive("VG")
    });

    $("#FP").click(function() {
        $("#the-frame").attr('src', "http://www.firdaposten.no/")
        setActive("FP")
    });

    function setActive(identifier) {
        $("#YV")   .attr('class', identifier ==    "YV" ? "active" : "");
        $("#OV")   .attr('class', identifier ==    "OV" ? "active" : "");
        $("#GMaps").attr('class', identifier == "GMaps" ? "active" : "");
        $("#BBC")  .attr('class', identifier ==   "BBC" ? "active" : "");
        $("#VG")   .attr('class', identifier ==    "VG" ? "active" : "");
        $("#FP")   .attr('class', identifier ==    "FP" ? "active" : "");
    }
});