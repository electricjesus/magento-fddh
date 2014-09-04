Magento FDDH
============


Introduction
-------------

#### Magento Form Dummy Data Helper

Hey Magento Developer! Ever found yourself repeatedly filling out form data especially at the checkout section? Think it's a complete waste of time and can't find proper tools to do it? Look no further!


Usage
-----

Add the following bookmarklets to your bookmarks toolbar and you're set! Click on them when you want to use them.

 - FDDH:Checkout

 ```javascript`
 javascript:!function(){var a=function(a){if("createEvent"in document){var b=document.createEvent("HTMLEvents");b.initEvent("change",!1,!0),a.dispatchEvent(b)}else a.fireEvent("onchange")},b={'[name="billing[firstname]"':"John",'[name="billing[lastname]"':"Doe",'[name="billing[company]"':"ABC Company",'[name="billing[email]"':"john.d@test.com",'[name="billing[street][]"':"900 Alpha Drive Suite 410",'[name="billing[city]"':"Richardson",'[name="billing[postcode]"':"78015",'[name="billing[country_id]"':"US",'[name="billing[region_id]"':"57",'[name="billing[telephone]"':"123-123-1234",'[name="billing[fax]"':"123-123-1235",'[name="billing[customer_password]"':"",'[name="billing[confirm_password]"':"",'[name="billing[save_in_address_book]"':"1",'[name="billing[use_for_shipping]"':"1",'[name="shipping[firstname]"':"Mary",'[name="shipping[lastname]"':"Watson",'[name="shipping[company]"':"DEF Company",'[name="shipping[email]"':"mary.w@test.com",'[name="shipping[street][]"':"900 Alpha Drive Suite 555",'[name="shipping[city]"':"Richardson",'[name="shipping[region_id]"':"57",'[name="shipping[postcode]"':"78015",'[name="shipping[country_id]"':"US",'[name="shipping[telephone]"':"123-223-1234",'[name="shipping[fax]"':"123-223-1235",'[name="shipping[save_in_address_book]"':"1"};for(element in b){var c=document.querySelector(element);c?c.typeCHECKOUT_JS_UGLIFIEDCHECKOUT_JS_UGLIFIED["checkbox","radio"].indexOf(c.type)?c.click():(c.value=b[element],a(c)):console.log("missing",element)}}(document);
 ```
 - FDDH:Register  _Coming Soon!_
 - FDDH:Login     _Coming Soon!_
 - FDDH:Contact   _Coming Soon!_

Hacking
---------

If you want to develop to contribute to add your own features, just fork and clone this repository and send over your pull requests.

Building is done through grunt commands:

- `grunt exec:build_readme`
- `grunt dist` - Generates javascript `dist` files which are `concatenated` and `uglified` versions of `src`.
- `grunt` default task runs `dist` then `exec:build_readme`


Roadmap
-------

Below is a short list of features that would be needed in future developments:

- Register, Login, and Contact form fillers
- Modularized code (requireJS, probably?)
- Adaptive fill (depending on form element name, type and/or classes)

