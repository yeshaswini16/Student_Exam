from fastapi import APIRouter

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/login")
def login(user: dict):
    # Dummy authentication
    if user.get("email") and user.get("password"):
        return {"status": "success", "student": {"name": "John Doe", "email": user["email"]}}
    return {"status": "failed", "message": "Invalid credentials"}
