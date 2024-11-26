import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vstodo" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('vstodo.helloWorld', () => {
		HelloWorldPanel.createOrShow(context.extensionUri);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('vstodo.refresh', () => {
		HelloWorldPanel.kill();
		HelloWorldPanel.createOrShow(context.extensionUri);
		vscode.commands.executeCommand(
			"workbench.action.webview.openDeveloperTools"
		);
	}));

	context.subscriptions.push(vscode.commands.registerCommand("vscode.askQuestion", () => {
		vscode.window.showInformationMessage("How are you?", "good", "bad").then(response => {
			if (response === "bad") {
				vscode.window.showInformationMessage("Sorry to hear that");
			} else {
				console.log(response);
			}
		});
	}));


}

// This method is called when your extension is deactivated
export function deactivate() {}
