async function fetchRoomInfo(roomId) {
    const url = "https://www.gimkit.com/api/matchmaker/find-info-from-code";

    const data = {
        code: roomId
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();

            if (!result.error) {
                console.log("Code Validity: Valid");
                console.log("Game or Session ID:", result.roomId || "Not available");
                console.log("Use Random Name Picker:", result.useRandomNamePicker ? "True" : "False");
            } else {
                console.log("Code Validity: Invalid");
            }
        } else {
            console.log("Failed to fetch room info:", response.statusText);
        }
    } catch (error) {
        console.log("Error occurred while fetching room info:", error);
    }
}

// Prompt for the room code and fetch info
const roomId = prompt("Enter the Room Code:");
if (roomId) {
    fetchRoomInfo(roomId);
} else {
    console.log("No Room Code provided.");
}
