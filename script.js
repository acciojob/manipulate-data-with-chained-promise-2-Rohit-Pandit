//your JS code here. If required.
function initialPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // 3-second delay
  });
}

initialPromise()
  .then((arr) => {
    // First Transformation - filter even numbers
    return new Promise((resolve) => {
      const evens = arr.filter(num => num % 2 === 0);
      setTimeout(() => {
        document.getElementById("output").textContent = JSON.stringify(evens);
        resolve(evens);
      }, 1000); // 1-second delay
    });
  })
  .then((evens) => {
    // Second Transformation - multiply by 2
    return new Promise((resolve) => {
      const doubled = evens.map(num => num * 2);
      setTimeout(() => {
        document.getElementById("output").textContent = JSON.stringify(doubled);
        resolve(doubled);
      }, 2000); // 2-second delay
    });
  })
  .catch((err) => {
    console.error("Error:", err);
  });
