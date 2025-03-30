export default function DashboardCards() {
    return (
      <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
        {cards.map((card, index) => (
          <div
            key={index}
            className="md:w-96 w-full p-4  rounded-2xl shadow-sm border flex flex-col"
          >
            <div className="flex justify-between items-center  text-sm">
              <span>{card.title}</span>
              {card.icon}
            </div>
            <div className="mt-2 text-2xl font-bold">{card.value}</div>
            <div className="text-sm text-gray-500">{card.change}</div>
          </div>
        ))}
      </div>
    );
  }
  
  const cards = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: <span>$</span>,
    },
    {
      title: "Subscriptions",
      value: "+2,350",
      change: "+180.1% from last month",
      icon: <span>👥</span>,
    },
    {
      title: "Sales",
      value: "+12,234",
      change: "+19% from last month",
      icon: <span>💳</span>,
    },
    {
      title: "Active Now",
      value: "+573",
      change: "+201 since last hour",
      icon: <span>📈</span>,
    },
  ];
  