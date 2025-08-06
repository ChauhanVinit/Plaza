export async function POST(req) {
  const { userName, companyName, userEmail, phoneNumber, userMessage } = await req.json();

  const API_TOKEN = "4d3c7fe6b2567ed7f0cd037584d39c3dd5b9e572";
  const BASE_URL = "https://api.pipedrive.com/v1";

  try {
    //  Create Organization
    const orgRes = await fetch(`${BASE_URL}/organizations?api_token=${API_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: companyName }),
    });
    const orgData = await orgRes.json();
    const orgId = orgData.data?.id;

    // Create Person and link to Organization
    const personRes = await fetch(`${BASE_URL}/persons?api_token=${API_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userName,
        email: [{ value: userEmail, primary: true }],
        phone: [{ value: phoneNumber, primary: true }],
        org_id: orgId,
        visible_to: 3
        
      }),
    });
    const personData = await personRes.json();
    const personId = personData.data?.id;

    if (!personId) {
      return Response.json({ success: false, message: "Failed to create person" }, { status: 500 });
    }

    //  Create Deal linked to Person and Org
    const dealRes = await fetch(`${BASE_URL}/deals?api_token=${API_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: `Quote from ${userName} (${companyName})`,
        person_id: personId,
        org_id: orgId,
        value: 0,
      }),
    });

    const dealData = await dealRes.json();
    const dealId = dealData.data?.id;

    //  Add userMessage as a Note to the Person
    const noteRes = await fetch(`${BASE_URL}/notes?api_token=${API_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: userMessage,
        person_id: personId,
        // Alternatively: deal_id: dealId if you want it on the deal
      }),
    });

    const noteData = await noteRes.json();

    // Optional: Check if note creation failed
    if (!noteData.success) {
      console.warn("Note not added:", noteData);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Pipedrive Error:", error);
    return Response.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
