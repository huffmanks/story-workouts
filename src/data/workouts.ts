import type { Workouts } from "#/types";

export const workouts: Workouts = [
  {
    id: "3b9162bf-2c00-415a-8785-89bc3879364c",
    title: "Exercises to feel young",
    description:
      "A curated routine targeting mobility, cardiovascular health, functional strength and longevity.",
    category: "flexibility",
    exercises: [
      {
        id: "93315a9d-a865-4d39-9a69-b50648a7e761",
        order: 0,
        title: "Bar Hangs",
        description: "Passive overhead hanging from a pull-up bar to decompress the upper body.",
        imageUrl: "/images/exercises-to-feel-young/exercise_01.png",
        videoUrl: "/videos/exercises-to-feel-young/exercise_01.mp4",
        benefits: [
          "Decompresses spine",
          "Rebuilds shoulders",
          "Trains grip strength",
          "Improves posture",
        ],
        protocol: {
          beginner: "5-10 sec holds",
          intermediate: "20-60 sec holds (build to 2 min/day)",
          advanced: "3 min/day total",
        },
        tips: {
          beginner: [
            "Keep feet on a chair or step to unweight your body",
            "Focus on letting your shoulders gently open up without forcing the stretch",
          ],
          intermediate: [
            "Perform a full dead hang with feet completely off the floor",
            "Keep your ribs pulled down and neck long to avoid shrugging into your ears",
          ],
          advanced: ["Incorporate single-arm hangs, mixed grips, and active scapular pull-ups"],
        },
      },
      {
        id: "b3a2c696-764b-48e8-b89c-882e63996c91",
        order: 1,
        title: "Japanese Interval Walking",
        description: "Alternating high- and low-intensity walking intervals over a set duration.",
        imageUrl: "/images/exercises-to-feel-young/exercise_02.png",
        videoUrl: "/videos/exercises-to-feel-young/exercise_02.mp4",
        benefits: [
          "Reverses cardiovascular aging",
          "Lowers blood pressure",
          "Improves leg strength",
        ],
        protocol: {
          beginner: "2 min fast / 3 min slow (20-30 min total)",
          intermediate: "3 min fast / 3 min slow (30 min total, 4 days/week)",
          advanced: "3 min fast / 3 min slow (30+ min on incline or weighted)",
        },
        tips: {
          beginner: [
            "Focus on feeling a clear distinction in effort between fast and slow intervals",
            "Maintain upright posture and land softly on your heels rolling through the midfoot",
          ],
          intermediate: [
            "Push the fast walk to a pace where speaking full sentences becomes difficult",
            "Use the slow walk for active recovery without stopping completely",
          ],
          advanced: [
            "Wear a weighted vest or rucksack, or execute the intervals on an inclined route",
          ],
        },
      },
      {
        id: "73340c30-8c0d-4e6d-8d3d-cfd86d39f905",
        order: 2,
        title: "Asian Squat",
        description: "A deep, full-depth bodyweight squat with flat feet resting on the ground.",
        imageUrl: "/images/exercises-to-feel-young/exercise_03.png",
        videoUrl: "/videos/exercises-to-feel-young/exercise_03.mp4",
        benefits: ["Ankle mobility", "Hip function", "Spinal health"],
        protocol: {
          beginner: "2-5 min/day accumulated",
          intermediate: "5-10 min/day accumulated",
          advanced: "10+ min/day accumulated",
        },
        tips: {
          beginner: [
            "Hold onto a doorframe or couch for leverage, or place a weight under heels",
            "Keep your feet flat on the floor and knees tracking over your toes",
          ],
          intermediate: [
            "Squat completely unassisted with your chest tall and heels planted flat",
            "Breathe deeply into your stomach to release tension in the lower back",
          ],
          advanced: ["Experiment with narrow, wide, or asymmetric stances while reaching overhead"],
        },
      },
      {
        id: "30b969b4-0213-435f-baf1-bb0e736dfcf4",
        order: 3,
        title: "World’s Greatest Stretch",
        description: "A full-body dynamic lunge sequence with a thoracic rotation.",
        imageUrl: "/images/exercises-to-feel-young/exercise_04.png",
        videoUrl: "/videos/exercises-to-feel-young/exercise_04.mp4",
        benefits: ["Hips", "T-spine", "Ankles", "Calves", "Shoulders"],
        protocol: {
          beginner: "2-3 reps per side (hold positions 2 breaths)",
          intermediate: "3-5 reps per side",
          advanced: "5+ reps per side (with weight or overhead hold)",
        },
        tips: {
          beginner: [
            "Walk through each movement phase slowly without rushing the transitions",
            "Skip the thoracic rotation phase until hip and ankle positioning feels stable",
          ],
          intermediate: [
            "Execute the full sequence, rotating your upper chest toward the front leg",
            "Keep your back knee off the ground and push back through the rear heel",
          ],
          advanced: [
            "Add an overhead arm reach at the top or hold a light dumbbell during rotation",
          ],
        },
      },
      {
        id: "a5f07f7a-027e-4e72-a75b-a1d72067ae6e",
        order: 4,
        title: "Zone 2 Cardio",
        description: "Steady-state aerobic exercise performed at a conversational pace.",
        imageUrl: "/images/exercises-to-feel-young/exercise_05.png",
        videoUrl: "/videos/exercises-to-feel-young/exercise_05.mp4",
        benefits: ["Mitochondrial health", "Aerobic base", "Fat oxidation", "Insulin sensitivity"],
        protocol: {
          beginner: "3 x 30 min per week",
          intermediate: "4 x 45 min per week",
          advanced: "4 x 60 min per week",
        },
        tips: {
          beginner: [
            "Maintain a pace where you can comfortably speak in full sentences without gasping",
            "Stick to low-impact options like brisk walking or stationary cycling",
          ],
          intermediate: [
            "Mix modalities across sessions, such as cycling, easy rowing, and jogging",
            "Keep your effort consistent without spiking heart rate on hills or surges",
          ],
          advanced: [
            "Use a heart rate monitor or lactate meter to stay strictly within your Zone 2 window",
          ],
        },
      },
      {
        id: "e62a1c9b-f2ad-4964-9573-41a5f3fc41a0",
        order: 5,
        title: "Plyometrics",
        description: "Explosive jump training to build elasticity and reactive strength.",
        imageUrl: "/images/exercises-to-feel-young/exercise_06.png",
        videoUrl: "/videos/exercises-to-feel-young/exercise_06.mp4",
        benefits: [
          "Fast-twitch muscle fibers",
          "Tendon stiffness",
          "Bone density",
          "Injury resistance",
        ],
        protocol: {
          beginner: "2-3 sets x 8-10 reps (low impact)",
          intermediate: "3-4 sets x 5-8 reps (moderate impact)",
          advanced: "3-5 sets x 3-5 reps (high impact)",
        },
        tips: {
          beginner: [
            "Focus on low-impact hops like ankle pogos, calf jumps, or line hops",
            "Land as softly as possible, making minimal sound on impact",
          ],
          intermediate: [
            "Progress to broad jumps, skate bounds, and box jumps",
            "Focus on absorbing force efficiently through bent knees and loaded hips",
          ],
          advanced: ["Perform maximum-effort depth jumps, bounding, and single-leg variations"],
        },
      },
      {
        id: "561d99e0-62c6-434b-bd5b-f1867a9900bb",
        order: 6,
        title: "Loaded Carries",
        description: "Walking over distances while carrying heavy weights in various positions.",
        imageUrl: "/images/exercises-to-feel-young/exercise_07.png",
        videoUrl: "/videos/exercises-to-feel-young/exercise_07.mp4",
        benefits: ["Muscular endurance", "Grip strength", "Core", "Posture", "Breathing"],
        protocol: {
          beginner: "30 sec per side",
          intermediate: "60 sec holds",
          advanced: "60+ sec holds (bodyweight total load)",
        },
        tips: {
          beginner: [
            "Start with a single kettlebell or dumbbell in one hand (suitcase carry)",
            "Stand completely tall without leaning toward or away from the weight",
          ],
          intermediate: [
            "Use heavy dumbbells or kettlebells in both hands (farmer’s carry)",
            "Grip the handles firmly, pull your shoulders down, and take short, controlled steps",
          ],
          advanced: [
            "Carry equal to your bodyweight, or try overhead and mixed-grip configurations",
          ],
        },
      },
    ],
  },

  // HERERE
  {
    id: "09231a32-dae0-41f6-b941-5d70ea81f611",
    title: "Essential Compound Strength",
    description:
      "A fundamental resistance training routine focused on major compound patterns to build dense muscle and structural strength.",
    category: "strength",
    exercises: [
      {
        id: "a0016348-2f31-4e8e-b7b1-595bbf9c8be2",
        order: 0,
        title: "Goblet Squats",
        description:
          "A front-loaded squat variation that reinforces upright torso position and knee tracking.",
        imageUrl: "",
        videoUrl: "",
        benefits: ["Quad development", "Core stability", "Leg power", "Glute strength"],
        protocol: {
          beginner: "3 sets x 8-10 reps (Light kettlebell/dumbbell)",
          intermediate: "4 sets x 8-12 reps (Moderate load)",
          advanced: "4 sets x 6-8 reps (Heavy load or deficit elevation)",
        },
        tips: {
          beginner: [
            "Hold the weight tight against your chest with elbows tucked in",
            "Sit hips back and down between your knees while keeping heels flat",
          ],
          intermediate: [
            "Pause for 1 second at the bottom position without resting on your calves",
            "Drive up through your whole foot while keeping your chest high",
          ],
          advanced: ["Use a 3-second eccentric (lowering) tempo on each rep"],
        },
      },
      {
        id: "990cde39-194c-45cf-9d5b-895c3641b14c",
        order: 1,
        title: "Romanian Deadlifts",
        description: "A posterior chain hip-hinge movement targeting the hamstrings and glutes.",
        imageUrl: "",
        videoUrl: "",
        benefits: [
          "Hamstring strength",
          "Glute hypertrophy",
          "Lower back resilience",
          "Hinge mechanics",
        ],
        protocol: {
          beginner: "3 sets x 8-10 reps",
          intermediate: "4 sets x 8-10 reps",
          advanced: "4 sets x 6-8 reps",
        },
        tips: {
          beginner: [
            "Keep a slight bend in your knees and push your hips backward as if touching a wall behind you",
            "Stop lowering once your hips stop moving backward to prevent lower back rounding",
          ],
          intermediate: [
            "Keep the weights dragging close along your thighs throughout the movement",
            "Engage your lats by squeezing your armpits shut before starting each rep",
          ],
          advanced: [
            "Use single-leg variations or add resistance bands to increase lockout tension",
          ],
        },
      },
      {
        id: "11f5bbde-0e62-4ffc-93bf-f039df7256f8",
        order: 2,
        title: "Dumbbell Bench Press",
        description: "A classic horizontal pressing movement for upper body pressing power.",
        imageUrl: "",
        videoUrl: "",
        benefits: [
          "Chest hypertrophy",
          "Tricep strength",
          "Shoulder stability",
          "Unilateral balance",
        ],
        protocol: {
          beginner: "3 sets x 10-12 reps",
          intermediate: "4 sets x 8-10 reps",
          advanced: "4 sets x 6-8 reps",
        },
        tips: {
          beginner: [
            "Keep feet flat on the floor and pull shoulder blades down and together against the bench",
            "Lower the dumbbells at a 45-degree angle to your torso, avoiding flared elbows",
          ],
          intermediate: [
            "Control the weights down for 2 seconds before pressing upward smoothly",
            "Maintain a neutral wrist position without letting the weights bend your wrists back",
          ],
          advanced: ["Pause for 2 seconds at the bottom stretch position on every repetition"],
        },
      },
      {
        id: "c210c1a9-959d-4cb8-a587-43d41b96bf44",
        order: 3,
        title: "Single-Arm Dumbbell Row",
        description: "Unilateral horizontal pulling exercise to balance upper back strength.",
        imageUrl: "",
        videoUrl: "",
        benefits: [
          "Lat development",
          "Upper back thickness",
          "Grip strength",
          "Core anti-rotation",
        ],
        protocol: {
          beginner: "3 sets x 10-12 reps per side",
          intermediate: "4 sets x 8-10 reps per side",
          advanced: "4 sets x 6-8 reps per side",
        },
        tips: {
          beginner: [
            "Support your opposite hand and knee on a bench to keep your spine parallel to the floor",
            "Pull your elbow toward your hip rather than straight up to the ceiling",
          ],
          intermediate: [
            "Initiate the pull by retracting your shoulder blade before bending the elbow",
            "Keep your shoulders level and avoid rotating your torso at the top",
          ],
          advanced: ["Pause and squeeze at the top contract position for 2 full seconds"],
        },
      },
      {
        id: "30c5227b-1bb2-415e-8619-8bef6b20b48a",
        order: 4,
        title: "Dumbbell Overhead Press",
        description: "Vertical pressing exercise to build shoulder mass and overhead stability.",
        imageUrl: "",
        videoUrl: "",
        benefits: [
          "Deltoid strength",
          "Tricep activation",
          "Core stabilization",
          "Overhead mobility",
        ],
        protocol: {
          beginner: "3 sets x 10 reps (Seated or standing)",
          intermediate: "4 sets x 8-10 reps (Standing)",
          advanced: "4 sets x 6-8 reps (Standing single-arm or push press)",
        },
        tips: {
          beginner: [
            "Perform seated to focus on arm mechanics without lower body sway",
            "Keep glutes squeezed and ribcage down to prevent arching your lower back",
          ],
          intermediate: [
            "Press standing up, driving your feet into the floor for a solid base",
            "Finish with weights aligned directly over your ears at full extension",
          ],
          advanced: ["Perform single-arm press to demand extreme anti-lateral core stabilization"],
        },
      },
    ],
  },

  {
    id: "d92f9b7d-b0f2-4ad6-b6d1-0bd0cbaedb7d",
    title: "High-Yield Aerobic Conditioning",
    description:
      "A mixed-modality conditioning routine aimed at optimizing VO2 max, cardiac output, and recovery speed.",
    category: "cardio",
    exercises: [
      {
        id: "9428b4ce-b8f3-4757-92d2-c93b4fc9cfba",
        order: 0,
        title: "4x4 VO2 Max Intervals",
        description:
          "High-intensity aerobic intervals on a bike, rower, or tread to raise peak cardiac engine capacity.",
        imageUrl: "",
        videoUrl: "",
        benefits: [
          "Increases VO2 max",
          "Expands stroke volume",
          "Improves work capacity",
          "Boosts metabolic rate",
        ],
        protocol: {
          beginner: "3 x 3 min high effort / 3 min recovery",
          intermediate: "4 x 4 min high effort / 3 min recovery",
          advanced: "5 x 4 min high effort / 2.5 min recovery",
        },
        tips: {
          beginner: [
            "Pace your effort so you do not burn out within the first 60 seconds",
            "Aim for an 8/10 effort where breathing is heavy and sustained",
          ],
          intermediate: [
            "Keep the active recovery period light but continuously moving",
            "Target 90-95% of maximum heart rate during the final minute of each interval",
          ],
          advanced: ["Maintain precise wattage/pace targets across all sets without dropping off"],
        },
      },
      {
        id: "fe142685-987b-4840-91eb-aa6a6575428c",
        order: 1,
        title: "Jump Rope Fartlek",
        description:
          "Dynamic footwork intervals building lower-limb elastic capacity and coordination.",
        imageUrl: "",
        videoUrl: "",
        benefits: ["Agility", "Ankle reactivity", "Calf endurance", "Caloric expenditure"],
        protocol: {
          beginner: "10 rounds: 30 sec bounce / 30 sec rest",
          intermediate: "15 rounds: 45 sec bounce / 15 sec rest",
          advanced: "20 rounds: 60 sec mixed steps / 15 sec rest",
        },
        tips: {
          beginner: [
            "Keep jumps small—only 1-2 inches off the ground on the balls of your feet",
            "Rotate the rope using wrist flicks rather than large arm circles",
          ],
          intermediate: [
            "Alternate between boxer shuffle, high knees, and basic bounce patterns",
            "Maintain a steady breathing rhythm through your nose during recovery",
          ],
          advanced: [
            "Incorporate double-unders or rapid speed-step intervals into the work periods",
          ],
        },
      },
      {
        id: "1e74b333-ecf5-432b-8ecb-01182123cbed",
        order: 2,
        title: "Ergometer Rowing Pyramid",
        description:
          "Sustained pacing builder on the rowing machine challenging aerobic power and stroke efficiency.",
        imageUrl: "",
        videoUrl: "",
        benefits: [
          "Full-body cardiovascular strain",
          "Posterior engagement",
          "Low-impact output",
          "Lactate tolerance",
        ],
        protocol: {
          beginner: "250m - 500m - 250m (Equal rest between efforts)",
          intermediate: "250m - 500m - 750m - 500m - 250m",
          advanced: "500m - 1000m - 1500m - 1000m - 500m",
        },
        tips: {
          beginner: [
            "Drive with your legs first, lean back slightly, then pull arms to ribs",
            "Avoid rushing the slide recovery phase on the way back forward",
          ],
          intermediate: [
            "Keep your stroke rate around 24-28 strokes per minute while driving hard",
            "Focus on smooth power transfer without tugging with your upper back early",
          ],
          advanced: [
            "Match your split time pace down to the exact second on both sides of the pyramid",
          ],
        },
      },
      {
        id: "f3373734-47fe-4f20-96f3-b0a89e35d488",
        order: 3,
        title: "Aerobic Kettlebell Swings",
        description: "Continuous explosive hip-hinge intervals providing posterior conditioning.",
        imageUrl: "",
        videoUrl: "",
        benefits: [
          "Glute endurance",
          "Cardiorespiratory strain",
          "Gripping power",
          "Postural stamina",
        ],
        protocol: {
          beginner: "10 sets x 10 reps (On the minute)",
          intermediate: "15 sets x 15 reps (Every 45 seconds)",
          advanced: "20 sets x 20 reps (On the minute)",
        },
        tips: {
          beginner: [
            "Hinge at the hips, keeping the kettlebell high between your upper inner thighs",
            "Snap your hips forward to float the bell—do not lift it with your arms",
          ],
          intermediate: [
            "Inhale sharply on the downswing and exhale forcefully at hip lockout",
            "Keep your neck neutral without gazing upward at the ceiling at the bottom",
          ],
          advanced: ["Use heavy load or transition to single-arm continuous alternating swings"],
        },
      },
    ],
  },

  {
    id: "21394719-ebfb-4a0f-838f-5907eda2482e",
    title: "Bodyweight Mastery Protocol",
    description:
      "A complete calisthenics framework leveraging leverage, tempo, and positioning to build relative strength.",
    category: "calisthenics",
    exercises: [
      {
        id: "646929fe-e271-4480-9b76-cad799a77ffe",
        order: 0,
        title: "Push-Up Progressions",
        description:
          "The fundamental horizontal bodyweight press targeting chest, shoulders, and core bracing.",
        imageUrl: "",
        videoUrl: "",
        benefits: ["Chest strength", "Tricep capacity", "Scapular health", "Core rigidity"],
        protocol: {
          beginner: "3 sets x 8-10 reps (Incline or knees)",
          intermediate: "4 sets x 12-15 reps (Standard floor)",
          advanced: "4 sets x 8-12 reps (Decline or archer variations)",
        },
        tips: {
          beginner: [
            "Elevate hands on a bench or wall to maintain a straight line from head to heels",
            "Lower your chest all the way to the surface without letting your hips sag",
          ],
          intermediate: [
            "Screw your hands into the floor to generate shoulder torque and stability",
            "Touch your chest to the floor on every rep for full range of motion",
          ],
          advanced: ["Execute archer push-ups or add a 3-second pause at the lowest point"],
        },
      },
      {
        id: "3716bfeb-1297-4ecd-b95f-b7d8d56f28f7",
        order: 1,
        title: "Pull-Ups / Inverted Rows",
        description: "Essential vertical or horizontal bodyweight pulling for upper body balance.",
        imageUrl: "",
        videoUrl: "",
        benefits: ["Lat width", "Bicep strength", "Grip endurance", "Scapular retraction"],
        protocol: {
          beginner: "3 sets x 8-10 reps (Inverted ring/bar rows)",
          intermediate: "4 sets x 5-8 reps (Bodyweight pull-ups)",
          advanced: "4 sets x 8-12 reps (Chest-to-bar or L-sit pull-ups)",
        },
        tips: {
          beginner: [
            "Set up rows at a chest-high bar; walk feet forward to adjust difficulty",
            "Keep your body rigid like a plank while pulling your sternum to the bar",
          ],
          intermediate: [
            "Start from a dead hang with arms straight before pulling up",
            "Pull your collarbone to the bar without kicking your legs for momentum",
          ],
          advanced: ["Perform L-sit pull-ups holding legs parallel to the floor throughout"],
        },
      },
      {
        id: "a7410937-8aba-40a1-a6dc-4983979af4b3",
        order: 2,
        title: "Parallel Bar Dips",
        description: "High-yield pushing movement utilizing full upper body mass.",
        imageUrl: "",
        videoUrl: "",
        benefits: ["Tricep hypertrophy", "Lower chest development", "Shoulder extension stability"],
        protocol: {
          beginner: "3 sets x 6-8 reps (Bench dips with feet planted)",
          intermediate: "4 sets x 6-10 reps (Parallel bar unassisted)",
          advanced: "4 sets x 12-15 reps (Slow tempo or strict paused)",
        },
        tips: {
          beginner: [
            "Keep your back close to the bench and lower until your upper arms are parallel to the floor",
            "Press firmly through your palms to lock out elbows at the top",
          ],
          intermediate: [
            "Lean slightly forward to engage the chest and protect shoulder joints",
            "Control the descent for 2 seconds before pressing up explosively",
          ],
          advanced: ["Incorporate a 3-second negative eccentric phase on every repetition"],
        },
      },
      {
        id: "d165769a-cc95-4458-a39d-b0de8e51ca60",
        order: 3,
        title: "Single-Leg Squats (Pistols / Step-Downs)",
        description: "Unilateral bodyweight leg builder demanding balance, strength, and mobility.",
        imageUrl: "",
        videoUrl: "",
        benefits: [
          "Unilateral leg power",
          "Balance & proprioception",
          "Knee joint stability",
          "Hip control",
        ],
        protocol: {
          beginner: "3 sets x 8 reps per side (Step-downs off a low box)",
          intermediate: "3 sets x 5-8 reps per side (Assisted pistol squats)",
          advanced: "4 sets x 5-8 reps per side (Full unassisted pistol squats)",
        },
        tips: {
          beginner: [
            "Stand on a box or step and tap your non-working heel lightly to the ground",
            "Keep your standing knee tracking over your foot without caving inward",
          ],
          intermediate: [
            "Hold TRX straps or a pole for light balance assistance during pistol squats",
            "Reach your arms forward to act as a counterweight during the descent",
          ],
          advanced: [
            "Perform completely unassisted pistols on a flat surface holding a 5lb plate for counterweight",
          ],
        },
      },
      {
        id: "edcea7c4-c320-456a-ba2e-9808dd425687",
        order: 4,
        title: "Hollow Body Holds",
        description:
          "Gymnastic core hold establishing anterior chain tension and pelvic positioning.",
        imageUrl: "",
        videoUrl: "",
        benefits: ["Abdominal compression", "Gymnastic bracing", "Lower back protection"],
        protocol: {
          beginner: "3 sets x 20 sec holds (Knees bent to chest)",
          intermediate: "4 sets x 30-45 sec holds (Legs extended, arms down)",
          advanced: "4 sets x 60 sec holds (Full extension, arms overhead)",
        },
        tips: {
          beginner: [
            "Press your lower back flush into the floor with no gap under your spine",
            "Tuck your knees toward your chest and lift shoulder blades slightly off the ground",
          ],
          intermediate: [
            "Extend legs straight out while maintaining lower back contact with the floor",
            "Breathe short, controlled breaths into your diaphragm without relaxing your abs",
          ],
          advanced: [
            "Extend arms overhead next to your ears while rocking gently without losing shape",
          ],
        },
      },
    ],
  },
];
