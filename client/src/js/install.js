const butInstall = document.getElementById("buttonInstall");
let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default prompt
  event.preventDefault();
  
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // Check if the deferredPrompt is available
  if (deferredPrompt) {
    // Trigger the installation prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    
    // Check if the user accepted the prompt
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User declined the install prompt");
    }
    
    // Reset the deferredPrompt variable
    deferredPrompt = null;
  }
});

  // TODO: Add an handler for the `appinstalled` event
  window.addEventListener("appinstalled", (event) => {
    console.log("App was installed succesfully", event);
  });

