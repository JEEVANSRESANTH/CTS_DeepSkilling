package com.patterns;

public class Computer {
    private final String cpu;
    private final String ram;
    private final String storage;
    private final String gpu;
    private final String os;

    private Computer(Builder builder) {
        this.cpu     = builder.cpu;
        this.ram     = builder.ram;
        this.storage = builder.storage;
        this.gpu     = builder.gpu;
        this.os      = builder.os;
    }

    @Override
    public String toString() {
        return "Computer{cpu='" + cpu + "', ram='" + ram + "', storage='" + storage
                + "', gpu='" + gpu + "', os='" + os + "'}";
    }

    public static class Builder {
        private String cpu;
        private String ram;
        private String storage;
        private String gpu;
        private String os;

        public Builder cpu(String cpu)         { this.cpu = cpu;         return this; }
        public Builder ram(String ram)         { this.ram = ram;         return this; }
        public Builder storage(String storage) { this.storage = storage; return this; }
        public Builder gpu(String gpu)         { this.gpu = gpu;         return this; }
        public Builder os(String os)           { this.os = os;           return this; }

        public Computer build() { return new Computer(this); }
    }

    public static void main(String[] args) {
        Computer gaming = new Computer.Builder()
                .cpu("Intel i9").ram("32GB").storage("1TB SSD").gpu("RTX 4090").os("Windows 11").build();

        Computer office = new Computer.Builder()
                .cpu("Intel i5").ram("8GB").storage("256GB SSD").os("Ubuntu 22").build();

        System.out.println("Gaming PC : " + gaming);
        System.out.println("Office PC : " + office);
    }
}
