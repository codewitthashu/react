function App() {
  const matches = [
    // Group Stage (Feb 7-20)
    { date: "7 Feb", time: "11:00 AM", match: "Pakistan vs Netherlands", stage: "Group A", venue: "SSC, Colombo" },
    { date: "7 Feb", time: "3:00 PM", match: "West Indies vs Bangladesh", stage: "Group C", venue: "Kolkata" },
    { date: "7 Feb", time: "7:00 PM", match: "India vs USA", stage: "Group A", venue: "Mumbai" },
    { date: "8 Feb", time: "11:00 AM", match: "New Zealand vs Afghanistan", stage: "Group D", venue: "Chennai" },
    { date: "8 Feb", time: "3:00 PM", match: "England vs Nepal", stage: "Group C", venue: "Mumbai" },
    { date: "8 Feb", time: "7:00 PM", match: "Sri Lanka vs Ireland", stage: "Group B", venue: "P. Colombo" },
    { date: "9 Feb", time: "11:00 AM", match: "Bangladesh vs Italy", stage: "Group C", venue: "Kolkata" },
    { date: "9 Feb", time: "3:00 PM", match: "Zimbabwe vs Oman", stage: "Group B", venue: "SSC, Colombo" },
    { date: "9 Feb", time: "7:00 PM", match: "South Africa vs Canada", stage: "Group D", venue: "Ahmedabad" },
    { date: "10 Feb", time: "11:00 AM", match: "Netherlands vs Namibia", stage: "Group A", venue: "Delhi" },
    { date: "10 Feb", time: "3:00 PM", match: "New Zealand vs UAE", stage: "Group D", venue: "Chennai" },
    { date: "10 Feb", time: "7:00 PM", match: "Pakistan vs USA", stage: "Group A", venue: "SSC, Colombo" },
    { date: "11 Feb", time: "11:00 AM", match: "South Africa vs Afghanistan", stage: "Group D", venue: "Ahmedabad" },
    { date: "11 Feb", time: "3:00 PM", match: "Australia vs Ireland", stage: "Group B", venue: "P. Colombo" },
    { date: "11 Feb", time: "7:00 PM", match: "England vs West Indies", stage: "Group C", venue: "Mumbai" },
    { date: "12 Feb", time: "11:00 AM", match: "Sri Lanka vs Oman", stage: "Group B", venue: "Kandy" },
    { date: "12 Feb", time: "3:00 PM", match: "Nepal vs Italy", stage: "Group C", venue: "Mumbai" },
    { date: "12 Feb", time: "7:00 PM", match: "India vs Namibia", stage: "Group A", venue: "Delhi" },
    { date: "13 Feb", time: "11:00 AM", match: "Australia vs Zimbabwe", stage: "Group B", venue: "P. Colombo" },
    { date: "13 Feb", time: "3:00 PM", match: "Canada vs UAE", stage: "Group D", venue: "Delhi" },
    { date: "13 Feb", time: "7:00 PM", match: "USA vs Netherlands", stage: "Group A", venue: "Chennai" },
    { date: "14 Feb", time: "11:00 AM", match: "Ireland vs Oman", stage: "Group B", venue: "SSC, Colombo" },
    { date: "14 Feb", time: "3:00 PM", match: "England vs Bangladesh", stage: "Group C", venue: "Kolkata" },
    { date: "14 Feb", time: "7:00 PM", match: "New Zealand vs South Africa", stage: "Group D", venue: "Ahmedabad" },
    { date: "15 Feb", time: "11:00 AM", match: "West Indies vs Nepal", stage: "Group C", venue: "Mumbai" },
    { date: "15 Feb", time: "3:00 PM", match: "USA vs Namibia", stage: "Group A", venue: "Chennai" },
    { date: "15 Feb", time: "7:00 PM", match: "India vs Pakistan", stage: "Group A", venue: "P. Colombo" },
    { date: "16 Feb", time: "11:00 AM", match: "Afghanistan vs UAE", stage: "Group D", venue: "Delhi" },
    { date: "16 Feb", time: "3:00 PM", match: "England vs Italy", stage: "Group C", venue: "Kolkata" },
    { date: "16 Feb", time: "7:00 PM", match: "Australia vs Sri Lanka", stage: "Group B", venue: "Kandy" },
    { date: "17 Feb", time: "11:00 AM", match: "New Zealand vs Canada", stage: "Group D", venue: "Chennai" },
    { date: "17 Feb", time: "3:00 PM", match: "Ireland vs Zimbabwe", stage: "Group B", venue: "Kandy" },
    { date: "17 Feb", time: "7:00 PM", match: "Bangladesh vs Nepal", stage: "Group C", venue: "Mumbai" },
    { date: "18 Feb", time: "11:00 AM", match: "South Africa vs UAE", stage: "Group D", venue: "Delhi" },
    { date: "18 Feb", time: "3:00 PM", match: "Pakistan vs Namibia", stage: "Group A", venue: "SSC, Colombo" },
    { date: "18 Feb", time: "7:00 PM", match: "India vs Netherlands", stage: "Group A", venue: "Ahmedabad" },
    { date: "19 Feb", time: "11:00 AM", match: "West Indies vs Italy", stage: "Group C", venue: "Kolkata" },
    { date: "19 Feb", time: "3:00 PM", match: "Sri Lanka vs Zimbabwe", stage: "Group B", venue: "P. Colombo" },
    { date: "19 Feb", time: "7:00 PM", match: "Afghanistan vs Canada", stage: "Group D", venue: "Chennai" },
    { date: "20 Feb", time: "7:00 PM", match: "Australia vs Oman", stage: "Group B", venue: "Kandy" },

    // Super 8 (Feb 21 - Mar 1)
    { date: "21 Feb", time: "7:00 PM", match: "Y2 vs Y3", stage: "Super 8", venue: "P. Colombo" },
    { date: "22 Feb", time: "3:00 PM", match: "Y1 vs Y4", stage: "Super 8", venue: "Kandy" },
    { date: "22 Feb", time: "7:00 PM", match: "X1 vs X4", stage: "Super 8", venue: "Ahmedabad" },
    { date: "23 Feb", time: "7:00 PM", match: "X2 vs X3", stage: "Super 8", venue: "Mumbai" },
    { date: "24 Feb", time: "7:00 PM", match: "Y1 vs Y3", stage: "Super 8", venue: "Kandy" },
    { date: "25 Feb", time: "7:00 PM", match: "Y2 vs Y4", stage: "Super 8", venue: "P. Colombo" },
    { date: "26 Feb", time: "3:00 PM", match: "X3 vs X4", stage: "Super 8", venue: "Ahmedabad" },
    { date: "26 Feb", time: "7:00 PM", match: "X1 vs X2", stage: "Super 8", venue: "Chennai" },
    { date: "27 Feb", time: "7:00 PM", match: "Y1 vs Y2", stage: "Super 8", venue: "P. Colombo" },
    { date: "28 Feb", time: "7:00 PM", match: "Y3 vs Y4", stage: "Super 8", venue: "Kandy" },
    { date: "1 Mar", time: "3:00 PM", match: "X2 vs X4", stage: "Super 8", venue: "Delhi" },
    { date: "1 Mar", time: "7:00 PM", match: "X1 vs X3", stage: "Super 8", venue: "Kolkata" },

    // Knockouts
    { date: "4 Mar", time: "7:00 PM", match: "Semi-Final 1", stage: "SF", venue: "Kolkata / P. Colombo" },
    { date: "5 Mar", time: "7:00 PM", match: "Semi-Final 2", stage: "SF", venue: "Mumbai" },
    { date: "8 Mar", time: "7:00 PM", match: "FINAL", stage: "Final", venue: "Ahmedabad / P. Colombo" }
  ];

  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "white", padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", fontSize: "48px", background: "linear-gradient(90deg, #f97316, #ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "10px" }}>
          ICC Men's T20 World Cup 2026
        </h1>
        <p style={{ textAlign: "center", fontSize: "24px", color: "#38bdf8" }}>Full Schedule | India & Sri Lanka | Feb 7 - Mar 8, 2026 | 55 Matches</p>

        <div style={{ background: "rgba(30,41,59,0.8)", borderRadius: "15px", padding: "30px", marginTop: "30px" }}>
          <h2 style={{ textAlign: "center", color: "#fbbf24", fontSize: "32px", marginBottom: "30px" }}>Complete Match Schedule</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "16px" }}>
              <thead>
                <tr style={{ backgroundColor: "#1e293b" }}>
                  <th style={{ padding: "12px", border: "1px solid #475569", textAlign: "left" }}>Date</th>
                  <th style={{ padding: "12px", border: "1px solid #475569", textAlign: "left" }}>Time (IST)</th>
                  <th style={{ padding: "12px", border: "1px solid #475569", textAlign: "left" }}>Match</th>
                  <th style={{ padding: "12px", border: "1px solid #475569", textAlign: "left" }}>Stage</th>
                  <th style={{ padding: "12px", border: "1px solid #475569", textAlign: "left" }}>Venue</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((match, index) => (
                  <tr key={index} style={{
                    backgroundColor: index % 2 === 0 ? "rgba(255,255,255,0.05)" : "transparent",
                    ...(match.match.includes("India") && { backgroundColor: "rgba(251,191,36,0.2)", fontWeight: "bold" }),
                    ...(match.stage === "Final" && { backgroundColor: "#FFD700", color: "#000", fontSize: "18px", fontWeight: "bold" })
                  }}>
                    <td style={{ padding: "10px", border: "1px solid #475569" }}>{match.date}</td>
                    <td style={{ padding: "10px", border: "1px solid #475569" }}>{match.time}</td>
                    <td style={{ padding: "10px", border: "1px solid #475569" }}>{match.match}</td>
                    <td style={{ padding: "10px", border: "1px solid #475569" }}>{match.stage}</td>
                    <td style={{ padding: "10px", border: "1px solid #475569" }}>{match.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ fontSize: "24px", color: "#fbbf24" }}>🏆 Who Will Win the Trophy?</p>
            <p style={{ color: "#94a3b8" }}>Made by Ashish Chudasama | React Homework Project</p>
          </div>
        </div>
      </div>
    </div>
  );
}