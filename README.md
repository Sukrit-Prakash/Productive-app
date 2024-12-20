# Task Management App with Mood Calendar

This is a React Native app built using **Expo** to manage user tasks and display a calendar with mood tracking. Users can view their tasks, track their mood on different days, and interact with a visually appealing and responsive UI. The app communicates with a backend API for managing tasks and mood data.

## Features

1. **Mood Calendar**
   - Displays user mood for each day (happy, neutral, sad) using color-coded dots.
   - Allows users to select a date and view tasks for that day.

2. **Task Management**
   - Fetches tasks dynamically based on the selected date.
   - Displays tasks with their title, description, and due date.

3. **Interactive UI**
   - Clean and responsive UI.
   - Uses `react-native-calendars` for the calendar component.

4. **Backend Integration**
   - Fetches moods and tasks from a backend API using `axios`.
   - Supports query parameters for date filtering.

## Setup Instructions

### Prerequisites

1. Install [Node.js](https://nodejs.org/) and [Expo CLI](https://docs.expo.dev/get-started/installation/).
2. Ensure you have a backend API running with endpoints for moods and tasks.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/task-mood-app.git
   cd task-mood-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo server:
   ```bash
   expo start
   ```

4. Run the app on your device or emulator:
   - For Android: Scan the QR code in the Expo Go app.
   - For iOS: Use Expo Go or run on a simulator.

### Environment Variables

Create an `.env` file in the root directory to store the backend API base URL:

```
API_BASE_URL=http://your-backend-api-url
```

Update `axios` requests to use this base URL:
```javascript
const API_BASE_URL = process.env.API_BASE_URL;
axios.get(`${API_BASE_URL}/moods/${userId}`);
```

## Project Structure

```
.
├── components
│   ├── ui
│   │   └── TaskList.js         # Task list component
│   └── screens
│       ├── HomeScreen.js      # Main screen with calendar and task view
│       └── AddTaskScreen.js   # Screen to add tasks
├── App.js                     # Entry point of the app
├── package.json               # Dependencies and scripts
├── .env                       # Environment variables
└── README.md                  # Documentation
```

## API Endpoints

### Moods API
- **GET** `/api/moods/:userId`
  - Response:
    ```json
    [
      { "date": "2024-12-15", "mood": "happy" },
      { "date": "2024-12-16", "mood": "neutral" }
    ]
    ```

### Tasks API
- **GET** `/api/tasks/:userId?date=YYYY-MM-DD`
  - Query Parameters:
    - `date` (optional): Filter tasks by the given date.
  - Response:
    ```json
    [
      {
        "_id": "task123",
        "taskTitle": "Complete Homework",
        "description": "Math and Science",
        "dueDate": "2024-12-15T18:00:00.000Z"
      }
    ]
    ```

## Customization

### Change Mood Colors
Modify the `getMoodColor` function in `HomeScreen.js`:
```javascript
const getMoodColor = (mood) => {
  switch (mood) {
    case 'happy':
      return 'green';
    case 'neutral':
      return 'orange';
    case 'sad':
      return 'red';
    default:
      return 'gray';
  }
};
```

### Add New Features
- Add task creation or editing.
- Extend the calendar to display more details.
- Implement push notifications for task reminders.

## Dependencies

- `react-native`
- `expo`
- `react-native-calendars`
- `axios`


## License

This project is licensed under the MIT License. Feel free to use and modify it for your own projects.

## Author

Developed by Sukrit. Reach out for suggestions or improvements!

