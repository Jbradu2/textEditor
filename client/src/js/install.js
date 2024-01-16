const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
event.preventDefault();
//hold event for later
defferedPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
//install prompt
defferedPrompt.prompt();
//get user response
choiceResult = await defferedPrompt.userChoice;
if (choiceResult.outcome === 'accepted'){
  console.log("user accepts install");
} else {
  console.log('user declines install')
}
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
console.log('App was installed succesfully', event)
});
