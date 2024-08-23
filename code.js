// Function to determine if Abhimanyu can cross the Chakravyuha
function canCrossChakravyuha(p, k, a, b) {
    const initialPower = p;

    for (let i = 0; i < 11; i++) {
        if (p >= k[i]) {
            // Abhimanyu defeats the enemy
            p -= k[i];
        } else if (a > 0) {
            // Abhimanyu skips the battle
            a--;
            continue;
        } else if (b > 0) {
            // Abhimanyu recharges his power
            p = initialPower;
            b--;
        } else {
            return false; // Abhimanyu loses
        }

        // Regeneration condition for enemies in the 3rd and 7th circles
        if (i === 2 || i === 6) {
            k[i] = Math.max(Math.floor(k[i] / 2), 1); // Regenerate to half power (at least 1)
        }
    }

    return true; // Abhimanyu successfully crosses all circles
}

// Test Case 1
const p1 = 50;
const k1 = [10, 20, 30, 15, 25, 35, 10, 5, 40, 20, 30];
const a1 = 2;
const b1 = 1;

console.log(canCrossChakravyuha(p1, k1, a1, b1)); // Output: true/false

// Test Case 2
const p2 = 40;
const k2 = [15, 20, 25, 10, 30, 35, 20, 15, 25, 10, 5];
const a2 = 1;
const b2 = 2;

console.log(canCrossChakravyuha(p2, k2, a2, b2)); // Output: true/false
