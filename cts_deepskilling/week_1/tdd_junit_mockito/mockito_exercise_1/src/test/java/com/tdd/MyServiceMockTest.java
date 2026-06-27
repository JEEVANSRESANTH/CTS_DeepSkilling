package com.tdd;

import org.junit.Test;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class MyServiceMockTest {

    @Test
    public void testExternalApi() {
        // Arrange - create mock and stub
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");

        // Act
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Assert
        assertEquals("Mock Data", result);
    }
}
