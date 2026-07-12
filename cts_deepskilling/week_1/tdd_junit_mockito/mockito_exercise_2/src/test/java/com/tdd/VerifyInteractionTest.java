package com.tdd;

import org.junit.Test;
import static org.mockito.Mockito.*;

public class VerifyInteractionTest {

    @Test
    public void testVerifyInteraction() {
        // Arrange
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        // Act
        service.fetchData();

        verify(mockApi).getData();
        System.out.println("Verified: getData() was called on the mock.");
    }
}
