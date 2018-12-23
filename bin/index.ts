import fs from 'fs';
import axios from 'axios';

// pull down the HTML from the URI
const uri = 'https://web.stanford.edu/class/cs224n/syllabus.html';
// find the anchor tags and respective URIs
// $regexp = "<a\s[^>]*href=(\"??)([^\" >]*?)\\1[^>]*>(.*)<\/a>";
// <a[^>]* href="([^"]*)"
// just hrefsa href\s*=\s*(?:[\"'](?<1>[^\"']*)[\"']|(?<1>\S+))
// download eeach valid media type to a dl folder


//const expr = '<a\s[^>]*href=(\"??)([^\" >]*?)\\1[^>]*>(.*)<\/a>';
const expr = /href="(.*?)"/g;

axios.get(uri).then( (resp) => {
  const reg = new RegExp(expr);
  let m;
  let ic=0;
  while (( m = reg.exec(resp.data)) !== null ){
    var msg = m[0].slice(6, -1);
    if (msg.endsWith('.pdf')){
      axios.get(msg).then( (pdf) =>{
        fs.writeFileSync('./out/' + ic++ + '.pdf', pdf.data, 'binary');
      })
    }
    // console.log(msg);
  }


  // while ((var myArray = myRe.exec(str)) !== null) {
  //   var msg = 'Found ' + myArray[0] + '. ';
  //   msg += 'Next match starts at ' + myRe.lastIndex;
  //   console.log(msg);
  // }
  // const matches = reg.exec(resp.data);
  
  //console.log( matches ? matches.length : 0);
})
