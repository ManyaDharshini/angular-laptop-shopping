interface Order {
    name: string;
    address: string;
    city: string;
    state: string;
    date: string;
    time: string;
    totalPrice: number;
    userId: string;
    items: OrderItem[];
    id: number;
  }
  
  interface OrderItem {
    productId: number;
    userId: string;
    image: string;
    name: string;
    price: string;
    quantity: number;
    id: number;
  }