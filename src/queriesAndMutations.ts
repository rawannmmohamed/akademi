import { useQuery } from "@tanstack/react-query";
import { getStudents, getTeachers } from "./api";

export const useStudents = (p0: never[]) => {
  return useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });
};

export const useTeachers = (p0: never[]) => {
  return useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
  });
};