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

        // Verify - ensure getData() was called exactly once
        verify(mockApi).getData();
        System.out.println("Verified: getData() was called on the mock.");
    }
}
