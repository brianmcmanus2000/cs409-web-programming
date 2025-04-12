fetch("/getColor")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => setButtonColor(data.color))
    .catch(error => {
        console.error("Error fetching color:", error);
        setButtonColor('blue');  // Fallback to default color
    });