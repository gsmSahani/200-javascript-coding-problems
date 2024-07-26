// Example 1: Async function with await
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  // Usage
  async function getData() {
    try {
      const result = await fetchData();
      console.log('Data fetched:', result);
    } catch (error) {
      console.error('Error getting data:', error);
    }
  }
  
  getData();
  