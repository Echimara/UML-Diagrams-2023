sequenceDiagram
    participant User
    participant System
    participant ChefCathyCooks
    participant DisclaimerPage
    participant TestimonialPage
    participant ADoctorsCornerPage

    User->>System: Log In(username, password)
    activate System

    User->>System: View Chef Videos(userID)
    activate System
    System->>ChefCathyCooks: Fetch Chef Videos(userID)
    ChefCathyCooks-->>System: List of Chef Videos
    deactivate System

    User->>System: View Disclaimer Page(userID)
    activate System
    System->>DisclaimerPage: Fetch Disclaimer Content(userID)
    DisclaimerPage-->>System: Disclaimer Content
    deactivate System

    User->>System: View Testimonial Page(userID)
    activate System
    System->>TestimonialPage: Fetch Testimonial Content(userID)
    TestimonialPage-->>System: Testimonial Content
    deactivate System

    User->>System: View Doctor's Corner(userID)
    activate System
    System->>ADoctorsCornerPage: Fetch Doctor Corner Content(userID)
    ADoctorsCornerPage-->>System: Doctor Corner Content
    deactivate System

    User->>System: Log Out(userID)
    deactivate System
