async function checkGimkitCode(code) {
    const url = "https://www.gimkit.com/api/matchmaker/find-info-from-code";

    const data = {
        code: code
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
                console.log(`Valid code: ${code}, Info:`, result);
            }
        }
    } catch (error) {
        console.log(`Exception occurred: ${error}`);
    }
}

function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000);
}

async function checkMultipleCodes(numberOfCodes) {
    for (let i = 0; i < numberOfCodes; i++) {
        const randomCode = generateRandomCode().toString();
        await checkGimkitCode(randomCode);
    }
}

checkMultipleCodes(500);
