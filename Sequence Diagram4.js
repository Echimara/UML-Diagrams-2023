# For browsing the site

sequenceDiagram
    participant User
    participant System
    participant ChefCathyCooks
    participant DisclaimerPage
    participant TestimonialPage
    participant ADoctorsCornerPage

    User->>System: Log In(username: string, password: string): bool
    activate System

    User->>System: View Chef Videos(userID: int): VideoList
    activate System
    System->>ChefCathyCooks: FetchChefVideos(userID: int): VideoList
    ChefCathyCooks-->>System: List of Chef Videos
    deactivate System

    User->>System: View Disclaimer Page(userID: int): DisclaimerContent
    activate System
    System->>DisclaimerPage: FetchDisclaimerContent(userID: int): DisclaimerContent
    DisclaimerPage-->>System: Disclaimer Page Content
    deactivate System

    User->>System: View Testimonial Page(userID: int): TestimonialContent
    activate System
    System->>TestimonialPage: FetchTestimonialContent(userID: int): TestimonialContent
    TestimonialPage-->>System: Testimonial Page Content
    deactivate System

    User->>System: View Doctor's Corner(userID: int): DoctorCornerContent
    activate System
    System->>ADoctorsCornerPage: FetchDoctorCornerContent(userID: int): DoctorCornerContent
    ADoctorsCornerPage-->>System: Doctor's Corner Content
    deactivate System

    User->>System: Log Out(userID: int): void
    deactivate System
