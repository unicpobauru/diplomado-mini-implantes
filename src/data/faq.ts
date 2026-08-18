export interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    number: "01",
    question: "¿La certificación es válida en mi país?",
    answer:
      "Sí. UniCPO tiene certificación reconocida por el MEC (Ministério da Educação de Brasil) y metodología de excelencia. Un asesor académico confirma el detalle según tu país de origen.",
  },
  {
    number: "02",
    question: "¿Necesito experiencia previa en ortodoncia?",
    answer:
      "No. El diplomado está diseñado para odontólogos generalistas y ortodoncistas que quieren dominar el anclaje esquelético con mini-implantes desde la práctica clínica real.",
  },
  {
    number: "03",
    question: "¿Cómo funciona el viaje a Brasil?",
    answer:
      "El equipo de Customer Success te acompaña desde la compra de boletos hasta la recepción en el primer día de clase, incluyendo recomendaciones de hospedaje cerca de la clínica.",
  },
  {
    number: "04",
    question: "¿Hay opciones de pago?",
    answer:
      "Sí, el asesor académico te presenta las opciones de financiamiento disponibles para tu país durante la llamada de orientación.",
  },
  {
    number: "05",
    question: "¿Cuándo son las próximas fechas?",
    answer:
      "Próximo grupo T375: 19–23 de octubre de 2026. Siguiente grupo T395: 19–23 de abril de 2027. Los grupos tienen cupos limitados — un asesor confirma la disponibilidad exacta.",
  },
  {
    number: "06",
    question: "¿Cómo es la programación del curso?",
    answer:
      "5 días intensivos con 9 clases prácticas, combinando clases teóricas con práctica en laboratorio (sistema Morelli de mini-implantes) y clínica con pacientes reales.",
  },
  {
    number: "07",
    question: "¿Cómo contacto a un asesor académico?",
    answer:
      "Toca cualquier botón \"Hablar con un asesor académico\" de esta página — te lleva directo a WhatsApp, con respuesta en menos de 24 horas.",
  },
];
