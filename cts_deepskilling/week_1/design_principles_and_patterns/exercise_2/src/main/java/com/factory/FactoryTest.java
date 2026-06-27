package com.factory;

public class FactoryTest {

    public static void main(String[] args) {
        DocumentFactory[] factories = {
            new WordDocumentFactory(),
            new PdfDocumentFactory(),
            new ExcelDocumentFactory()
        };

        for (DocumentFactory factory : factories) {
            Document doc = factory.createDocument();
            doc.open();
            doc.close();
            System.out.println("---");
        }
    }
}
