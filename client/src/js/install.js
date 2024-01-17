const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
if (typeof window !== 'undefined') {
window.addEventListener('beforeinstallprompt', (event) => {
event.preventDefault();
//hold event for later
deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
//install prompt
if (deferredPrompt){
deferredPrompt.prompt();
//get user response
const choiceResult = await deferredPrompt.userChoice;
if (choiceResult.outcome === 'accepted'){
  console.log("user accepts install");
} else {
  console.log('user declines install');
}
}
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
console.log('App was installed succesfully', event)
});
}