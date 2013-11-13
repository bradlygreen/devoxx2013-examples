Devoxx 2013 Examples
===================

Example code I used in the AngularJS University session at Devoxx 2013 in Antwerp.  Slides for [AngularJS End to End](https://docs.google.com/a/google.com/presentation/d/1eQ3q_Y3Q2ra4PzWHrQ_E60Ar1-2IRooXI4P-fW0npzQ/view?pli=1#slide=id.p49).

Nothing too interesting here, though the 7-mail-app directory may be useful for folks new to AngularJS who want to see how to set up deep linking that includes changing menu-highlighting along with view changes.

Except for 7-mail-app, you can view all examples by just opening the HTML file in your browser.  For the mail app, you'll need a web server to satisfy the browser same-origin-policy security model.  If you have Python instelled, you can do this easily:

    $ cd /devoxx
    $ python -m SimpleHTTPServer
    
You can then view the directory at [http://localhost:8000](http://localhost:8000).
