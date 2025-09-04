export interface Teacher {
  id: number;
  name: string;
  department: string;
  phone: string;
  email: string;

}
export interface Student {
  id: number;
  name: string;
  grade: string;
  address: {
    street: string;
    city: string;
  };
  parentName: string;
  contact: { phone: string; email: string };
  parentPhone: string;
  parentEmail: string;
  tuition: number;
}
