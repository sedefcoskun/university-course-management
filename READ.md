## University Course Management System

This project implements a simple university grading system using JavaScript.

### Technologies & Concepts
- ES6 Classes
- Asynchronous callbacks (setTimeout)
- Object.defineProperty (immutable properties)
- Array methods (map, filter, reduce)
- Modular file structure

### File Structure
- models.js: Defines the Student class
- database.js: Simulates asynchronous data fetching
- analytics.js: Contains calculation and analysis logic
- main.js: Entry point of the application

### Top Student Logic
The top student is selected based on the overall average of all courses.
This approach evaluates general academic performance instead of a single course score.

### How to Run
```bash
node main.js
