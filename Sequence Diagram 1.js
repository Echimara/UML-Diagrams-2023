sequenceDiagram
    participant User as U
    participant Website as W
    participant Database as DB
    participant Chef as C

    U->>W: Navigate to Recipe Section
    W->>DB: Retrieve Recipe List
    DB-->>W: Send Recipe Data
    W->>U: Display Recipe List

    U->>W: Select a Recipe
    W->>DB: Retrieve Recipe Details
    DB-->>W: Send Recipe Details
    W->>U: Display Recipe Details

    U->>W: Save Recipe to Favorites
    W->>DB: Save Recipe to User Profile
    DB-->>W: Confirmation
    W->>U: Display Confirmation

    U->>W: Log out

    Note over U,W: User interaction\nwith the website
    Note over DB: Database operations
