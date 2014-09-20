# <%= extensionName %>
[![MIT Licensed](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](#license)

*Wakanda® and 4D® are registered trademarks of 4D SAS in France and/or other countries. All other names mentioned may be trademarks or registered trademarks of their respective owners.*

> [<%= extensionName %>](https://github.com/<%= answers.githubUser %>/<%= extensionName %>) [Wakanda](http://wakanda.org) Studio Extension

## Getting Started

### What are Wakanda Studio Extension?

Wakanda Studio Extensions are programs that can add new features to Wakanda Studio. For example, you could create a Wakanda Studio extension to insert a set of predefined comments at the beginning of a JavaScript file.

You write an extension using standard Web technologies, such as JavaScript, HTML, and CSS. Once you have developed a Wakanda Studio extension, you can share it with the Wakanda developer community. Our Wakanda development team has developed a few pre-installed extensions, such as "Beautifier" that you can use in the Code Editor to "beautify" your JavaScript code.

Extensions can be added to Wakanda Studio's main toolbar as well as from certain contextual menus in the Solution Explorer.

[Documentation](http://doc.wakanda.org/Wakanda-Studio-Extensions/Wakanda-Studio-Extensions.100-872838.en.html)


### How to install a Wakanda Studio Extension?

A Wakanda Studio Extension is a set of files grouped in a single folder. To install the extension in Wakanda Studio, you just need to copy your extension's folder into the Extensions folder depending on your OS:

* On Windows: %userprofile%\Documents\Wakanda\Extensions\
For example: C:\John\Documents\Wakanda\Extensions\

* On OS X: $HOME/Documents/Wakanda/Extensions/
For example: /Users/John/Documents/Wakanda/Extensions/

Extensions will be available for any Wakanda Studio application running on the machine in the user's session, including subsequent updates. This location does not need require any specific access rights.

You can also use the [Add-ons Extension](http://doc.wakanda.org/Wakanda-Studio-Features/Add-ons-Extension.300-1049882.en.html) to search for a custom extension and install it directly into Wakanda.

## License


*The MIT License*

Copyright (c) <%= currentYear %> <%= realname %>. 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
