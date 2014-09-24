exports.handleMessage = function handleMessage(message) {

  switch (message.action) {

  	case "sayHello":
      studio.alert("Hello World!");
      break;

    case 'openDialog':
	  var mainWindow = studio.extension.showModalDialog(
	  	'main.html', 
    	[], 
	    'dialogwidth: 450; dialogheight: 600; resizable: yes'
	  );
	  break;

    default:
  	  studio.alert("Action unknown: " + message.action);

  }

};