// ================================
// SK MOTORS WEBSITE JAVASCRIPT
// ================================

// Future website interactions can be added here.
/* =========================================================
   DRIVE N' DWELL — VEHICLE SEARCH & FILTER SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("vehicleSearch");
    const fuelFilter = document.getElementById("fuelFilter");
    const yearFilter = document.getElementById("yearFilter");
    const priceFilter = document.getElementById("priceFilter");
    const carCards = document.querySelectorAll(".car-container .car-card");

    // Only run on pages that contain the vehicle filters
    if (!searchInput || !fuelFilter || !yearFilter || !priceFilter) {
        return;
    }

    function filterVehicles() {

        const searchValue = searchInput.value.toLowerCase().trim();
        const fuelValue = fuelFilter.value;
        const yearValue = yearFilter.value;
        const priceValue = priceFilter.value;

        carCards.forEach(function (card) {

            const vehicleText = card.textContent.toLowerCase();

            const matchesSearch =
                vehicleText.includes(searchValue);

            const matchesFuel =
    fuelValue === "all" ||
    card.dataset.fuel === fuelValue;

const matchesYear =
    yearValue === "all" ||
    card.dataset.year === yearValue;

            let matchesPrice = true;

            const priceText = card.querySelector("h4");

            if (priceText) {

                const price = parseInt(
                    priceText.textContent
                        .replace(/[^0-9]/g, ""),
                    10
                );

                if (priceValue === "under-2m") {
                    matchesPrice = price < 2000000;
                }

                else if (priceValue === "2m-4m") {
                    matchesPrice =
                        price >= 2000000 &&
                        price <= 4000000;
                }

                else if (priceValue === "over-4m") {
                    matchesPrice = price > 4000000;
                }
            }

            const shouldShow =
                matchesSearch &&
                matchesFuel &&
                matchesYear &&
                matchesPrice;

            card.style.display =
                shouldShow ? "" : "none";
        });
    }

    searchInput.addEventListener(
        "input",
        filterVehicles
    );

    fuelFilter.addEventListener(
        "change",
        filterVehicles
    );

    yearFilter.addEventListener(
        "change",
        filterVehicles
    );

    priceFilter.addEventListener(
        "change",
        filterVehicles
    );

});