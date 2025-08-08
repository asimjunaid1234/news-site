const categories = {
  "Campus Life": [
    ["Library installs hammocks for 'productive napping'", "Students report a 200% increase in napping efficiency."],
    ["Cafeteria introduces mystery meal Mondays", "No one knows what’s in it, but sales are booming."],
    ["Dean spotted riding skateboard to class", "Witnesses say it was 'radical'."],
    ["Hostel installs karaoke machine in study room", "Grades drop, but morale skyrockets."],
  ],
  "Student Politics": [
    ["Election delayed due to missing ballot box", "It was later found in the vending machine room."],
    ["Student Council proposes 'No Monday Classes' law", "Faculty says negotiations will be 'fun'."],
    ["Debate Club debates whether debates matter", "Audience left in philosophical crisis."],
    ["New student protest: 'More nap breaks now!'", "Gathering drew over 200 sleepy supporters."],
  ],
  "Sports": [
    ["Basketball team wins using only half the court", "Coach calls it 'innovative strategy'."],
    ["College swim team trains in kiddie pools", "Budget cuts cited as reason."],
    ["Esports team demands more ergonomic chairs", "Says performance depends on lumbar support."],
    ["Annual sack race upgraded to 'extreme sack racing'", "Now includes ramps and obstacles."],
  ],
  "Arts & Culture": [
    ["Drama Club stages play entirely in mime", "Audience clapped in complete silence."],
    ["Art Department bans use of the color blue", "Students paint in rebellious shades of teal."],
    ["Poetry Slam interrupted by unexpected jazz band", "Event now known as 'Jazz Slam'."],
    ["Photography Club takes pictures of empty chairs", "Calls it 'existential art'."],
  ],
  "Tech & Science": [
    ["Robotics Society builds AI to do homework", "AI now demands its own diploma."],
    ["Science Lab accidentally creates glowing soda", "Students drink it anyway."],
    ["Computer Club sets world record for longest LAN party", "Pizza supply barely survived."],
    ["Engineering students create self-walking bicycle", "Local dogs very confused."],
  ]
};

// Shuffle helper
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Render news
function renderNews() {
  const container = document.getElementById("news-container");
  container.innerHTML = "";

  for (const category in categories) {
    const catTitle = document.createElement("div");
    catTitle.classList.add("category-title");
    catTitle.textContent = category;
    container.appendChild(catTitle);

    shuffleArray(categories[category]).forEach(([headline, details]) => {
      const item = document.createElement("div");
      item.classList.add("news-item");

      const title = document.createElement("div");
      title.classList.add("news-headline");
      title.textContent = headline;

      const meta = document.createElement("div");
      meta.classList.add("news-meta");
      meta.textContent = ["Just now", "1h ago", "Yesterday", "2 days ago"][Math.floor(Math.random() * 4)];

      const detail = document.createElement("div");
      detail.classList.add("news-details");
      detail.textContent = details;

      item.appendChild(title);
      item.appendChild(meta);
      item.appendChild(detail);

      item.addEventListener("click", () => {
        detail.style.display = detail.style.display === "block" ? "none" : "block";
      });

      container.appendChild(item);
    });
  }
}

renderNews();
