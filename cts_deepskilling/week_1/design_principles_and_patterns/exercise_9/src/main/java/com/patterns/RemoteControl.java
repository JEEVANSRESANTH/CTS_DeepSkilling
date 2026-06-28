package com.patterns;
public class RemoteControl {
    private Command command;
    public void setCommand(Command command) { this.command = command; }
    public void pressButton() { 
        if (command == null) {
            throw new IllegalStateException("Command not set");
        }
        command.execute(); 
    }
}
