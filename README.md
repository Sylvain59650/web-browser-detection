# web-browser-detection

<div style="display:inline">

[![build](https://travis-ci.org/Sylvain59650/web-browser-detection.png?branch=master)](https://travis-ci.org/Sylvain59650/web-browser-detection)
![version](https://img.shields.io/npm/v/web-browser-detection.svg)
![package](https://img.shields.io/github/package-json/v/Sylvain59650/web-browser-detection.svg)
![dependencies](https://img.shields.io/david/Sylvain59650/web-browser-detection.svg)
![minified](https://img.shields.io/bundlephobia/min/web-browser-detection.svg)
![linter](https://img.shields.io/badge/eslint-ok-blue.svg)
![tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![license](https://img.shields.io/npm/l/web-browser-detection.svg)
[![hits](http://hits.dwyl.com/Sylvain59650/web-browser-detection.svg)](http://hits.dwyl.com/Sylvain59650/web-browser-detection)
</div>

 <div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > web-browser-detection](https://github.com/Sylvain59650/web-browser-detection/blob/master/README.md)
</div>

# introduction

detect web browser informations

based on [jquery.browser]("https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.1.0/jquery.browser.min.js") under MIT License

but remove jQuery dependency


## Installation

    npm install web-browser-detection --save

or

    yarn add web-browser-detection --save


## prerequisites

### for browser

 
    <script src="node_modules/web-browser-detection/distrib/web-browser-detection.min.js"></script>

## usage

    <script>
       var browser = webBrowserDetection();
       // => {"rv":true,"version":"11.0","versionNumber":11,"win":true,"desktop":true,"msie":true,"name":"msie","platform":"win"} 
    </script>




<table border="1">
<tr>
<th>Browser</th><th>Platform</th><th>Versions</th><th style="width:200px">Result</th></tr>
<tr>
<td>Chrome</td><td>Windows 7</td><td>all<sup>*</sup></td><td>{<br/>
chrome: true,<br/>
 version: "66.0.3359.139", <br/>
 versionNumber: 66,<br/> 
 win: true, <br/>
 desktop: true, <br/>
webkit: true<br/>,
name:"chrome",<br/>
platform:"win"<br/>
}
</td></tr>
<tr>
<td>Firefox</td><td>Windows 7</td><td>all<sup>*</sup></td><td>{<br/> mozilla: true,<br/> 
version: "60.0", <br/>
versionNumber: 60, <br/>
win: true,<br/> 
desktop: true, <br/>
name: "mozilla", <br/>
platform: "win" <br/>
}
</td></tr>
<tr>
<td>Internet Explorer</td><td>Windows 7</td><td>all<sup>*</sup></td><td>{<br/>
desktop: true, 
<br/>msie: true,<br/>
name: "msie",<br/> 
platform: "win",<br/> 
rv: true, <br/>
version: "11.0",<br/> 
versionNumber: 11, <br/>
win: true<br/>
}
</td></tr>
</table>

<sup>*</sup>  Need some help for all versions

**Note Important ![dependencies](https://img.shields.io/david/Sylvain59650/web-browser-detection.svg) and ![minified](https://img.shields.io/bundlephobia/min/web-browser-detection.svg)**
