var hp = chrome.contextMenus.create({"title": "Analyze-it"});

/**
 * scritch.org menu items
 */
var scritch = chrome.contextMenus.create({"title": "Scritch.org", "contexts":["page"], "parentId": hp});
chrome.contextMenus.create({"title": "Fetch Page Info", "contexts":["page"], "parentId": scritch, "onclick": fetchIt});
function fetchIt(i, t){
	// ToDo: accept_encoding get variable & useragent string https://developer.chrome.com/extensions/webRequest
	var createProperties = {url: encodeURI("http://fetch.scritch.org/+fetch/?url="+ t.url + '&useragent=analyze-it+Chrome&accept_encoding=')};
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "Guess CMS", "contexts":["page"], "parentId": scritch, "onclick": guessIt});
function guessIt(i, t){
	var createProperties = {url: encodeURI("http://guess.scritch.org/+guess/?url="+ t.url + '&useragent=analyze-it+Chrome&accept_encoding=')};
	chrome.tabs.create(createProperties);
}


/**
 * viewdns.info menu items
 */
var vdns = chrome.contextMenus.create({"title": "ViewDNS.info", "contexts":["page"], "parentId": hp});
chrome.contextMenus.create({"title": "Reverse IP Lookup", "contexts":["page"], "parentId": vdns, "onclick": reverseIPLookup});
function reverseIPLookup(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "http://viewdns.info/reverseip/?host=" + encodeURIComponent(host) + "&t=1"};
	chrome.tabs.create(createProperties);
}
chrome.contextMenus.create({"title": "DNS Report", "contexts":["page"], "parentId": vdns, "onclick": dnsReport});
function dnsReport(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "http://viewdns.info/dnsreport/?domain=" + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}
chrome.contextMenus.create({"title": "Chinese Firewall Test", "contexts":["page"], "parentId": vdns, "onclick": chineseFirewallTest});
function chineseFirewallTest(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "http://viewdns.info/chinesefirewall/?domain=" + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}
chrome.contextMenus.create({"title": "Iran Firewall Test", "contexts":["page"], "parentId": vdns, "onclick": iranFirewallTest});
function iranFirewallTest(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "http://viewdns.info/iranfirewall/?siteurl=" + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}
chrome.contextMenus.create({"title": "DNS Record Lookup", "contexts":["page"], "parentId": vdns, "onclick": dnsRecordLookup});
function dnsRecordLookup(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "http://viewdns.info/dnsrecord/?domain=" + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}
chrome.contextMenus.create({"title": "IP History", "contexts":["page"], "parentId": vdns, "onclick": ipHistory});
function ipHistory(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "http://viewdns.info/iphistory/?domain=" + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}
chrome.contextMenus.create({"title": "Domain / IP Whois", "contexts":["page"], "parentId": vdns, "onclick": domainIPWhois});
function domainIPWhois(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "http://viewdns.info/whois/?domain=" + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}
chrome.contextMenus.create({"title": "DNSSEC Test", "contexts":["page"], "parentId": vdns, "onclick": dnssecTest});
function dnssecTest(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "http://viewdns.info/dnssec/?domain=" + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}
chrome.contextMenus.create({"title": "Ping", "contexts":["page"], "parentId": vdns, "onclick": vdnsPing});
function vdnsPing(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "http://viewdns.info/ping/?domain=" + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}
chrome.contextMenus.create({"title": "Port Scan (common)", "contexts":["page"], "parentId": vdns, "onclick": vdnsPortScan});
function vdnsPortScan(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "http://viewdns.info/portscan/?host=" + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}

/**
 * SE Footprints menu items
 */
var sef = chrome.contextMenus.create({"title": "Search Engine Footprints", "contexts":["page"], "parentId": hp});
chrome.contextMenus.create({"title": "Google Footprint", "contexts":["page"], "parentId": sef, "onclick": googleFootprint});
function googleFootprint(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "https://www.google.com/search?q=site:" + encodeURIComponent(host) + "&gws_rd=ssl"};
	chrome.tabs.create(createProperties);
}
chrome.contextMenus.create({"title": "Bing Footprint", "contexts":["page"], "parentId": sef, "onclick": bingFootprint});
function bingFootprint(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "http://www.bing.com/search?q=site%3A" + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}
chrome.contextMenus.create({"title": "Yahoo Footprint", "contexts":["page"], "parentId": sef, "onclick": yahooFootprint});
function yahooFootprint(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "https://search.yahoo.com/search?p=site%3A" + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}
chrome.contextMenus.create({"title": "Duck Duck Go Footprint", "contexts":["page"], "parentId": sef, "onclick": duckFootprint});
function duckFootprint(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "https://duckduckgo.com/?q=site%3A" + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}

/**
 * No Submenu menu items
 */
//chrome.contextMenus.create({"title": "Internic WHOIS", "contexts":["page"], "parentId": hp, "onclick": whoisIt});
//function whoisIt(i, t){
//	var url = t.url;
//	var host = getDomain(url);
//	var createProperties = {url: "http://reports.internic.net/cgi/whois?whois_nic=" + encodeURIComponent(host) + "&type=domain"};
//	chrome.tabs.create(createProperties);
//}

chrome.contextMenus.create({"title": "Chinese Firewall", "contexts":["page"], "parentId": hp, "onclick": chinaFirewall});
function chinaFirewall(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: "http://www.greatfirewallofchina.org/index.php?siteurl=" + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "Indexing Enabled? (Google)", "contexts":["page"], "parentId": hp, "onclick": indexedDirectories});
function indexedDirectories(i, t){
	var url = t.url;
	var host = getDomain(url);
	var createProperties = {url: 'https://www.google.com/search?hl=en&q="index+of+/"+site:' + encodeURIComponent(host)};
	chrome.tabs.create(createProperties);
}







/**
 * getDomain - returns the domain from a url string passed to it
 * @param {string} url
 */
function getDomain(url){
	var host;
	var exp = /^([a-z0-9+\.\-]+):\/\/(?:(?:([^:]*):([^@]*))@)?((?:[A-Za-z0-9_\.\-])+)(?::([0-9]+))?([^?]+)?(?:\?([^#]*))?(?:\#(.*))?$/;
	var matches = exp.exec(url);
	host = matches[4];
	var separr = host.split('.');
	if(separr.length > 2){
		var templen = separr.length;
		for(i=1;i < templen;i++){
			if(separr.length > 2){
				separr.shift();
			}
		}
	}
	return separr.join('.');
}
