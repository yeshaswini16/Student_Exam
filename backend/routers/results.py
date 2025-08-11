from fastapi import APIRouter

router = APIRouter(prefix="/results", tags=["results"])

@router.post("/")
def submit_exam(submission: dict):
    # Dummy scoring
    return {"status": "success", "score": 80, "message": "Exam submitted successfully"}
