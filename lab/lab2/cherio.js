const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'https://www.flipkart.com/mobiles/pr?sid=tyy,4io&offer=nb:mp:103b330d04&fm=neo%2Fmerchandising&iid=M_231c87b3-c5a0-4d81-b3d1-fb41842e09bc_2.ETXG2Y7IK1GO&ssid=i4svm3973w6bkcn41572965887950&otracker=hp_omu_Deals%2Bof%2Bthe%2BDay_4_2.dealCard.OMU_ETXG2Y7IK1GO_2&otracker1=hp_omu_SECTIONED_neo%2Fmerchandising_Deals%2Bof%2Bthe%2BDay_NA_dealCard_cc_4_NA_view-all_2&cid=ETXG2Y7IK1GO'  
}, (err, res, body) => {

    if (err) return console.error(err);

    let $ = cheerio.load(body);
    var a=$('#_3auQ3N _2GcJzG').text()
    console.log(a)
    // let title = $('title');
    // console.log(title.text());
    
    // let h1El = $('h1');
    // let parentEl = h1El.parent();
    // console.log(parentEl.get(0).tagName)
   
    // let main = $('main');
    // let fel = main.children().first();
    // let lel = main.children().last();
    // console.log(fel.get(0).tagName);
    // console.log(lel.get(0).tagName);
   
    // let ulEl = $('ul');
    // ulEl.append('<li>Travel</li>');
    // let lis = $('ul').html();
    // let items = lis.split('\n');
    // items.forEach((e) => {
    //     if (e) {
    //         console.log(e.replace(/(\s+)/g, ''));
    //     }
    // })

    // $('main').after('<footer>This is a footer</footer>')
    // console.log($.html());

    // let fpEl = $('p');
    // let attrs = fpEl.attr();
    // console.log(attrs);

   
   
  //  const allTitles = $('h3')
    //   .get()
    //   .map(repo => {
    //     const $repo = $(repo);
    //     const title = $repo.find('h3').text();
    //     return title;
    //   });
  //  console.log(allTitles);

});