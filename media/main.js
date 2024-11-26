//@ts-check

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    const vscode = acquireVsCodeApi();
    console.log(vscode);
    const button = document.getElementById("button");
    if(button) {
        button.innerHTML = "Hello from JS";
    }
    
}());