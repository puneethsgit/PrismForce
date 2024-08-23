# Prismforce Coding Assignment - ASDE Algorithm Test
# PROGRAMMER : puneethspunii@gmail.com

## Problem Statement

Imagine Abhimanyu in Chakravyuha. There are 11 circles in the Chakravyuha surrounded by different enemies. Abhimanyu is located in the innermost circle and has to cross all 11 circles to reach the Pandavas' army back.

### Given:
- Each circle is guarded by a different enemy equipped with powers `k1, k2, ..., k11`.
- Abhimanyu starts from the innermost circle with an initial power `p`.
- Abhimanyu has the ability to skip fighting an enemy `a` times.
- Abhimanyu can recharge his power `b` times.
- Battling in each circle results in a loss of the same power from Abhimanyu as the enemy.
- If Abhimanyu enters a circle with less energy than the respective enemy, he loses the battle.
- Enemies in the 3rd and 7th circles can regenerate themselves once with half of their initial power and can attack Abhimanyu from behind if he is battling in the next circle.

### Objective:
Write an algorithm to determine if Abhimanyu can cross the Chakravyuha and test it with two sets of test cases.

## Algorithm

### 1. Initialization:
- Begin with Abhimanyu's initial power `p`.
- Store the powers of the enemies in an array `k` with 11 elements.
- Initialize the number of skips `a` and the number of recharges `b`.

### 2. Loop Through Each Circle:
- Iterate through each circle from the innermost (1st) to the outermost (11th).
- For each circle `i`, evaluate the following conditions:

### 3. Skip Condition:
- If Abhimanyu's power is less than the enemy's power `k[i]` and he has skips available (`a > 0`), he can skip this circle.
- Decrease the skip count by 1.

### 4. Recharge Condition:
- If Abhimanyu's power is less than the enemy's power `k[i]` and he has recharges available (`b > 0`), he can recharge his power back to the initial value.
- Decrease the recharge count by 1.

### 5. Fight Condition:
- If Abhimanyu's power is greater than or equal to the enemy's power `k[i]`, he defeats the enemy, and his power decreases by `k[i]`.
- If Abhimanyu's power is less than the enemy's power, and he cannot skip or recharge, he loses the battle, and the algorithm terminates with failure.

### 6. Regeneration Condition:
- If the current circle is the 3rd or 7th, the enemy regenerates with half of its initial power after being defeated.
- The regenerated enemy will attack again in the next circle if Abhimanyu is still battling.

### 7. Final Outcome:
- If Abhimanyu successfully defeats or skips all enemies across all 11 circles, he successfully crosses the Chakravyuha.
- If he fails at any circle, the algorithm returns failure.

## Code Implementation


## Test Case
- const p1 = 50;
- const k1 = [10, 20, 30, 15, 25, 35, 10, 5, 40, 20, 30];
- const a1 = 2;
- const b1 = 1;

- console.log(canCrossChakravyuha(p1, k1, a1, b1)); // Output: true/false


```javascript
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


