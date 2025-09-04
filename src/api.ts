import axios from "axios";

export const getStudents = async () => {
  const { data } = await axios.get("http://localhost:1337/api/students");

  return data.data;
};
export const getTeachers = async () => {
  const { data } = await axios.get("http://localhost:1337/api/teachers");

  return data.data;
};
