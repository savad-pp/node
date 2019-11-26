var request = require('request');
var cheerio = require('cheerio');

request('https://www.flipkart.com/mobiles/pr?sid=tyy,4io&offer=nb:mp:103b330d04&fm=neo%2Fmerchandising&iid=M_231c87b3-c5a0-4d81-b3d1-fb41842e09bc_2.ETXG2Y7IK1GO&ssid=i4svm3973w6bkcn41572965887950&otracker=hp_omu_Deals%2Bof%2Bthe%2BDay_4_2.dealCard.OMU_ETXG2Y7IK1GO_2&otracker1=hp_omu_SECTIONED_neo%2Fmerchandising_Deals%2Bof%2Bthe%2BDay_NA_dealCard_cc_4_NA_view-all_2&cid=ETXG2Y7IK1GO', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    //console.log(html);
    var $ = cheerio.load(html);
  // var a=$('._3auQ3N _2GcJzG').text()
   console.log(html)
  }
});