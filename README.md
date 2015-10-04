# angular-file-selector
A simple directive to make file selector buttons.

# Installation
The easiest way to install is with bower:

```bash
bower i --save angular-file-selector
```

Include the script in your page:

```html
<script src="path/to/bower/component/angular-file-selector.js"></script>
```

Add the module to your application:

```javascript
angular.module('yourApp', [ ... , 'tehwalris.angular-file-selector'])
```

# Usage
On the button you want to use to open a file selection dialog, add the `file-selector` attribute:

```html
<button file-selector file="selectedFile"></button>
{{selectedFile.name}}
```

Use the `file` attribute to bind a variable to the file object. In this example, the name of the selected file is shown.

You can also use the `on-select` attribute to call a function from your scope when a new file is selected. For example:

```html
<button file-selector on-select="uploadFile(file)" accept=".txt"></button>
```

The optional accept attribute can be used to filter selectable files. It behaves the same as on a normal HTML file input.
