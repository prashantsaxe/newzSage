# PrashantSaxe-StudyChamber

## Overview
PrashantSaxe-StudyChamber is a **Django-based web application** designed to facilitate online study discussions. Users can join different study rooms, engage in conversations, and collaborate on various topics. The project follows the **MVC (Model-View-Controller) architecture**, making it modular and easy to extend.

## Features
- **User Authentication**: Secure login and registration.
- **Study Rooms**: Users can create and join topic-based discussion rooms.
- **Real-time Conversations**: Engage in discussions with other users.
- **Topic Categorization**: Rooms are organized based on study topics.
- **Responsive UI**: Built using Django templates.

---

## Tech Stack
### Backend:
- **Framework**: Django (Python)
- **Database**: SQLite (default, can be extended to PostgreSQL)
- **Authentication**: Django Authentication System
- **Template Engine**: Django Templates

### Frontend:
- **HTML & CSS**: Django template rendering
- **JavaScript**: For interactive UI components

### Deployment:
- **Hosting**: Render / DigitalOcean / AWS
- **Database**: SQLite (or PostgreSQL for production)
- **CI/CD**: GitHub Actions (optional)

---

## Directory Structure
```
prashantsaxe-studychamber/
├── README.md              # Project documentation
├── db.sqlite3             # SQLite database file
├── manage.py              # Django management script
├── base/                  # Application logic
│   ├── __init__.py
│   ├── admin.py           # Admin panel configurations
│   ├── apps.py            # App configuration
│   ├── models.py          # Database models
│   ├── tests.py           # Unit tests
│   ├── urls.py            # URL routing
│   ├── views.py           # Business logic
│   ├── migrations/        # Database migrations
│   └── __pycache__/       # Compiled Python files
├── studyChamber/          # Main Django project settings
│   ├── __init__.py
│   ├── asgi.py            # ASGI configuration
│   ├── settings.py        # Project settings
│   ├── urls.py            # Root URL routing
│   ├── wsgi.py            # WSGI configuration
│   └── __pycache__/       # Compiled Python files
└── templates/             # HTML templates for rendering pages
    ├── home.html          # Home page template
    ├── main.html          # Base template
    └── room.html          # Room view template
```

---

## Setup Instructions
### Prerequisites:
- Python 3.8+
- Virtual Environment (recommended)

### Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/prashantsaxe/studychamber.git
   cd studychamber
   ```

2. **Setup Virtual Environment**
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**
   ```sh
   pip install -r requirements.txt
   ```

4. **Apply Migrations**
   ```sh
   python manage.py migrate
   ```

5. **Start the Development Server**
   ```sh
   python manage.py runserver
   ```

6. **Open in Browser**
   ```
   http://127.0.0.1:8000/
   ```

---

## API Endpoints
### **Authentication**
- `POST /auth/signup/` - Register a new user
- `POST /auth/login/` - Authenticate user

### **Study Room Management**
- `GET /rooms/` - Fetch all study rooms
- `GET /rooms/:id/` - Get details of a specific room
- `POST /rooms/create/` - Create a new study room
- `DELETE /rooms/:id/` - Delete a study room (Admin only)

### **Discussions**
- `POST /rooms/:id/comment/` - Add a comment
- `GET /rooms/:id/comments/` - Fetch comments

---

## Contributing
We welcome contributions! To contribute:
1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push and open a pull request

---

## License
This project is licensed under the **MIT License**.

---

## Contact
For inquiries or collaboration, reach out:
- **GitHub**: [prashantsaxe](https://github.com/prashantsaxe)
- **LinkedIn**: [Prashant Saxena](https://linkedin.com/in/prashant-saxena-131473193)

