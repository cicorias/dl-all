
// pull down the HTML from the URI
//   https://web.stanford.edu/class/cs224n/syllabus.html
// find the anchor tags and respective URIs
// $regexp = "<a\s[^>]*href=(\"??)([^\" >]*?)\\1[^>]*>(.*)<\/a>";
// <a[^>]* href="([^"]*)"
// just hrefs href\s*=\s*(?:[\"'](?<1>[^\"']*)[\"']|(?<1>\S+))
// download eeach valid media type to a dl folder

const expr = '<a\s[^>]*href=(\"??)([^\" >]*?)\\1[^>]*>(.*)<\/a>';
