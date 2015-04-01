module.exports = function() {

  var harp = require("./harp.json")["globals"]
    , RSS = require("rss")
    , moment = require("moment")
    , fs = require("fs")
    , rootUrl = harp.root_url[process.env.NODE_ENV]
    , imageRootUrl = rootUrl + "assets/images/"
    , outputFeed = "public/rss.xml"
    , devgroups = []
  ;

  var feed = new RSS({
    title: harp.title,
    description: harp.description,
    feed_url: rootUrl + "rss.xml",
    site_url: rootUrl,
    image_url: imageRootUrl + "devgroups-128.png",
    managingEditor: harp.author,
    pubDate: moment().format("LLLL"),
    ttl: 60
  });
  
  harp.platforms.forEach(function(platformName) {
    var platform = require("./public/"+ platformName +"/_data.json")["index"];

    platform.devgroups.forEach(function(devgroup) {
      var devgroupId = devgroup.title.replace(/[^\w\s]/g, "").replace(/\s/g, "-").toLowerCase();
      var devgroupLink = rootUrl + platformName + "/#" + devgroupId;
      var devgroupPublishedAt = moment(devgroup.published_at || moment().format("YYYYMMDD"), "YYYYMMDD");
      var devgroupImage = imageRootUrl + (devgroup.image || platform.image);

      devgroups.push({
        title: "DevGroup: " + devgroup.title,
        description: devgroup.description,
        url: devgroupLink,
        author: harp.author,
        date: devgroupPublishedAt.format("ll"),
        enclosure: {
          url: devgroupImage
        }
      });
    });
  });

  var sortedDevGroups = devgroups.sort(function(a, b) {
    var a = moment(a.date, "ll").toDate().getTime();
    var b = moment(b.date, "ll").toDate().getTime();
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });

  sortedDevGroups.forEach(function(devgroup) { feed.item(devgroup); });

  fs.writeFileSync(outputFeed, feed.xml());
  console.log("Generated RSS:", outputFeed);
};