import React from "react";
import TicketCard from "./{components}/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    // set is a data structure that only allows unique values
    // removes the duplicates
    // {category: "Hardware problem"} means ticket.category
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {/* if we have tickets or if tickets are available
    we want to take our unique categories and we want to map over those
    for each unique category and we gonna get unique category and category index we gonna crate an function  */}
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
