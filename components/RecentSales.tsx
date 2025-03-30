import Image from "next/image";

export default function RecentSales() {
    const sales = [
      {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        amount: "$1,999.00",
        avatar: "https://i.pravatar.cc/40?img=1",
      },
      {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        amount: "$39.00",
        avatar: "https://i.pravatar.cc/40?img=2",
      },
      {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        amount: "$299.00",
        avatar: "https://i.pravatar.cc/40?img=3",
      },
      {
        name: "William Kim",
        email: "will@email.com",
        amount: "$99.00",
        avatar: "https://i.pravatar.cc/40?img=4",
      },
      {
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        amount: "$39.00",
        avatar: "https://i.pravatar.cc/40?img=5",
      },
    ];
  
    return (
      <div className="w-full p-6 rounded-2xl shadow-sm border">
        <h3 className="text-lg font-semibold">Recent Sales</h3>
        <p className="text-sm ">You made 265 sales this month.</p>
        <div className="mt-8 space-y-4">
          {sales.map((sale, index) => (
            <div key={index} className="flex justify-between items-center p-4 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3 ">
                <Image
                  src={sale.avatar}
                  alt={sale.name}
                  height={10}
                  width={10}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{sale.name}</p>
                  <p className="text-xs ">{sale.email}</p>
                </div>
              </div>
              <span className="text-sm font-medium">{sale.amount}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  