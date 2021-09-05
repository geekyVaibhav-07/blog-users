# blog-users
Users services for project blog
    - can create, update, delete user

Routes: 
    - path: /user
    - methods:
        - get: get user/users
        - post: create a new user
        - put: updated user
        - delete: delete user

Schema of a post: 
    {
        id: ObjectId
        email: String
        password: String
        passwordChnagedAt: DateTime
        firstName: String
        lastName: String
        gender: String
        bio: String
        profession: String
        address: String
        contactNumber: String
        dob: String
        profilePicture: String
        pictures: Array
        accountCreatedAt: DateTime
        wrongPasswordAttempts: Number
        isBlocked: DateTime
    }

env varriables that should be set in .env file: 
    DATABASE_HOST='mongodb+srv' URIs
    DATABASE_USER=database username
    DATABASE_PASSWORD=database pasword
    DATABASE=database
    PRODUCTION_PORT=8001
    DEVELOPMENT_PORT=8001