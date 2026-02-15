# 🎯 Number Guessing Game

A sleek, interactive, and logic-based web game built with **Vanilla JavaScript**. Players must challenge their intuition to find the secret number within a limited number of attempts based on the chosen difficulty.



---

## 🚀 Features

* **Dynamic Difficulty:** Three distinct levels (Easy, Medium, Hard) that adjust the number range and the "Max Attempts" allowed.
* **Real-time Feedback:** Instant UI updates for "Too High," "Too Low," or "Correct" guesses.
* **Scoring System:** An efficiency-based score calculated by how many attempts were saved.
* **History Tracking:** A live log of your previous guesses to help you narrow down the target.
* **State Management:** Automatically disables inputs upon game over to prevent errors.

---

## 🎮 How to Play

1.  **Select Level:** Choose your challenge from the dropdown menu.
2.  **Input Guess:** Enter a number in the input field.
3.  **Analyze Hints:** Use the feedback messages to adjust your next guess.
4.  **Win or Lose:** Reach the number before your attempts run out to secure a high score!

---

## 🧮 The Scoring Logic

The game doesn't just track wins; it tracks efficiency. The score is calculated using the following formula:

$$Score = \frac{MaxAttempts - Attempts + 1}{MaxAttempts} \times 100$$

> **Note:** A lower number of attempts results in a significantly higher score. If you guess it on the very first try, you receive a perfect **100**.



---

## 🛠️ Installation & Setup

You don't need any complex environments to run this. 

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/number-guessing-game.git](https://github.com/your-username/number-guessing-game.git)
