interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

interface SeedData {
  entries: SeedEntry[];
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pendente: Task for includes funcionalits in application",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "In-Progress Task for tables  in application",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description: "Terminadas: Task for create modals in application",
      status: "finish",
      createdAt: Date.now() - 10000,
    },
  ],
};
