exports.handleMessage = function handleMessage(message) {

  switch (message.action) {

  	case "say_hello":
      studio.alert("Hello World!");
      break;

    case 'CreateAngularApp':
	  var mainWindow = studio.extension.showModalDialog(
	  	'main.html', 
    	[], 
	    'dialogwidth: 450; dialogheight: 600; resizable: yes'
	  );
	  break;

    default:
  	  studio.alert("Action unknown");

  }

};