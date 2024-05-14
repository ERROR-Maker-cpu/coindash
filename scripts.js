document.addEventListener("DOMContentLoaded", () => {
    const startMiningButton = document.getElementById("startMining");
    const statusElement = document.getElementById("status");
    const earnedElement = document.getElementById("earned");

    let mining = false;
    let cryptoEarned = 0;
    let miningInterval;

    startMiningButton.addEventListener("click", () => {
        if (!mining) {
            mining = true;
            statusElement.textContent = "Mining...";
            miningInterval = setInterval(() => {
                cryptoEarned += Math.random() * 0.1; // Simulate earning crypto
                earnedElement.textContent = cryptoEarned.toFixed(4);
            }, 1000);
        } else {
            mining = false;
            statusElement.textContent = "Stopped";
            clearInterval(miningInterval);
        }
    });
});
