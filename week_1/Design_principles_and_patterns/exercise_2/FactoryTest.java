package exercise_2;
public class FactoryTest {
    public static void main(String[] args) {
        DocumentFactory factory;

        // Use WordFactory to create a WordDocument
        factory = new WordFactory();
        Document doc1 = factory.createDocument();
        doc1.open();

        // Use PdfFactory to create a PdfDocument
        factory = new PdfFactory();
        Document doc2 = factory.createDocument();
        doc2.open();

        // Use ExcelFactory to create an ExcelDocument
        factory = new ExcelFactory();
        Document doc3 = factory.createDocument();
        doc3.open();
    }
}