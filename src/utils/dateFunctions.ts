import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const getFormatDistanceToNow = (date: number) => {
  const dateNow = formatDistanceToNow(date, {
    locale: ptBR,
  });

  return dateNow;
};
