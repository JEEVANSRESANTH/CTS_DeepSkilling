package com.patterns;
public class RealImage implements Image {
    private final String filename;
    public RealImage(String filename) {
        this.filename = filename;
        loadFromServer();
    }
    private void loadFromServer() { System.out.println("Loading image from server: " + filename); }
    @Override public void display() { System.out.println("Displaying: " + filename); }
}
