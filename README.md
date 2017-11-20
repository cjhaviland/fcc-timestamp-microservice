# fcc-timestamp-microservice
A coding assignment from FreeCodeCamp to create a microservice that takes either a UNIX based or English timestamp as a parameter and return an object with both UNIX and English

### User Stories:
1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.
4. Self-Inflicted Bonus: Used 3rd-Party library to allow valid natural language dates like "Today" or "Tomorrow"

#### Chrono-node
Original user stories asked you check if the parameter passed is UNIX or some form of English, but I wanted to go a step further. Found a third party library which accepts strings like **today** or **tomorrow** or **December** as possible input.

[FreeCodeCamp](https://www.freecodecamp.org)