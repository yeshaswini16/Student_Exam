from fastapi import APIRouter

router = APIRouter(prefix="/exams", tags=["exams"])

@router.get("/")
def get_exams():
    return [
        {"id": 1, "title": "Math Test", "duration": 30},
        {"id": 2, "title": "Science Test", "duration": 45}
    ]

@router.get("/{exam_id}")
def get_exam(exam_id: int):
    return {
        "id": exam_id,
        "title": "Math Test",
        "questions": [
            {"id": 1, "type": "mcq", "text": "2+2=?", "options": ["3", "4", "5"]},
            {"id": 2, "type": "short", "text": "Explain gravity in one line."}
        ]
    }

