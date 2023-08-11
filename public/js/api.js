export async function getVisits() {
  const response = await fetch(`/api/visits`);
  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  return await response.json();
}

export async function getTreatments() {
  const response = await fetch(`/api/treatments`);
  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  return await response.json();
}

export async function getDepartments() {
  const response = await fetch(`/api/departments`);
  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  return await response.json();
}

export async function getPhysicians() {
  const response = await fetch(`/api/physicians`);
  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  return await response.json();
}

export async function updateVisit(data) {
  const response = await fetch(`/api/visits/${data.ed_visit_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  const { message } = await response.json();
  alert(message);

  return true;
}

export async function updateEmergencyDepartment(data) {
  const response = await fetch(`/api/departments/${data.emergency_department_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  const { message } = await response.json();
  alert(message);

  return true;
}

export async function updateTreatments(data) {
  const response = await fetch(`/api/treatments/${data.treatment_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  const { message } = await response.json();
  alert(message);

  return true;
}

export async function updatePhysicians(data) {
  const response = await fetch(`/api/physicians/${data.emergency_physician_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  const { message } = await response.json();
  alert(message);

  return true;
}

