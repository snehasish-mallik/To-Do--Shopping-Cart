// here are list of cart items
const mockItems = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    // ...more mock items
  ];
  
  export async function fetchItems() {
    return mockItems; // Return mock data for testing
  }
  