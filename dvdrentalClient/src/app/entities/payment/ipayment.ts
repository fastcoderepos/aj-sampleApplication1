export interface IPayment {
  amount: number;
  paymentId: number;

  customerDescriptiveField?: string;
  customerId: number;
  rentalDescriptiveField?: number;
  rentalId: number;
  staffDescriptiveField?: string;
  staffId: number;
}
