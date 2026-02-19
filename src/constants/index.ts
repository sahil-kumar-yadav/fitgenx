export interface ExerciseRoutine {
  name: string;
  sets: number;
  reps: string;
  description?: string;
}

export interface ExerciseDay {
  day: string;
  routines: ExerciseRoutine[];
}

export interface WorkoutPlan {
  title: string;
  description: string;
  schedule: string[];
  exercises: ExerciseDay[];
}

export interface Meal {
  name: string;
  foods: string[];
}

export interface DietPlan {
  title: string;
  description: string;
  dailyCalories: number;
  meals: Meal[];
}

export interface FitnessPlan {
  id: string;
  name: string;
  userId: string;
  fitnessLevel: string;
  fitnessGoal: string;
  workoutPlan: WorkoutPlan;
  dietPlan: DietPlan;
  isActive: boolean;
  createdAt: number;
}

