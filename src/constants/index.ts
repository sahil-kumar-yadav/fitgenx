// Type definitions for the fitness app

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  description?: string;
}

export interface ExerciseDay {
  day: string;
  routines: Exercise[];
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

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  height: string;
  weight: string;
  fitnessLevel: string;
  fitnessGoal: string;
  workoutDays: number;
  equipmentAccess: string;
  injuries: string;
}

// Sample data for the program gallery
export const USER_PROGRAMS = [
  {
    id: "001",
    first_name: "Alex",
    last_name: "Chen",
    age: 28,
    gender: "male",
    height: "5'10\"",
    weight: "175 lbs",
    fitness_level: "intermediate",
    fitness_goal: "muscle_build",
    workout_days: 5,
    equipment_access: "Full gym access",
    injuries: "None",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    workout_plan: {
      title: "Hypertrophy Push Pull Legs",
      description: "A comprehensive 6-day program focused on muscle building through progressive overload and optimal volume distribution.",
      schedule: ["Push Day", "Pull Day", "Legs Day", "Push Day", "Pull Day", "Legs Day"],
      exercises: [
        {
          day: "Push Day",
          routines: [
            { name: "Bench Press", sets: 4, reps: "8-10", description: "Barbell bench press with controlled eccentrics" },
            { name: "Overhead Press", sets: 3, reps: "10-12", description: "Standing barbell overhead press" },
            { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", description: "30-degree incline press" },
            { name: "Lateral Raises", sets: 4, reps: "15-20", description: "Cable or dumbbell lateral raises" },
            { name: "Tricep Pushdowns", sets: 3, reps: "12-15", description: "Cable tricep pushdowns" },
          ]
        },
        {
          day: "Pull Day",
          routines: [
            { name: "Deadlift", sets: 4, reps: "5", description: "Conventional deadlift" },
            { name: "Pull-ups", sets: 4, reps: "8-12", description: "Weighted or bodyweight pull-ups" },
            { name: "Barbell Rows", sets: 4, reps: "8-10", description: "Bent over barbell rows" },
            { name: "Face Pulls", sets: 3, reps: "15-20", description: "Cable face pulls for rear delts" },
            { name: "Barbell Curls", sets: 3, reps: "10-12", description: "Standard barbell curls" },
          ]
        },
        {
          day: "Legs Day",
          routines: [
            { name: "Squats", sets: 4, reps: "6-8", description: "Back squats with proper form" },
            { name: "Romanian Deadlifts", sets: 4, reps: "8-10", description: "RDLs for hamstring development" },
            { name: "Leg Press", sets: 3, reps: "12-15", description: "Machine leg press" },
            { name: "Leg Curls", sets: 3, reps: "12-15", description: "Lying leg curls" },
            { name: "Calf Raises", sets: 4, reps: "15-20", description: "Standing calf raises" },
          ]
        }
      ]
    },
    diet_plan: {
      title: "High Protein Lean Bulk",
      description: "Calorie surplus diet optimized for muscle building with adequate protein intake.",
      dailyCalories: 3200,
      meals: [
        {
          name: "Breakfast",
          foods: ["6 egg whites + 2 whole eggs", "100g oatmeal", "30g protein powder", "1 banana"]
        },
        {
          name: "Lunch",
          foods: ["200g chicken breast", "300g brown rice", "100g broccoli", "15ml olive oil"]
        },
        {
          name: "Pre-Workout",
          foods: ["150g sweet potato", "150g lean ground beef", "50g vegetables"]
        },
        {
          name: "Dinner",
          foods: ["200g salmon", "300g white rice", "100g asparagus", "15ml avocado oil"]
        },
        {
          name: "Before Bed",
          foods: ["200g cottage cheese", "30g casein protein", "30g almonds"]
        }
      ]
    }
  },
  {
    id: "002",
    first_name: "Sarah",
    last_name: "Miller",
    age: 32,
    gender: "female",
    height: "5'6\"",
    weight: "145 lbs",
    fitness_level: "beginner",
    fitness_goal: "weight_loss",
    workout_days: 4,
    equipment_access: "Home gym",
    injuries: "Lower back pain",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    workout_plan: {
      title: "Full Body Fat Loss",
      description: "Beginner-friendly full body program designed to maximize fat loss while preserving muscle mass.",
      schedule: ["Full Body A", "Rest", "Full Body B", "Rest", "Full Body A", "Rest"],
      exercises: [
        {
          day: "Full Body A",
          routines: [
            { name: "Goblet Squats", sets: 3, reps: "12-15", description: "Light weight goblet squats" },
            { name: "Push-ups", sets: 3, reps: "8-12", description: "Modified or standard push-ups" },
            { name: "Dumbbell Rows", sets: 3, reps: "12-15", description: "Single arm dumbbell rows" },
            { name: "Glute Bridges", sets: 3, reps: "15", description: "Bodyweight glute bridges" },
            { name: "Plank", sets: 3, reps: "30 seconds", description: "Forearm plank hold" },
          ]
        },
        {
          day: "Full Body B",
          routines: [
            { name: "Lunges", sets: 3, reps: "12 each leg", description: "Walking lunges" },
            { name: "Dumbbell Press", sets: 3, reps: "12-15", description: "Seated dumbbell press" },
            { name: "Lat Pulldowns", sets: 3, reps: "12-15", description: "Cable lat pulldowns" },
            { name: "Dead Bug", sets: 3, reps: "10 each side", description: "Core stability exercise" },
            { name: "Bird Dog", sets: 3, reps: "10 each side", description: "Balance and core exercise" },
          ]
        }
      ]
    },
    diet_plan: {
      title: "Calorie Deficit Fat Loss",
      description: "Moderate calorie deficit diet focused on sustainable fat loss and metabolic health.",
      dailyCalories: 1800,
      meals: [
        {
          name: "Breakfast",
          foods: ["3 egg whites + 1 whole egg", "50g oatmeal", "1 cup mixed berries"]
        },
        {
          name: "Lunch",
          foods: ["150g chicken breast", "150g quinoa", "150g mixed vegetables"]
        },
        {
          name: "Snack",
          foods: ["150g Greek yogurt", "10 almonds"] 
        },
        {
          name: "Dinner",
          foods: ["150g white fish", "200g roasted vegetables", "100g sweet potato"]
        },
        {
          name: "Before Bed",
          foods: ["100g cottage cheese", "1 tablespoon chia seeds"]
        }
      ]
    }
  },
  {
    id: "003",
    first_name: "Marcus",
    last_name: "Johnson",
    age: 35,
    gender: "male",
    height: "6'0\"",
    weight: "210 lbs",
    fitness_level: "advanced",
    fitness_goal: "strength",
    workout_days: 6,
    equipment_access: "Full gym access",
    injuries: "None",
    profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    workout_plan: {
      title: "Powerlifting Focus",
      description: "Advanced powerlifting program designed to maximize strength in the big three lifts.",
      schedule: ["Squat", "Bench", "Deadlift", "Squat", "Bench", "Deadlift", "Accessory"],
      exercises: [
        {
          day: "Squat Day",
          routines: [
            { name: "Back Squat", sets: 5, reps: "3-5", description: "Heavy back squat, 85-90% 1RM" },
            { name: "Front Squat", sets: 4, reps: "6-8", description: "Front squat for quad development" },
            { name: "Leg Press", sets: 3, reps: "10-12", description: "Machine leg press" },
            { name: "Romanian Deadlift", sets: 3, reps: "8-10", description: "RDL for posterior chain" },
            { name: "Calf Raises", sets: 4, reps: "12-15", description: "Standing calf raises" },
          ]
        },
        {
          day: "Bench Day",
          routines: [
            { name: "Bench Press", sets: 5, reps: "3-5", description: "Heavy bench press, 85-90% 1RM" },
            { name: "Close Grip Bench", sets: 4, reps: "6-8", description: "Close grip for tricep strength" },
            { name: "Incline Dumbbell Press", sets: 3, reps: "8-10", description: "30-degree incline press" },
            { name: "Dumbbell Flys", sets: 3, reps: "10-12", description: "Flat dumbbell flys" },
            { name: "Tricep Dips", sets: 3, reps: "8-12", description: "Weighted dips" },
          ]
        },
        {
          day: "Deadlift Day",
          routines: [
            { name: "Deadlift", sets: 5, reps: "3-5", description: "Heavy deadlift, 85-90% 1RM" },
            { name: "Barbell Row", sets: 4, reps: "6-8", description: "Heavy barbell rows" },
            { name: "Pull-ups", sets: 4, reps: "8-10", description: "Weighted pull-ups" },
            { name: "Face Pulls", sets: 3, reps: "15-20", description: "Rear delt work" },
            { name: "Farmer's Walk", sets: 4, reps: "50ft", description: "Heavy farmer's walks" },
          ]
        }
      ]
    },
    diet_plan: {
      title: "Strength Athlete Nutrition",
      description: "High calorie diet optimized for strength training recovery and performance.",
      dailyCalories: 4500,
      meals: [
        {
          name: "Breakfast",
          foods: ["8 eggs", "150g bacon", "200g hashbrowns", "100g avocado", "2 slices toast"]
        },
        {
          name: "Lunch",
          foods: ["300g chicken breast", "400g white rice", "100g vegetables", "30ml olive oil"]
        },
        {
          name: "Pre-Workout",
          foods: ["300g pasta", "200g ground beef", "50g parmesan", "Garlic bread"]
        },
        {
          name: "Post-Workout",
          foods: ["50g whey protein", "100g rice cakes", "2 bananas", "500ml whole milk"]
        },
        {
          name: "Dinner",
          foods: ["400g salmon steak", "400g mashed potatoes", "100g asparagus", "50g butter"]
        },
        {
          name: "Before Bed",
          foods: ["100g casein protein", "100g peanut butter", "2 slices bread"]
        }
      ]
    }
  }
];

