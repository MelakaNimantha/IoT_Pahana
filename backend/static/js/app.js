// Generate a new random MQTT client id on each page load
var MQTT_CLIENT_ID = "iot_web_"+Math.floor((1 + Math.random()) * 0x10000000000).toString(16);

// Create a MQTT client instance
var MQTT_CLIENT = new Paho.MQTT.Client("broker.mqttdashboard.com", 8000,"/wss", MQTT_CLIENT_ID);

// Tell the client instance to connect to the MQTT broker
MQTT_CLIENT.connect({ onSuccess: myClientConnected });

// This is the function which handles button clicks
function myButtonWasClicked(mes) {
  // create a new MQTT message with a specific payload
  var mqttMessage = new Paho.MQTT.Message(mes);

  // Set the topic it should be published to
  mqttMessage.destinationName = "group-iot-lamp";

  // Publish the message
  MQTT_CLIENT.send(mqttMessage);
}



// This is the function which handles subscribing to topics after a connection is made
function myClientConnected() {
  MQTT_CLIENT.subscribe("group-iot-lamp");
}

// This is the function which handles received messages
function myMessageArrived(message) {
  // Get the payload
  var messageBody = message.payloadString;

  // Create a new HTML element wrapping the message payload
  var messageHTML = $("<p>"+messageBody+"</p>");

  // Insert it inside the ```id=updateMe``` element above everything else that is there 
  $("#updateMe").prepend(messageHTML);
};

// Tell MQTT_CLIENT to call myMessageArrived(message) each time a new message arrives
MQTT_CLIENT.onMessageArrived = myMessageArrived;