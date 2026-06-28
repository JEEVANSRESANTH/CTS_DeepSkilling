package com.patterns;
public class ProxyImage implements Image {
    private final String filename;
    private RealImage realImage;
    public ProxyImage(String filename) { this.filename = filename; }
    @Override public void display() {
        if (realImage == null) { realImage = new RealImage(filename); }
        else { System.out.println("(Cached)"); }
        realImage.display();
    }
}
