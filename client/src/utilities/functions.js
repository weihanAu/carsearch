export async function fetchCars(uri) {

  try {
    const response = await fetch(uri); // Wait for the fetch to complete
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // Parse and wait for the JSON
    return data; // Return the data
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null; 
  }

}
