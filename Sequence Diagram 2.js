sequenceDiagram
    participant User as U
    participant Website as W
    participant Support as S

    U->>W: Log in
    W->>U: Display User Dashboard

    U->>W: Click on 'Contact Support'
    W->>S: Open Inquiry Form

    U->>W: Fill in Inquiry Form
    W->>S: Submit Inquiry Data

    Note over U,W: User fills out inquiry details
    Note over S: Support processes inquiry

    S-->>W: Inquiry Response
    W-->>U: Display Response

    U->>W: Log out

    Note over W,S: Interaction with support system
