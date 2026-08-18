export interface Cohort {
  code: string;
  label: string;
  dateRange: string;
  month: string;
  year: string;
  detail: string;
}

export const cohorts: Cohort[] = [
  {
    code: "T375",
    label: "Próximo grupo",
    dateRange: "19–23",
    month: "Octubre",
    year: "2026",
    detail: "9 clases prácticas · Bauru, Brasil",
  },
  {
    code: "T395",
    label: "Siguiente grupo",
    dateRange: "19–23",
    month: "Abril",
    year: "2027",
    detail: "9 clases prácticas · Bauru, Brasil",
  },
];
