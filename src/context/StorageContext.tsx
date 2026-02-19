"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { FitnessPlan } from "@/constants";

// Storage context type
interface StorageContextType {
  plans: FitnessPlan[];
  savePlan: (plan: FitnessPlan) => void;
  deletePlan: (id: string) => void;
  setActivePlan: (id: string) => void;
  getUserPlans: (userId: string) => FitnessPlan[];
}

const StorageContext = createContext<StorageContextType | undefined>(undefined);

const STORAGE_KEY = "fitgenx_plans";

// Sample AI-generated workout plans (simulating Ollama API response)
const generateSamplePlan = (userData: {
  fitnessLevel: string;
  fitnessGoal: string;
  workoutDays: number;
  name: string;
}): FitnessPlan => {
  const { fitnessLevel, fitnessGoal, workoutDays, name } = userData;

  const workoutPlans = {
    muscle_build: {
      title: "Hypertrophy Muscle Building",
      description: "A comprehensive program focused on muscle building through progressive overload.",
      schedule: ["Push Day", "Pull Day", "Legs Day", "Push Day", "Pull Day", "Legs Day"].slice(0, workoutDays + 1),
      exercises: [
        {
          day: "Push Day",
          routines: [
            { name: "Bench Press", sets: 4, reps: "8-10", description: "Compound chest movement" },
            { name: "Overhead Press", sets: 3, reps: "10-12", description: "Shoulder strength" },
            { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", description: "Upper chest focus" },
            { name: "Lateral Raises", sets: 4, reps: "15-20", description: "Shoulder isolation" },
            { name: "Tricep Pushdowns", sets: 3, reps: "12-15", description: "Tricep isolation" },
          ]
        },
        {
          day: "Pull Day",
          routines: [
            { name: "Deadlift", sets: 4, reps: "5", description: "Full body compound" },
            { name: "Pull-ups", sets: 4, reps: "8-12", description: "Back width" },
            { name: "Barbell Rows", sets: 4, reps: "8-10", description: "Back thickness" },
            { name: "Face Pulls", sets: 3, reps: "15-20", description: "Rear delts" },
            { name: "Barbell Curls", sets: 3, reps: "10-12", description: "Bicep isolation" },
          ]
        },
        {
          day: "Legs Day",
          routines: [
            { name: "Squats", sets: 4, reps: "6-8", description: "King of leg exercises" },
            { name: "Romanian Deadlifts", sets: 4, reps: "8-10", description: "Hamstring focus" },
            { name: "Leg Press", sets: 3, reps: "12-15", description: "Quad development" },
            { name: "Leg Curls", sets: 3, reps: "12-15", description: "Hamstring isolation" },
            { name: "Calf Raises", sets: 4, reps: "15-20", description: "Calf development" },
          ]
        }
      ]
    },
    weight_loss: {
      title: "Fat Loss Circuit Training",
      description: "High-intensity program designed to maximize calorie burn and fat loss.",
      schedule: ["Full Body A", "Rest", "Full Body B", "Rest", "Full Body A", "Rest"].slice(0, workoutDays + 1),
      exercises: [
        {
          day: "Full Body A",
          routines: [
            { name: "Goblet Squats", sets: 3, reps: "12-15", description: "Lower body compound" },
            { name: "Push-ups", sets: 3, reps: "10-15", description: "Upper body push" },
            { name: "Dumbbell Rows", sets: 3, reps: "12-15", description: "Upper body pull" },
            { name: "Glute Bridges", sets: 3, reps: "15", description: "Posterior chain" },
            { name: "Plank", sets: 3, reps: "45 seconds", description: "Core stability" },
          ]
        },
        {
          day: "Full Body B",
          routines: [
            { name: "Lunges", sets: 3, reps: "12 each", description: "Unilateral leg work" },
            { name: "Dumbbell Press", sets: 3, reps: "12-15", description: "Chest pressing" },
            { name: "Lat Pulldowns", sets: 3, reps: "12-15", description: "Back work" },
            { name: "Mountain Climbers", sets: 3, reps: "20 each", description: "Cardio + core" },
            { name: "Kettlebell Swings", sets: 3, reps: "15", description: "Full body cardio" },
          ]
        }
      ]
    },
    strength: {
      title: "Powerlifting Focus",
      description: "Advanced strength program targeting the big three lifts.",
      schedule: ["Squat", "Bench", "Deadlift", "Squat", "Bench", "Deadlift", "Accessory"].slice(0, workoutDays + 1),
      exercises: [
        {
          day: "Squat Day",
          routines: [
            { name: "Back Squat", sets: 5, reps: "3-5", description: "Heavy squatting" },
            { name: "Front Squat", sets: 4, reps: "6-8", description: "Quad strength" },
            { name: "Leg Press", sets: 3, reps: "10-12", description: "Volume work" },
            { name: "Romanian Deadlift", sets: 3, reps: "8-10", description: "Posterior chain" },
            { name: "Calf Raises", sets: 4, reps: "12-15", description: "Calves" },
          ]
        },
        {
          day: "Bench Day",
          routines: [
            { name: "Bench Press", sets: 5, reps: "3-5", description: "Heavy pressing" },
            { name: "Close Grip Bench", sets: 4, reps: "6-8", description: "Tricep strength" },
            { name: "Incline Dumbbell Press", sets: 3, reps: "8-10", description: "Upper chest" },
            { name: "Dumbbell Flys", sets: 3, reps: "10-12", description: "Chest isolation" },
            { name: "Tricep Dips", sets: 3, reps: "8-12", description: "Tricep work" },
          ]
        },
        {
          day: "Deadlift Day",
          routines: [
            { name: "Deadlift", sets: 5, reps: "3-5", description: "Heavy deadlifts" },
            { name: "Barbell Row", sets: 4, reps: "6-8", description: "Back thickness" },
            { name: "Pull-ups", sets: 4, reps: "8-10", description: "Back width" },
            { name: "Face Pulls", sets: 3, reps: "15-20", description: "Rear delts" },
            { name: "Farmer's Walk", sets: 4, reps: "50ft", description: "Grip strength" },
          ]
        }
      ]
    },
    general_fitness: {
      title: "Balanced Fitness Program",
      description: "Well-rounded program for overall health and fitness.",
      schedule: ["Upper Body", "Lower Body", "Rest", "Upper Body", "Lower Body", "Cardio", "Rest"].slice(0, workoutDays + 1),
      exercises: [
        {
          day: "Upper Body",
          routines: [
            { name: "Bench Press", sets: 3, reps: "10", description: "Chest" },
            { name: "Barbell Rows", sets: 3, reps: "10", description: "Back" },
            { name: "Overhead Press", sets: 3, reps: "10", description: "Shoulders" },
            { name: "Dumbbell Curls", sets: 3, reps: "12", description: "Biceps" },
            { name: "Tricep Pushdowns", sets: 3, reps: "12", description: "Triceps" },
          ]
        },
        {
          day: "Lower Body",
          routines: [
            { name: "Squats", sets: 3, reps: "10", description: "Quads" },
            { name: "Deadlifts", sets: 3, reps: "10", description: "Posterior chain" },
            { name: "Lunges", sets: 3, reps: "12 each", description: "Unilateral" },
            { name: "Leg Curls", sets: 3, reps: "12", description: "Hamstrings" },
            { name: "Calf Raises", sets: 3, reps: "15", description: "Calves" },
          ]
        },
        {
          day: "Cardio",
          routines: [
            { name: "Treadmill Run", sets: 1, reps: "20 min", description: "Steady state" },
            { name: "Jump Rope", sets: 3, reps: "5 min", description: "HIIT cardio" },
            { name: "Battle Ropes", sets: 3, reps: "1 min", description: "Arm cardio" },
          ]
        }
      ]
    }
  };

  const dietPlans = {
    muscle_build: {
      title: "High Protein Muscle Building",
      description: "Calorie surplus diet optimized for muscle growth.",
      dailyCalories: 3200,
      meals: [
        { name: "Breakfast", foods: ["6 egg whites + 2 whole eggs", "100g oatmeal", "1 banana", "30g protein powder"] },
        { name: "Lunch", foods: ["200g chicken breast", "300g brown rice", "100g broccoli", "15ml olive oil"] },
        { name: "Pre-Workout", foods: ["150g sweet potato", "150g ground beef"] },
        { name: "Dinner", foods: ["200g salmon", "300g white rice", "100g asparagus"] },
        { name: "Before Bed", foods: ["200g cottage cheese", "30g casein protein"] }
      ]
    },
    weight_loss: {
      title: "Calorie Deficit Fat Loss",
      description: "Moderate deficit for sustainable fat loss.",
      dailyCalories: 1800,
      meals: [
        { name: "Breakfast", foods: ["3 egg whites + 1 whole egg", "50g oatmeal", "1 cup berries"] },
        { name: "Lunch", foods: ["150g chicken breast", "150g quinoa", "150g vegetables"] },
        { name: "Snack", foods: ["150g Greek yogurt", "10 almonds"] },
        { name: "Dinner", foods: ["150g white fish", "200g roasted vegetables", "100g sweet potato"] },
        { name: "Before Bed", foods: ["100g cottage cheese"] }
      ]
    },
    strength: {
      title: "Strength Athlete Nutrition",
      description: "High calorie for maximum strength gains.",
      dailyCalories: 4000,
      meals: [
        { name: "Breakfast", foods: ["8 eggs", "150g bacon", "200g hashbrowns", "2 toast"] },
        { name: "Lunch", foods: ["300g chicken", "400g rice", "100g vegetables", "30ml oil"] },
        { name: "Pre-Workout", foods: ["300g pasta", "200g beef", "Garlic bread"] },
        { name: "Post-Workout", foods: ["50g whey", "100g rice cakes", "2 bananas"] },
        { name: "Dinner", foods: ["400g salmon", "400g potatoes", "100g vegetables"] },
        { name: "Before Bed", foods: ["100g casein", "100g peanut butter"] }
      ]
    },
    general_fitness: {
      title: "Balanced Nutrition",
      description: "Moderate calories for maintainable fitness.",
      dailyCalories: 2500,
      meals: [
        { name: "Breakfast", foods: ["4 eggs", "80g oatmeal", "1 fruit"] },
        { name: "Lunch", foods: ["200g chicken", "200g rice", "150g vegetables"] },
        { name: "Snack", foods: ["Protein shake", "20g almonds"] },
        { name: "Dinner", foods: ["200g fish/meat", "200g vegetables", "150g potatoes"] },
        { name: "Before Bed", foods: ["100g Greek yogurt"] }
      ]
    }
  };

  const workoutKey = fitnessGoal as keyof typeof workoutPlans;
  const dietKey = fitnessGoal as keyof typeof dietPlans;

  return {
    id: `plan_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name: `${name}'s ${workoutPlans[workoutKey]?.title || "Custom"} Plan`,
    userId: "",
    fitnessLevel,
    fitnessGoal,
    workoutPlan: workoutPlans[workoutKey] || workoutPlans.general_fitness,
    dietPlan: dietPlans[dietKey] || dietPlans.general_fitness,
    isActive: true,
    createdAt: Date.now(),
  };
};

export function StorageProvider({ children }: { children: ReactNode }) {
  const [plans, setPlans] = useState<FitnessPlan[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPlans(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to load plans from storage:", error);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when plans change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
      } catch (error) {
        console.error("Failed to save plans to storage:", error);
      }
    }
  }, [plans, isLoaded]);

  const savePlan = (plan: FitnessPlan) => {
    setPlans((prev) => {
      // Deactivate all other plans if this one is active
      if (plan.isActive) {
        return [...prev.map((p) => ({ ...p, isActive: false })), plan];
      }
      return [...prev, plan];
    });
  };

  const deletePlan = (id: string) => {
    setPlans((prev) => prev.filter((p) => p.id !== id));
  };

  const setActivePlan = (id: string) => {
    setPlans((prev) =>
      prev.map((p) => ({
        ...p,
        isActive: p.id === id,
      }))
    );
  };

  const getUserPlans = (userId: string): FitnessPlan[] => {
    return plans.filter((p) => p.userId === userId || p.userId === "");
  };

  return (
    <StorageContext.Provider
      value={{
        plans,
        savePlan,
        deletePlan,
        setActivePlan,
        getUserPlans,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}

// Hook to use storage context
export function useStorage() {
  const context = useContext(StorageContext);
  if (context === undefined) {
    throw new Error("useStorage must be used within a StorageProvider");
  }
  return context;
}

// Export the plan generator for use in generate-program
export { generateSamplePlan };

