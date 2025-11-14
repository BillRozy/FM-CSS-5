import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout.tsx", [
    index("./routes/home.tsx"),
    route("destination", "./routes/destination.tsx", [
      index("./routes/destinations/redirect.tsx"),
      route("moon", "./routes/destinations/moon.tsx"),
      route("mars", "./routes/destinations/mars.tsx"),
      route("europa", "./routes/destinations/europa.tsx"),
      route("titan", "./routes/destinations/titan.tsx"),

    ]),
    route("crew", "./routes/crew.tsx", [
      index("./routes/crew/redirect.tsx"),
      route("commander", "./routes/crew/commander.tsx"),
      route("pilot", "./routes/crew/pilot.tsx"),
      route("mission_specialist", "./routes/crew/specialist.tsx"),
      route("flight_engineer", "./routes/crew/engineer.tsx"),

    ]),
    route("technology", "./routes/technology.tsx", [
      index("./routes/technology/redirect.tsx"),
      route("launch_vehicle", "./routes/technology/vehicle.tsx"),
      route("spaceport", "./routes/technology/spaceport.tsx"),
      route("space_capsule", "./routes/technology/capsule.tsx"),
    ])

  ]),
] satisfies RouteConfig;
