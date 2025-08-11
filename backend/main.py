from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, exams, results

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(auth.router)
app.include_router(exams.router)
app.include_router(results.router)

@app.get("/")
def root():
    return {"message": "Student Exam Module API running"}
